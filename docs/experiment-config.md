# Experiment Config Object
This data structure provides for the latin square functionality. The app will run in the specified order.

```javascript
// An individual experiment
const exp0 = {
    environment: "Right By Da Beach BBooooIIIIII",
    backgroundSound: "beach.flac",
    notificationSoundOrder: [0, 1, 2],
    backgroundImage: "margahrita.jpeg",
    typingText: "The quick brown fox likes margahritas."
}

const exp1 = {
    environment: "Expensive bar where airplanes park.",
    backgroundSound: "airport.flac",
    notificationSoundOrder: [1, 2, 0],
    backgroundImage: "bloody-mary.jpeg",
    typingText: "The quick brown fox likes bloody mary's."
}

const exp2 = {
    environment: "City (bar)",
    backgroundSound: "city.flac",
    notificationSoundOrder: [2, 0, 1],
    backgroundImage: "martini.jpeg",
    typingText: "The quick brown fox is now trashed."
}

// All experiements will get packaged in an array
// Along with which sequencial number of the experiment this is
const experimentConfig = {
    expID: 0,
    order: [exp0, exp1, exp2]
}

```