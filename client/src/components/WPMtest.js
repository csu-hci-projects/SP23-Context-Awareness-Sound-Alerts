import React, { useEffect, useReducer, useRef } from "react";

export default function WPMtest(props) {
    function DisplayWPM(props) {
        return <p>Your WPM: {props.wpm}</p>;
    }

    const initialState = {
        sentences: props.text.split(". "),
        currentIndex: 0,
        startTime: null,
        wpm: 0,
        inputStyle: {},
    };

    function reducer(state, action) {
        switch (action.type) {
            case "SET_START_TIME":
                return { ...state, startTime: action.payload };
            case "SET_WPM":
                return { ...state, wpm: action.payload };
            case "SET_INPUT_STYLE":
                return { ...state, inputStyle: action.payload };
            case "INCREMENT_INDEX":
                return { 
                    ...state,
                    currentIndex: (state.currentIndex + 1) % state.sentences.length,
                    startTime: null,
                };
            case "RESET":
                return { ...initialState, sentences: action.payload.split(". ") };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);

    const currentSentence = state.sentences[state.currentIndex];

    useEffect(() => {
        props.phaseData.wpm = state.wpm;
    }, [props.phaseData, state.wpm]);

    const handleKeyPress = (event) => {
        try {
            if (state.startTime === null) {
                dispatch({ type: "SET_START_TIME", payload: new Date().getTime() });
            }

            if (currentSentence.startsWith(event.target.value)) {
                dispatch({ type: "SET_INPUT_STYLE", payload: {} });

                const currentTime = new Date().getTime();
                const totalTime = (currentTime - state.startTime) / 1000;
                const totalCorrectWords = event.target.value.split(" ").length - 1;
                const newWpm = Math.round((totalCorrectWords / totalTime) * 60);
                dispatch({ type: "SET_WPM", payload: newWpm });
            } else {
                dispatch({ type: "SET_INPUT_STYLE", payload: { backgroundColor: "#ffcccc" } });
            }

            if (event.target.value === currentSentence) {
                if (state.currentIndex + 1 === state.sentences.length) {
                    dispatch({ type: "INCREMENT_INDEX" });
                    inputRef.current.value = "";
                } else {
                    dispatch({ type: "INCREMENT_INDEX" });
                    event.target.value = "";
                }
            }
        } catch (error) {
            console.error('Error in handleKeyPress:', error);
        }
    };

    const handleRestart = () => {
        try {
            dispatch({ type: "RESET", payload: "The quick brown fox jumps over the lazy dog." });
            inputRef.current.value = "";
        } catch (error) {
            console.error('Error in handleRestart:', error);
        }
    };

    return (
        <div className={"wpm-test"}>
            <p>
                <b>{currentSentence}</b>
            </p>
            <textarea
                placeholder="Type the above sentence as fast and as accurately as possible"
                rows={3}
                cols={50}
                ref={inputRef}
                onKeyUp={handleKeyPress}
                style={state.inputStyle}
            />
            {state.startTime !== null && (
                <div>
                    <DisplayWPM wpm={state.wpm} />
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
        </div>
    );
}
