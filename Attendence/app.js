
let studentName=document.getElementById("studentName")
let fatherName=document.getElementById("fatherName")
let rollNo=document.getElementById("rollNo")
let age=document.getElementById("age")

function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < userTable.length; i++) {
      userTable.innerHTML += userTable
      
}

}
addData();

function addUser() {
  var obj = {
    name: studentName.value,
    fatherName: fatherName.value,
    rollNo: rollNo.value,
    age: age.value,
  };

//   userTable.push(obj);
//   console.log(userData);
  addData();
}