const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
var randomChosenColour = buttonColours[nextSequence()];
var randomChosenSound = new Audio('./sounds/' + randomChosenColour + '.mp3');
gamePattern.push(randomChosenColour);

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
// $(document).addEventListener("click", () => {
    randomChosenSound.play();
// });