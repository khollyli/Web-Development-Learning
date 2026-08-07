const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


gamePattern.push(nextSequence());

// Random number generator
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    // Animates a flash for a random button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // return randomChosenColour;
}

// for (var i = 0; i < 4; i++) {
//     document.getElementById(buttonColours[i]).addEventListener("click", (bttn) => {
//         var userChosenColour = bttn.currentTarget.id;
//         userClickedPattern.push(userChosenColour);
//         randomChosenSound.play();
//         console.log(userClickedPattern);
//     });
// } 

// * same function as code above
// When one of the four buttons are clicked, it pushes the id of the button onto an array and displays the contents of the array into the console
// + When chosen button is clicked on, the sound for it plays.
$(".btn").on("click", function() {
    // can only use "this" or the following line of code below with a regular function (function() {}) not an arrow function (() => {})
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    // if (userChosenColour == randomChosenColour) {
        playSound(userChosenColour);
    // }
    
    animatePress(userChosenColour);
    console.log(userClickedPattern);
});

function playSound(name) {
    var audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    const selectedBttn = document.querySelector('.' + currentColour);
    selectedBttn.classList.add('pressed');
    setTimeout(function() {
        selectedBttn.classList.remove('pressed');
    }, 100);
}