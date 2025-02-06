let score = 0;

// Ensure the pet image is set to the default image as soon as the page loads
window.onload = () => {
    const petImg = document.getElementById("pet");
    petImg.src = "cat.webp"; // This ensures the cat starts with the "cat.webp" image
};

function moveBall() {
  const ball = document.getElementById("ball");
  ball.style.top = Math.random() * 300 + "px";
  ball.style.left = Math.random() * 300 + "px";
}

function catchBall() {
  score++;
  document.getElementById("score").innerText = `Score: ${score}`;
  // The image remains the same unless an action button is clicked
}

setInterval(moveBall, 1200);

// Function to change cat's action and update image
function changeCatAction(action) {
    const petImg = document.getElementById("pet");
    const statusText = document.getElementById("status");

    // Change the cat's image and the status text based on the action
    if (action === "feed") {
        petImg.src = "eatingcat.gif"; // Feeding image
        statusText.innerText = "Mmm... Yummy!";
        playSound("feed.mp3");
    } else if (action === "play") {
        petImg.src = "playingcat.gif"; // Playing image
        statusText.innerText = "Yay! Playing is fun!";
        playSound("play.mp3");
    } else if (action === "clean") {
        petImg.src = "cleaningcat.gif"; // Cleaning image
        statusText.innerText = "All clean and fresh!";
        playSound("clean.mp3");
    } else if (action === "sleep") {
        petImg.src = "sleeping.gif"; // Sleeping image
        statusText.innerText = "Zzz... Sleeping!";
        playSound("sleeping.mp3");
    }

    // Reset back to the original cat image after 5 seconds
    setTimeout(() => {
        petImg.src = "cat.webp";  // Change this to your original cat image file
        statusText.innerText = "Your pet is happy!";
    }, 5000);
}

// Function to play sound
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.volume = 0.5;
    audio.play();
}
