// Variable to hold the currently playing audio
let currentAudio = null;

// Select all sound buttons
const buttons = document.querySelectorAll('.sound-button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// Function to play sound
function playSound(soundFile) {
    // Pause the currently playing audio if it exists
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }

    // Create a new audio object for the selected sound
    currentAudio = new Audio(soundFile);
    currentAudio.play();
}