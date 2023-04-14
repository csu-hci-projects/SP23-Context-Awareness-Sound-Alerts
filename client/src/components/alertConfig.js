const alertSound1 = {
    file: "Funk.wav",
    volume: .4
}
const alertSound2 = {
    file: "Glass.wav",
    volume: .3
}
const alertSound3 = {
    file: "Ping.wav",
    volume: .4
}

export const alertConfig = {
    sounds: [alertSound1, alertSound2, alertSound3],
    // THESE ARE ALL SHORT TIMES NOW FOR EASY TESTING
    padding_ms: 15 * 1000, // Minimum space between alerts
    potentialLength_ms: 45 * 1000, // The amount of time an alert could possibly be played after padding
    frontPadding_ms: 15 * 1000, // Minimum space before first alert
}