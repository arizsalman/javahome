// var bold_js = document.getElementById('bold')
// var italic_js = document.getElementById('italic')
// var underline_js = document.getElementById("underline")
// var fontSize_js = document.getElementById('fontSize')
// var fontFamily_js = document.getElementById('fontFamily')
// var TextColor_js = document.getElementById('TextColor')
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
function fontSize() {
   eiditer_js.style.fontSize=document.getElementById("fontSize").value
}
function fontFamily() {
   eiditer_js.style.fontFamily='Arial'
}

function TextColor() {
   eiditer_js.style.color= document.getElementById("changecolor").value
}
