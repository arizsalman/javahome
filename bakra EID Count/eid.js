
var eid = new Date("6/17/2024 00:00:00").getTime();
var ms = 0; var s = 0; var m = 0; var h = 0; var d = 0; var w = 0;
var hours = document.getElementById("hours");
var second = document.getElementById("second");
var minutes = document.getElementById("minutes");
var day = document.getElementById("day");
var x= setInterval(function(){
    var now = new Date().getTime();
var diff = eid - now;

second.innerText = Math.floor(diff % (1000 * 60) / 1000) ; 
minutes.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
hours.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
day.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));


},1000)

var newDate=("06/16/2024").getTime()
console.log(newDate);