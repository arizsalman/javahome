// var num_html=document.getElementById("number")
// var upgrade=document.getElementById("upGrade")
// var degrade=document.getElementById("deGrade")
// var value=document.getElementById("upgrade_value")
// var res_js=document.getElementById("reset")
// var up=1
// var down=1


// function upGrade() {
//     upgrade=num_html.value+up;
//     number=num_html.innerText;
//     upgrade=value.innerText
//     console.log(upgrade+ value);
// }

// function deGrade() {
//     degrade=num_html.value-down;
//     number=num_html.innerText;
//     degrade=value.innerText;
//     console.log(degrade+ value);
// }



let counter= 0;
const counterElement= document.getElementById("counter")  ;
const evenOddElement= document.getElementById('even-odd');
const historList = document.querySelector('#history ul');
function updateCounter() {
    counterElement.textContent=counter;
    evenOddElement.textContent=counter % 2=== 0 ?'Even':'odd';
    evenOddElement.className=counter % 2=== 0 ?'Even':'odd';
    updateHistory();
}

function updateHistory() {
    const listItem=document.createElement('li')
    listItem.textContent=counter
    historList.appendChild(listItem)
}
document.getElementById('increse').addEventListener('click', function () {
    counter++;
    updateCounter();
})
document.getElementById("decrese").addEventListener('click', function () {
 if (counter> 0) {
    counter--;
    updateCounter();
 }    
})

document.getElementById('reset').addEventListener("click", function () {
    counter =0;
    updateCounter()
})
