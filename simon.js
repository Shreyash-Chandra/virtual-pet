let sequence = [];
let playerSequence = [];
let level = 0;

// Sound files for each color
const sounds = {
    red: new Audio("red.mp3"),
    blue: new Audio("blue.wav"),
    yellow: new Audio("yellow.mp3"),
    green: new Audio("green.wav")
};

function startGame() {
    sequence = [];
    playerSequence = [];
    level = 0;
    document.getElementById("status").innerText = "Watch the pattern...";
    nextRound();
}

function nextRound() {
    playerSequence = [];
    level++;
    document.getElementById("status").innerText = `Level ${level}`;
    
    const colors = ["red", "blue", "yellow", "green"];
    sequence.push(colors[Math.floor(Math.random() * 4)]);
    
    let i = 0;
    let interval = setInterval(() => {
        flashColor(sequence[i]);
        i++;
        if (i >= sequence.length) clearInterval(interval);
    }, 1000);
}

function flashColor(color) {
    let btn = document.getElementById(color);
    btn.classList.add("flash");

    // Play the corresponding sound
    sounds[color].currentTime = 0;  // Reset audio to start from the beginning
    sounds[color].play();

    setTimeout(() => btn.classList.remove("flash"), 500);
}

function playerClick(color) {
    playerSequence.push(color);
    flashColor(color);

    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        document.getElementById("status").innerText = "Game Over! Click Start to try again.";
        return;
    }

    if (playerSequence.length === sequence.length) {
        setTimeout(nextRound, 1000);
    }
}
