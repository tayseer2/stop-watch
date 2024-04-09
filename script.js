let seconds = 0;
let minutes = 0;
let hours = 0;
let time = document.getElementById("time");
let timer = null;

function startTimer() {
    seconds++
    if (seconds === 60) {
        seconds = 0
        minutes++
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    time.innerHTML = h + ":" + m + ":" + s;
}

function watshStart() {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(startTimer, 1000)
}
function watshStop() {
    clearInterval(timer)
}
function watshReset() {
    clearInterval(timer)
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.innerHTML = "00:00:00";
}

function startAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}
