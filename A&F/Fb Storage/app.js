
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getStorage,
         ref, 
         uploadBytes 
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";




const firebaseConfig = {
    apiKey: "AIzaSyAFC9eIGuHiub-ZkJtmG4pbRqiVjCijxgo",
    authDomain: "project-66184.firebaseapp.com",
    projectId: "project-66184",
    storageBucket: "project-66184.appspot.com",
    messagingSenderId: "102388642705",
    appId: "1:102388642705:web:80657ecbe02538c807e030",
    measurementId: "G-G82EE6G3K8"
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyAFC9eIGuHiub-ZkJtmG4pbRqiVjCijxgo",
//     authDomain: "project-66184.firebaseapp.com",
//     projectId: "project-66184",
//     storageBucket: "project-66184.appspot.com",
//     messagingSenderId: "102388642705",
//     appId: "1:102388642705:web:80657ecbe02538c807e030",
//     measurementId: "G-G82EE6G3K8"
//   };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const carStorageRef = ref(storage,'car');

console.log(storage);


const car_img=document.  getElementById("car_img")
const save_file=document.getElementById("save_file")

save_file.addEventListener('click',()=>{
    console.log(car_img.files[0]);
    uploadBytes(carStorageRef, car_img.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      })
      .catch((err)=>console.log(err));
      
})