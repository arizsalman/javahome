//  const car={
//     name:"carolla",
//     model:2019,
//     color:"Black",
//     isNew:false,

//  }
//  // Ab hame bata kar na hi car tab ke hi 
//  console.log(car.color);
//  console.log(car.name);
//  let nName=car.name
//  console.log(nName);
//  //destructuring 
//  const{name,model,color}=car
//  console.log(car);
//  console.log(color);
//  console.log(name);
//  console.log(model);


//  //===CALL BACK FUNCTION//&
//  // Asa function Jo tusre function me as a Argument Pass kar Use CALLBACK Function Kehte hi 
//  function callBack(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }
//  callBack(10,20,()=>{
//     console.log("My Name is Ariz ");
//  })




// function login() {
//     setTimeout(()=>{
//         console.log("Hello User Log ho Gaya");
//     },1000)
// }
// function getUserInfo() {
//     const user={
//         name:"Ariz",
//     };
//     setTimeout(() => {
//       console.log(user);  
//     }, 500);
    
// }
// login()
// getUserInfo()


// function login(callBack) {
//     setTimeout(()=>{
//         console.log("Hello User Log ho Gaya");
//         callBack()
//     },1000)
// }
// function getUserInfo() {
//     const user={
//         name:"Ariz",
//     };
//     setTimeout(() => {
//       console.log(user);  
//     }, 500);
    
// }
// login(getUserInfo)
