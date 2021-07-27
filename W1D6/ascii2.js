"use strict";
var textArea, animDdl, sizeDdl, timer, startButton, stopButton, speed = 250, turboChk;
window.onload = function () {
    textArea = document.getElementById("text-area");
    animDdl = document.getElementById("animation");
    animDdl.onchange = getFrames;
    sizeDdl = document.getElementById("fontsize");
    sizeDdl.onchange = setSize;
    turboChk = document.getElementById("turbo");
    turboChk.onchange = turbo;
    startButton = document.getElementById("start");
    startButton.onclick = start;
    stopButton = document.getElementById("stop");
    stopButton.onclick = stop;
}

function start() {
    var frames = textArea.value.split("=====\n");
     var i = 0, l = frames.length;
    (function iterator() {
        textArea.value = frames[i];
         if (++i >= l) {
            i = 0;
           }
        timer = setTimeout(iterator, speed);
        })();
    stopButton.disabled = false;
    startButton.disabled = true;
};

function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}


function getFrames() {
    var dropSel = animDdl.value;
    textArea.value = ANIMATIONS[dropSel];

}

function setSize() {
    var fontsize = sizeDdl.value;
    textArea.style.fontSize = fontsize;
}

function turbo() {
    if (turboChk.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}


