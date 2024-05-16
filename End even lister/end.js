var btn=document.getElementById("bulbon");
var btn1=document.getElementById("bulboff");

btn.addEventListener('click', function () {
  btn.classList.toggle('on')
  btn1.classList.toggle('on')
  btn.innerText = "Turned On"
  btn1.innerText = "Turned On"
})

// btn1.addEventListener('click',function () {
//     if (btn1.classList.contains('on')) {
//         btn1.classList.remove('on');
//     }else{
//         btn1.classList.add('on')

//     }
// })
