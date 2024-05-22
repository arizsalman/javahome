// let parent_js= document.getElementById("parent") 
// let first_js= document.getElementById("first") 
// console.log(parent_js);
// console.log(parent_js.children);
// console.log(parent_js.childNodes);
// console.log(first_js);
// console.log(first_js.parentElement);
// console.log(first_js.parentNode);
// console.log(first_js.previousElementSibling);
// console.log(first_js.nextElementSibling);
let todo_input= document.getElementById("todo_input") 
let add_todo_btn= document.getElementById("add_todo_btn") 
let delete_all_todo_btn= document.getElementById("delete_all_todo_btn") 
let todo_list= document.getElementById("todo_list") 


add_todo_btn.addEventListener('click', function(){
    if( ! todo_input.value ) return alert('Todo mein kuch Daaldo')
        let list_item = `<li class="todo_item"> 
                         <span>${todo_input.value}</span>
                         <button class='edit_btn' onclick="edit(this)">Edit</button>
                         <button  class='del_btn' onclick="deletefun(this)">Del</button>
                         </li>`
    todo_list.innerHTML += list_item
    todo_input.value =''
})
function edit(element){
    console.log(element.previousElementSibling.innerText);
    var previousValue = element.previousElementSibling.innerText
    var updatedValue= prompt('Edit Value',previousValue)
    element.previousElementSibling.innerText=updatedValue
}
function deletefun(element){
    element.parentElement.remove()
}
