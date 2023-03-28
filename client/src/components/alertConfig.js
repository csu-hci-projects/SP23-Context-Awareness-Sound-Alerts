const alertSound1 = {
    file: "alert1.mp3",
}
const alertSound2 = {
    file: "alert1.mp3",
}
const alertSound3 = {
    file: "alert1.mp3",
}

export const alertConfig = {
    sounds: [alertSound1, alertSound2, alertSound3],
    padding_ms: 20 * 1000, // Minimum space between alerts
    potentialLength_ms: 60 * 1000, // The amount of time an alert could possibly be played after padding
    frontPadding_ms: 20 * 1000, // Minimum space before first alert
}