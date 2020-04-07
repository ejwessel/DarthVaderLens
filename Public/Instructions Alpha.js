// -----JS CODE-----
// @input Component.Text textObj
// @input Component.Image[] buttons

var textColor = script.textObj.textFill.color
var dropShadowColor = script.textObj.dropshadowSettings.fill.color


// Hide text if recording
if (global.scene.isRecording()) {
    // Hide text
    textColor.w = 0
    dropShadowColor.w = 0
    script.textObj.textFill.color = textColor
    script.textObj.dropshadowSettings.fill.color = dropShadowColor
    
    for (var i = 0; i < script.buttons.length; i++) {
        var color = script.buttons[i].mainPass.baseColor
        color.w = 0
        script.buttons[i].mainPass.baseColor = color        
    }
}

var currentTime = getTime()

//show credit for 3 seconds, then phase out
if (currentTime <= 3) {
    return
}

//use current time as alpha delta
currentTime /= 100

//phase out text
textColor.w -= currentTime
//phase out dropshadow
dropShadowColor.w -= currentTime

script.textObj.textFill.color = textColor
script.textObj.dropshadowSettings.fill.color = dropShadowColor

for (var i = 0; i < script.buttons.length; i++) {
    var color = script.buttons[i].mainPass.baseColor
    color.w -= currentTime
    script.buttons[i].mainPass.baseColor = color 
}

//disable this script and object after phase out
if (textColor.w <= 0) {
    script.enabled = false
    script.textObj.enabled = false
    print("Script and Text Disabled")
}