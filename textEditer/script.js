
var eiditer_js =document.getElementById('eiditer')


function bold() {
   eiditer_js.style.fontWeight="bold"
}
function italic() {
   eiditer_js.style.fontStyle='italic'
}
function underline() {
   eiditer_js.style.textDecoration='underline'
}
function font_Size() {
   var inputValue = document.getElementById("size").value
   eiditer_js.style.fontSize= inputValue+"px"
}
function fontFamily() {
   eiditer_js.style.fontFamily='Arial'
}

function TextColor() {
   eiditer_js.style.color= document.getElementById("changecolor").value
}
