// -----JS CODE-----
// @input Component.ScriptComponent constants
// @input Component.AudioComponent quote
// @input Component.AudioComponent breathing

// play when mouth is opened
if (!script.constants.api.isPlayingSound) {
    script.constants.api.isPlayingSound = true
    script.breathing.stop(false)
    script.quote.play(1)
    print(script.quote.audioTrack.name)
}

// continue breathing after sound plays
script.quote.setOnFinish(function() {
    script.breathing.play(-1)
    script.constants.api.isPlayingSound = false
})