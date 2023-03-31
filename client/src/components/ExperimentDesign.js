// An individual experiment
const exp0 = {
    environment: "Beach",
    backgroundSound: "beach-6min-48k24b.flac",
    notificationSoundOrder: [0, 1, 2],
    backgroundImage: "margarita.jpeg",
    typingText: "The quick brown fox likes margaritas."
}

const exp1 = {
    environment: "Airport",
    backgroundSound: "airport-ambience-mexico-5min48k24b.flac",
    notificationSoundOrder: [1, 2, 0],
    backgroundImage: "bloody-mary.jpeg",
    typingText: "The quick brown fox likes bloody mary's."
}

const exp2 = {
    environment: "City",
    backgroundSound: "city-crosswalk-5min48k24b.flac",
    notificationSoundOrder: [2, 0, 1],
    backgroundImage: "martini.jpeg",
    typingText: "The quick brown fox is now trashed."
}

// All experiments will get packaged in an array
// Along with which sequential number of the experiment this is
export const experimentConfigA = {
    expID: 0,
    order: [exp0, exp1, exp2]
}

export const experimentConfigB = {
    expID: 1,
    order: [exp1, exp2, exp0]
}

export const experimentConfigC = {
    expID: 2,
    order: [exp2, exp0, exp1]
}