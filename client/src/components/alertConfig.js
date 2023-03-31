const URL_PREFIX = "http://localhost:22222/"

const alertSound1 = {
    file: new Audio(URL_PREFIX + "one.wav"),
    volume: 1
}
const alertSound2 = {
    file: new Audio(URL_PREFIX + "two.wav"),
    volume: 1
}
const alertSound3 = {
    file: new Audio(URL_PREFIX + "three.wav"),
    volume: 1
}

export const alertConfig = {
    sounds: [alertSound1, alertSound2, alertSound3],
    padding_ms: 10 * 1000, // Minimum space between alerts
    potentialLength_ms: 15 * 1000, // The amount of time an alert could possibly be played after padding
    frontPadding_ms: 0 * 1000, // Minimum space before first alert
}