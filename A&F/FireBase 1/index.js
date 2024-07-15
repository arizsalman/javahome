
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
     onAuthStateChanged ,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword ,
     signOut 
    } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAFC9eIGuHiub-ZkJtmG4pbRqiVjCijxgo",
    authDomain: "project-66184.firebaseapp.com",
    projectId: "project-66184",
    storageBucket: "project-66184.appspot.com",
    messagingSenderId: "102388642705",
    appId: "1:102388642705:web:80657ecbe02538c807e030",
    measurementId: "G-G82EE6G3K8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  const signup_email=document.getElementById("signup_email")
  const signup_password=document.getElementById("signup_password")
  const signup_btn=document.getElementById("signup_btn")
  
  const signin_email=document.getElementById("signin_email")
  const signin_password=document.getElementById("signin_password")
  const signin_btn=document.getElementById("signin_btn")
  
  const user_email=document.getElementById("user_email")
  const logout_btn=document.getElementById("logout_btn")
  const auth_container=document.getElementById("auth_container")
  const user_container=document.getElementById("user_container")

  signup_btn.addEventListener("click",createUserAccount)
  signin_btn.addEventListener("click",signIn);
  logout_btn.addEventListener('click',logout);




onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is Logged in");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      auth_container.style.display="none"
      user_container.style.display="block"
      user_email.innerText=user_email;
      // ...
    } else {
        console.log("user is not logged in");
        auth_container.style.display="block"
        user_container.style.display="none"
        user_email.innerText=user_email;
      // User is signed out
      // ...
    }
  });

  function createUserAccount() {
    // console.log(signup_email.value);
    // console.log(signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log( user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(" error.message")
    // ..
  });
  }
  function signIn() {
     console.log(signup_email.value);
    console.log(signup_password.value);
    signInWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log( error.message);
  });

  }
  
  function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
  }

