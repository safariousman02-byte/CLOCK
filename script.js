
let hours = 0;
let minutes = 0;
let seconds = 0;
let timeInterval = null;
let isrunning = false;

const display = document.getElementById('display');
const start = document.getElementById('startBtn');
const pause = document.getElementById('pauseBtn');
const reset = document.getElementById('resetBtn');

function updateDisplay() {
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if (isrunning) return;

    isrunning = true;

    timeInterval = setInterval(()=>{
        seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timeInterval);
    isRunning = false;
    minutes = 0;
    hours = 0;
    seconds = 0;
    updateDisplay();
}

function pauseTimer() {
    clearInterval(setInterval);
    isRunning = false;
}

reset.addEventListener('click', resetTimer);
start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);