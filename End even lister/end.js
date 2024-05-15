var btn=document.getElementById("bulbon");
var btn1=document.getElementById("bulboff");

btn.addEventListener('click', function () {
  if (btn.classList.contains('on')) {
    btn.classList.remove('on');
  }else{
    btn.classList.add('on')
  }
})

btn1.addEventListener('click',function () {
    if (btn1.classList.contains('on')) {
        btn1.classList.remove('on');
    }else{
        btn1.classList.add('on')

    }
})
