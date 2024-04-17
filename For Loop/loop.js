// // //question no 1
// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// // //question no 2
// for (let i =2; i<= 10; i++) {
// console.log(i+ '  is  ' + i * i );
// }

// // //question no 3
// var fruits = ['apple', 'banana', 'mango', 'orange', ' strawberry'];
// for (let i = 0; i< fruits.length; i++) {
//     console.log(  fruits[i]); 
// }
// for( let i=0;i<fruits.length;i++ ){
//     console.log('  Element At Index  ' +i+' is ' +fruits[i]);
// }
    
// //question no 4

//  var nums=[13,29,10 ,39, 23,95,98,90,122];
//   var largeNum=0;
//   for(let i=0; i< nums.length;i++){
//     console.log(
//         "index->",
//         i,
//         "arr value=>",
//         nums[i],
//         "largest number=>",
//         largeNum,
//         "condition=>",
//         nums[i] > largeNum
//       );

//     if (nums[i]>largeNum) {
//         largeNum=nums[i]
//     }
//   }
//   console.log("large Number is ->" ,largeNum);

// // question no 8
// let no =[  1, 2, 9, 5 ];
//   let ln =0;

//  for(  let i = 0 ; i< no.length;i++){
//     if (no[i]>ln) {
//         ln=no[i]
//     }
//     console.log(  'large num is ->', ln);
//  }

// // //question no5
// for (let i = 1; i <= 15; i++) {
//       if (i % 2 == 1) {
//         console.log(i);
//       }
//     }
    
// // question no 6
 
 
//     let fib=0;
//     for (let i = 0; i <10; i++) {
//         fib= fib +i
//         console.log(fib);
//     }     
    

// // question no 7
//  for (let i = '1'; i <=10; i++) {
// console.log(' Hello '+i);
//  }

// // question no 9

// for (let i = 0; i < 4; i++) {
//     console.log(i);
//     // console.log(toString());
// }


// question no 11
// var rollno=[1, 2, 3, 4, 53672,376,8436,4837,334,432,34567,432,341,34 ,1000];
// var wNum=prompt("What Is Your Roll Number");
// var won=false;

// for (let i = 0; i < rollno.length; i++) {
//    console.log( rollno[i]);
//    if (rollno[i]== wNum) {
//      won=true
//      break;
//     }
//    }
//    if (won){
//      document.write( " You Are Incllude Here! ");
//    } else{
//     document.write( " You Are not Includes Here! ");
//    }

// // question 12
//  var menu=['Tikka','Nehare','polau',"beef Burger", "Zinger Burger" ,'7up',];
// var dish=prompt("What's Your Food Order");
// var won=false;
//  for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);

 
//  if (menu[i]==dish) {
//   won=true
//   break; 
// }
// }
// if (won) {
//   document.write('Your Order Has Active Please 15 Minutes waits " THANKS!" ')
// }else{
//   document.write( ' Your Choice & food Not Avalible " SooRY!"')
// }


// //Nested loop =>

//question no 13

//  var coinNum=[12,34,32,43,54,65,76,87,98,90,123,1456,2778,456,775];

//  var reNum=[13,24,332,413,54,65,76,827,38,340,1223,156,278,156,275];

// var userWon=[];

// for (let i = 0; i < coinNum.length; i++) {
//   for (let j = 0; j < reNum.length; j++) {
//     console.log(coinNum[i] === reNum[j] );

//       if (coinNum[i]===reNum[j]) {
//         userWon.push(coinNum[i])
//       }
//   }
  
// }
//     console.log("Prize bond ye nikle hen=>", userWon);

// question no 14

// var carName=['landrover','Carolla','Alto','Suzuki','Carry','Toyota','Fortuner']

// var reName=['landrover','Carolla','Car','sport','City','Toyota','kas']

// var userWon=[];

// for (let i = 0; i < carName.length; i++) {
//   for (let j = 0; j < reName.length; j++) {
//     console.log(carName[i] === reName[j]);
//     if (carName[i] ===reName[j]) {
//      userWon.push(carName[i]) 
//     }
//   }
// }
// console.log('Only For This Car',userWon);



//question no 15

// var num=[1,2,3,4,5]
// console.log(num.splice(1,1,));


//question no 16

var furitName=['apple','banana', 'mango', 'orange','kiwi']

 console.log(furitName.splice (1,1, 'pineapple ') );
 console.log(furitName.splice (4,1, 'Amin ') );
console.log(furitName);

//  // question no 17 
//  var  colors = ["red", "green", "blue", "yellow", "purple"]
//  console.log( colors.slice(1,3));


// // question no 17
//  var numbers = [10, 20, 30, 40, 50]
//  console.log(numbers.slice(2));

// // question no 17

//  var  fruits = ["apple", "banana", "cherry", "date", "fig"]
//  console.log(fruits.slice(2,4));
