import React, {useEffect, useRef, useState} from "react";
import Experiment from "../components/experiment";
import BreakTimer from "../components/break-timer";
import {alertConfig} from "../components/alertConfig";

export default function ExperimentController(props) {

    const NUM_PHASES = 3;
    const [currentPhase, setCurrentPhase] = useState(0);
    const [breakTime, setBreakTime] = useState(false);

    const nextPhase = () => {
        if (currentPhase >= NUM_PHASES - 1) {
            // Finished last phase, advance page
            props.context.setPageIndex(props.context.pageIndex + 1)
        } else {
            // Set experiment end time
            props.context.experimentState.phaseData[currentPhase]
                .experimentEndTime = new Date().getTime();
            // Set up the next phase and run a break timer first
            setCurrentPhase(currentPhase + 1)
            setBreakTime(true)
        }
    }

    // Auto Advance Mechanism
    const [expStart_ms, setExpStartTime] = useState(new Date().getTime())
    const [expElapsed, setExpElapsed] = useState(new Date(0));
    const interval = useRef(undefined)
    const ADDITIONAL_EXPERIMENT_TAIL_PADDING_ms = (10 * 1000); // 10secs
    const maxPhaseTime_ms = // The length of the experiment before break time auto advance
        alertConfig.frontPadding_ms +
        (NUM_PHASES * alertConfig.padding_ms) +
        (NUM_PHASES * alertConfig.potentialLength_ms) +
        ADDITIONAL_EXPERIMENT_TAIL_PADDING_ms;
    // const maxPhaseTime_ms = (20*1000);
    const phaseTimer = () => {
        return setInterval(() => {
            const curTime_ms = new Date().getTime();
            const elapsed = new Date(curTime_ms - expStart_ms);
            setExpElapsed(elapsed);
            if (elapsed >= maxPhaseTime_ms && breakTime === false) {
                nextPhase();
            }
        }, 1000)
    }
    useEffect(()=>{
        interval.current = phaseTimer()

        return (
            clearInterval(interval.current)
        )
    }, [])

    useEffect(()=>{
        clearInterval(interval.current)
        interval.current = phaseTimer()

    }, [currentPhase])

    useEffect(() => {
        setExpStartTime(new Date().getTime());
    }, [breakTime])

    const isItBreakTime = () => {
        if (breakTime) {
            return <BreakTimer context={props.context} setBreakTime={setBreakTime}/>
        } else {
            return <Experiment
                context={props.context}
                config={props.context.experimentState.assignedExperiment.order[currentPhase]}
                // config={expConfig.order[currentPhase]}
                alertOrder={props.context.experimentState.assignedExperiment.order[currentPhase].notificationSoundOrder}
                nextPhase={nextPhase}
                currentPhase={currentPhase}/>
        }
    }

    const getAutoAdvanceFormatting = () => {
        const willAdvanceDate = new Date(maxPhaseTime_ms);

        return (
            <p>Auto Advance At: {willAdvanceDate.getMinutes()}:{willAdvanceDate.getSeconds()}</p>
        )
    }

    return (
        <div className={"content"}>
            <div className={"debug-alert-sound"}>
                {props.context.debug ? <p>Current Phase: {currentPhase + 1}</p> : null}
                {props.context.debug ?
                    <p>Elapsed: {expElapsed.getMinutes()}:{expElapsed.getSeconds().toPrecision(2)}</p> : null}
                {props.context.debug ? getAutoAdvanceFormatting() : null}
            </div>

            {isItBreakTime()}
        </div>
    );
}