const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

let timeinterval = null;
let timerstatus = "stopped";

function stopWatch(){
    second++;
    
    if(second /60 === 1){
        second = 0;
        minute++;
    
        if(minute /60 === 1){
            minute = 0;
            hour++;
        }
    }
    if(second < 10){
        leadingSecond = '0' + second;
    }
    else{
        leadingSecond = second;
    }
    if(minute < 10){
        leadingMinute = '0' + minute;
    }
    else{
        leadingMinute = minute;
    }
    if(hour < 10){
        leadingHour = '0' + hour;
    }
    else{
        leadingHour = hour;
    }
    let displayTimer = document.getElementById('timer').innerText = 
    leadingHour + ':' + leadingMinute + ':' + leadingSecond;
}



startStopBtn.addEventListener('click', function(){
    if(timerstatus === "stopped"){
        timeinterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id = "pause"></i>';
        timerstatus = 'started';
    }
    else{
        window.clearInterval(timeinterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id = "play"></i>';
        timerstatus = 'stopped';
    }

    resetBtn.addEventListener('click', function(){
        window.clearInterval(timeinterval);
        second = 0;
        minute = 0;
        hour = 0;
        document.getElementById('timer').innerHTML= '00:00:00';
    })
    
});

