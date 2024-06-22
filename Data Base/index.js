
// localStorage.setItem("email","ariz@gmail.com");
// var email=localStorage.getItem("email")
// console.log(email);

// var time= ["Fajrki","Tilawat","Araam"]
// //ye Abhe arr ya obj ko me hi OR console me ye string me age ga agar hum as ko JSON (ka method laga de tu sahi hi)
// var evningTime=JSON.stringify(time);
// localStorage.setItem("time",evningTime);
// var time=localStorage.getItem('time',)
// console.log(time);
// time=JSON.parse(time)


var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var note = document.getElementById("note");
var subject = document.getElementById("subject")
var newDate= new Date()

function loginUser(){
    if(!email.value||!password.value)
         return alert("please add email & pasword")
        localStorage.setItem("email",email.value)
    checkIsUserLogin()
}

function checkIsUserLogin(){
    var email=localStorage.getItem("email")
    if(email){
        home_container.style.display="block";
        Login_container.style.display="none";
        user_email.innerHTML=email
        }
        else{
            home_container.style.display="none";
            login_container.style.display="block";
            displayUserNotes()
    }
}
checkIsUserLogin()
function logout(){
    localStorage.removeItem("email")
    checkIsUserLogin()
}
function submitNote(){
    var email = localStorage.getItem("email")
    var obj={
        email:email,
        note: note.value,
        subject: subject.value,
        newDate:newDate.toLocaleString()
    };
    saveValueToLocalStorage(obj);
    console.log("Object=>", obj);
    note.value="";
    subject.value='';
    newDate.value="";
}

function saveValueToLocalStorage( obj){
    var notes=localStorage.getItem("notes")
    // var subject =localStorage.getItem("subject")
    console.log(notes);
    if(notes){
        notes= JSON.parse(notes) ;
        notes.push(obj)
        console.log(notes);
        localStorage.setItem("notes",JSON.stringify(notes));
    }  
    else {
            notes=[obj]
            console.log(notes);
            localStorage.setItem("notes",JSON.stringify(notes));
            // localStorage.setItem("notes",JSON.stringify(notes));

        }
     
        displayUserNotes();
    
}
function displayUserNotes(){
    var notes = localStorage.getItem("notes");
    var list= document.getElementById("list")
    
    var currentUserEmail= localStorage.getItem("email")

    if(notes){
        list.innerHTML='';
        notes=JSON.parse(notes)
        console.log(notes);
        notes.forEach(function(data,ind){
            console.log(data);
            if(data.email===currentUserEmail){
                var liElement=`<li class="border rounded p-2 my-2">
                <p class=" text-xl font-bold">${data.subject}</p>
                <p class=" d-flex justify-content-xl-end text-xl">${data.newDate}</p>
                <p class=" font-medium">${data.note}</p>
                <p>${data.email}</p>
                </li>`;
                list.innerHTML +=liElement
            }else if(currentUserEmail === "admin@gmail.com"){
                var liElement=`<li class="border rounded p-2 my-2">
                <p class=" text-xl font-bold">${data.subject}</p>
                <p class="d-flex justify-content-xl-end text-xl">${data.newDate}</p>
                <p class=" font-medium">${data.note}</p>
                <p>${data.email}</p>
                </li>`;
                list.innerHTML +=liElement
            }
        })
    }
}
displayUserNotes();





