// -----JS CODE-----
// @input Component.AudioComponent quote
// @input Component.AudioComponent breathing

// play when mouth is opened
if (!script.quote.isPlaying()) {
    script.breathing.stop(true)
    script.quote.play(1)
}

// continue breathing after sound plays
script.quote.setOnFinish(function() {
    script.breathing.play(-1)
})