// var num1=document.getElementById("num1")
// var num2=document.getElementById("num2")
// var cal_result=document.getElementById("cal_result")
// // var button= document.getElementById("button")
// function calculator(sign) {
//     console.log(sign);
    
    
//     // var button= num1+num2;
//     // button.innerText;
//     // console.log();
//     var num1value=num1.value
//     var num2value=num2.value
//     // console.log(num1value);
//     // console.log(num2value);
//     if(sign== '+') cal_result.innerText=+num1value+ parseInt(num2value);
//     if(sign=="-") cal_result.innerText=num1value-num2value;
//     if(sign=='X')cal_result.innerText=num1value *num2value;
//     if(sign=='/')cal_result.innerText=num1value /num2value;
// }



function clk(e) {
    document.getElementById("textPerform").innerText += e;
}
function clr(){
    document.getElementById("textPerform").innerText= " ";
}
function eql() {
    let a = document.getElementById(" textPerform");
    a.innerText=eval(a.innerText);
    // a.innerHTML = eval(a.innerHTML);
    
}
