//import validator from './validator.js';

//console.log(validator);

import validator from './validator.js';



const btn = document.getElementById("send");
btn.addEventListener("click", inputName);
function inputName() {
   let cardNumber = document.getElementById("cardNumber").value;
//    console.log(typeof cardNumber);
    const newAlert = document.getElementById("newAlert");
    /* const newP = document.getElementById("newP"); */
    if (cardNumber === "") {
        newAlert.innerText = "Digite el número de su tarjeta";
        newAlert.classList.add("errorText");
    }
    else {
        const finalText = validator.maskify(cardNumber);

        return finalText;
    }
    
    /* newP.innerText = finalText;
     newP.classList.remove("errorText"); */

    document.getElementById("onePage").style.display = "none";
    document.getElementById("twoPage").style.display = "block";

}



const homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {
    document.getElementById("twoPage").style.display = "none";
    document.getElementById("onePage").style.display = "block";
})





/* const btn = document.getElementById("send");
btn.addEventListener("click", inputName);
function inputName() {
  let cardName = document.getElementById("cardName").value;
    if (cardName == "") {
        //alert("Ingresa tu nombre");
    }
    else {
        let userName = document.getElementById("userName");
        userName.innerHTML = cardName; */
    //}








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