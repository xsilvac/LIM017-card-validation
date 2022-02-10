//import validator from './validator.js';

//console.log(validator);

document.getElementById("send").addEventListener("click", inputName);

function inputName(){
    let nameCard = document.getElementById("cardName").value;
    alert("Bienvenida " + nameCard + " !!!");
    document.getElementById("onePage").style.display = "none";
    document.getElementById("twoPage").style.display = "block";
}














/* //list to select month
for (let i = 1; i <= 12; i++) {
    let list = document.createElement('option');
    list.value = i;
    list.innerText = i;
    selectMonth.appendChild(list);
}
//list to select year
for (let i = 2010; i <= 2030; i++) {
    let lists = document.createElement('option');
    lists.value = i;
    lists.innerText = i;
    selectYear.appendChild(lists);
} */