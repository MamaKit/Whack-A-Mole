const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
const start = document.getElementById("start");
const pause = document.getElementById("pause");

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
};

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
};

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if(square.id === hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
});

function countdown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime === 0) {
        clearInterval(countdownId);
        clearInterval(timerId);
        alert(`Time's up! Your final score is: ${result}.`);
    }
};

moveMole();
let countdownId = setInterval(countdown, 1000);