const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$(document).click(function() {
    $(randomChosenColour).animate();
});
