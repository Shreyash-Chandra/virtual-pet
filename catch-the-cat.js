let score = 0;

function moveCat() {
    const cat = document.getElementById("cat");
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    
    cat.style.left = Math.random() * maxX + "px";
    cat.style.top = Math.random() * maxY + "px";
}

function catchCat() {
    score++;
    document.getElementById("score").innerText = score;
    moveCat();
}

setInterval(moveCat, 1000);
