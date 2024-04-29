


var num = [2, 4, 9, 5]
for (let i = 0; i < num.length; i++) {
  console.log(num[i] * num[i]);

}


function hname() {
  // document.write("khanwithcode")
  console.log("My name is Ariz");
  console.log("My name is Ali");
}



var heading = document.getElementById("password");

function generate() {
  // alert("hi")
  console.log(heading)
  
  var random = Math.round(Math.random() * 10000);
 
  heading.innerText = random;
}