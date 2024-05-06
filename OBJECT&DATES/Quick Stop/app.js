var number_js= document.getElementById("number");
var user_input= document.getElementById("user_input");
var result_js= document.getElementById("result");
var start_js= document.getElementById("start_btn");

var runningNumber = 0;
var interval ;

function start() {
    if (user_input.value) {
        
    interval= setInterval( function () {
        if (runningNumber>=1000) {
            clearInterval(interval);
            runningNumber=0;
            number_js.innerText=runningNumber;
            result.innerText="You are late";
          
        }else{
            runningNumber++;
            number_js.innerText= runningNumber;
        }
    },10);
   
}else{
    alert("Number Tu Daaldo ");
}
}
function stop() {
    clearInterval (interval);
    if (user_input.value==runningNumber) {
        result.innerText= "You Win";
    }else{
        result.innerText = " You lose";
    }
    runningNumber=0;
    number_js.innerText =0;
}
