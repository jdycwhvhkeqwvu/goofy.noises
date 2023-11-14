var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");

    // Get the button text (e.g., 'w', 'a', 's', etc.)
    var buttonInnerHTML = this.innerHTML;

    // Play the corresponding sound
    playSound(buttonInnerHTML);

    // What to do when clicked
    // This code will be executed when any drum button is clicked
  });
}

// Function to play the sound based on the button clicked
function playSound(key) {
  // Map button text to corresponding sound file names
  var soundMappings = {
    'w': 'cat',
    'a': 'dog',
    's': 'elephant',
    'd': 'cow',
    'j': 'horse',
    'k': 'tiger'
    // Add more mappings as needed
  };

  // Get the sound file name from the mappings
  var soundFileName = soundMappings[key];

  // Construct the path to the audio file
  var audioPath = 'sounds/' + soundFileName + '.mp3';

  // Create a new Audio object
  var audio = new Audio(audioPath);

  // Play the audio
  audio.play();
}
