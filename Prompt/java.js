//  var num = prompt( 'EnterTheNumber')
//  if(num % 2==0 ){
//     document.write(`<h3> ${num} is even.</h3>`)
//  }else{
//     document.write(`<h3>${num} is odd.</h3>`)
//  }


// var age=prompt(`EnterTheAge`)
// if(age >= 18) {
//     document.write(`<h1>You are adult.</h1>`)
// }else{
//     document.write(`<h1> You are not adult.</h1>`)
// }

//  var num=prompt('Input A Number')
//  if(num >0){
//     document.write(`<h1> The number is positive.</h1>`)
//  } 
//  else if(num<0)
//     document.write(`<h1> The number is negative.</h1>`)
 
//  else if(num=0)
//     document.write( `<h1The number is Zero.</h1>`)
 

// var firstNumber=prompt('Enter the second Number')

// if(num>firstNumber){
//     document.write(`<h1> The number islarge</h1>`)
// }else{
//     document.write(`<h1The number is Large.</h1>`)
// }

// var thirdNum=prompt('Enter The Third Number')
// if(num >= 10 ){
//     document.write(`<h1The number is Large.</h1>`)
// }else{
//     document.write(`<h1The number is Small.</h1>`)
// }





// var calNum=prompt('Solve Your Math Problem')
// if(num+num){
//     document.write(`Answer`)
// }else{
//     document.write(`Answer`)
// }


// var num1=prompt('Enter First Number');
// var num2=prompt('Enter Second Number');
// if(num1>num2){
//     LargerNumber=num1;
// }else{
//     LargerNumber=num2;
// }
// console.log('The Larger number is',LargerNumber);

// var num1=prompt("Enter First Number");
// var num2=prompt("Enter Second Number");
// var num3=prompt('Enter Third Number');
// if(num1<num2<num3){
//     SmallerNumber=num1;
// }else{
//     SmallerNumber=num2
// }if (SmallerNumber=num3) {
    
// }else {
//     SmallerNumber=num3
// }
// console.log("The Smaller number is" ,SmallerNumber);


// var numf=prompt("Enter The Factorial Number");
// if(n==0){
//     num <0
// }else{( facto (n-1)*n)
// }
// console.log(facto(n))
// var mark1=prompt("Enter Subject One (Out of 100)")
// var mark2=prompt("Enter Subject Two  (Out of 100)")
// var mark3=prompt("Enter Subject Three (Out of 100)")
// if(mark1||mark2||mark3){
//   alert("Please enter valid numbers for marks.");
// }
// var average=(mark1+mark2+mark3)/3;

// var grade;
// if( average >=90){
//     grade="A";
// } else if( average>=80){
//     grade="B";
// } else if (average>=70){
//     grade="C";
// } else if( average>= 60){
//     grade="D";
// } else {
//     grade="F"
// }
// console.log( `your grade is ${grade}`);



// var mainAge=prompt('Enter Your Age');
// if(mainAge<=12){
// mainAge="Child"
// }else if (mainAge<=19) {
//  mainAge="Teenager"    
// } else if (mainAge<=64) {
// mainAge='Adult'    
// }else if( mainAge<=110){
//    mainAge=" Senior"
// }
// console.log( `your age is ${mainAge}`)

var fNum1=+prompt('Enter Your Maths Question in+& -')
var fNum2=+prompt('Enter Your Maths Question in+& -')
console.log( typeof fNum1);
console.log(fNum1+fNum2|| fNum1-fNum2);
if (fNum1>fNum2) {
   console.log(fNum1);
}else{
   console.log(fNum2)
}

alert("Please Only Alphabet");
var vow=prompt("Enter The Alphabet");
// var alpha=(a,e,i,o,u);
if (vow === "a" || vow === "e"||vow==="u"||vow==="i"||vow==="o") {
   console.log( "Vowel");
}else{
   console.log("Consonant")
}