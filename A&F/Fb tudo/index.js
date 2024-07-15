
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getFirestore,
           collection,
           addDoc, 
           getDocs,
           doc,
           deleteDoc,
          } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";






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
  // const analytics = getAnalytics(app);
  const db = getFirestore(app);
 let numberCollection=collection(db,'number');
 let todoCollection=collection(db,"todos")

const todo_list=document.getElementById("todo_list")
const todo_input=document.getElementById("todo_input")
const add_todo=document.getElementById("add_todo")
const delete_todo=document.getElementById("delete_todo")
getTodosFromDb();

add_todo.addEventListener("click",addTodosToDb);


async function addTodosToDb(){
  console.log('chhal raha he')
  try {
    const obj = {
      todo: todo_input.value,
      createdAt: new Date()
      
    };

    console.log(obj)

    const todoRef = collection(db, 'todos');

    
    const add = await addDoc(todoRef, obj);
    console.log('todo',add)
    getTodosFromDb();
    todo_input.value = "";
  } catch (e) {
    console.log(e);
    console.log(e.code);
    console.log(e.message);
}
}

async function getTodosFromDb(){
  try {

    const todoRef = collection(db, 'todos');
    const querySnapshot = await getDocs(todoRef);
    todo_list.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log("Doc=>", doc.id);
      const { todo, createdAt } = doc.data();
      const ele = `<li id = ${doc.id}>${todo} -  ${new Date(
        createdAt
      ).toLocaleDateString()}</li>`;
      todo_list.innerHTML += ele;
    });

    todo_list.childNodes.forEach((li) =>
      li.addEventListener("click", deleteTodo)
    );
  } catch (e) {
    console.log(e);
  }
}

async function deleteTodo(){
  try {
    const docId = this.id;
    const docCollection = doc(db, "todos", docId);
    const docRef = await deleteDoc(docCollection);
    getTodosFromDb()
    console.log("Document deleted=>", docRef);
  } catch (e) {
    console.log(e);
  }
}
