var min_js =document.getElementById("min");
var second_js =document.getElementById("second");
var ms_js =document.getElementById("ms");
var start_js =document.getElementById("start_btn");

var second=0;
var mileSecond=0;
var minutes=0;
 var watchInterval
function start() {
    watchInterval=setInterval( function(){
        mileSecond++
        if (mileSecond >=99) {
            second++
            mileSecond=0
        }
        if (second >=59) {
            minutes++
            second=0
        }
        ms_js.innerText=mileSecond
        second_js.innerText=second < 10 ? '0' + second : second
        min_js.innerText=minutes   < 10 ? '0' + minutes :minutes
        start_btn.disabled = true
    },10)
}
function stop() {
    clearInterval(watchInterval)
    start_btn.disabled = false
}
function reset() {
    clearInterval(watchInterval)
    mileSecond=0
    second=0
    minutes=0
    min_js.innerText=0
    second_js.innerText=0
    ms_js.innerText=0
    start_btn.disabled = false
}
