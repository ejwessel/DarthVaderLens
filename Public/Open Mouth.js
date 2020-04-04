// -----JS CODE-----
// @input Component.ScriptComponent constants
// @input Component.AudioComponent[] quotes
// @input Component.AudioComponent breathing

// sound played depends on what current index in loop
var quote_idx = script.constants.api.playCount % script.quotes.length

// play when mouth is opened
if (!script.constants.api.isPlayingSound) {
    script.constants.api.isPlayingSound = true
    script.breathing.stop(false)
    script.quotes[quote_idx].fadeOutTime = 5
    script.quotes[quote_idx].play(1)
    script.constants.api.playCount += 1
}

// continue breathing after sound plays
script.quotes[quote_idx].setOnFinish(function() {
    script.breathing.play(-1)
    script.constants.api.isPlayingSound = false
})