const alertSound1 = {
    file: "one.wav",
}
const alertSound2 = {
    file: "two.wav",
}
const alertSound3 = {
    file: "three.wav",
}

export const alertConfig = {
    sounds: [alertSound1, alertSound2, alertSound3],
    padding_ms: 20 * 1000, // Minimum space between alerts
    potentialLength_ms: 60 * 1000, // The amount of time an alert could possibly be played after padding
    frontPadding_ms: 20 * 1000, // Minimum space before first alert
}