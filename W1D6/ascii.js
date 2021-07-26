var textArea, animations, size, timer, startButton, stopButton, speed=250, turboCheck;



//   lets write the function here
// 1.start()
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

//2 stop()
function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}

//3. getFrames()
function getFrames() {
    var dropSel = animations.options[animations.selectedIndex].innerHTML;
    textArea.value = ANIMATIONS[dropSel];

}

//4 .setSize()

function setSize() {
    var fontsize = size.options[size.selectedIndex].value;
    textArea.style.fontSize = fontsize;
}


//5. turbo()

function turbo() {
    if (turboCheck.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}
window.onload = function () {
    textArea=document.getElementById("text-area");
    animations=document.getElementById("animation");
    animations.onchange=getFrames;   
    size=document.getElementById("ontsize");
    size.onchange=setSize;
    turboCheck=document.getElementById("turbo");
    turboCheck.onchange=turbo;
    startButton=window.getElementById("start");
    stopButton.onclick=start;
    stopButton=document.getElementById("stop");
    stopButton.onclick=stop;
}


