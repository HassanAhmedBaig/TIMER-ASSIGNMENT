var millisec = 1000;
var sec;
var min;
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')


function userinput() {

    var user_input_min = +prompt("Enter min", "eg 1-60")
    var user_input_sec = +prompt("Enter sec", "eg 1-60")


    displaymin.innerHTML = user_input_min;
    displaysec.innerHTML = user_input_sec;
    min = user_input_min;
    sec = user_input_sec;
    alert("Your Time Starts Now");

}

function timer() {
    millisec--
    displaymili.innerHTML = millisec
    if (millisec == 0) {
        sec--
        displaysec.innerHTML = sec
        millisec = 1000
        if (sec == 0) {
            min--
            sec = 60
            displaymin.innerHTML = min;
        if(min==0 && sec==0){
            clearInterval(interval)
            alert("Time ends")
            }
        }
    }
   
}

var interval;

function start() {
    interval = setInterval(timer, 10);

}
function pause() {
    clearInterval(interval)
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}



