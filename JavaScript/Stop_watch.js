var min = 0;
var sec = 0;
var mili = 0;

var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMili = document.getElementById("displayMili");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

function renderTimer(){
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMili.innerHTML = mili;
}
renderTimer();

function timer(){
    mili++;
    if (mili == 10){
        sec++;
        mili = 0;
        if (sec == 60){
            min++;
            sec = 0;
        }
    }
    renderTimer();
}

var interval;

function startTimer(){
    interval = setInterval(function(){
    timer();
    },100);
    startBtn.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer(){
    min = 0;
    sec = 0;
    mili = 0;
    stopTimer();
    renderTimer();
}

