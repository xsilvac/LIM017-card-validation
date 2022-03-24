import validator from './validator.js';

//list to select month
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
}

const homePage = document.getElementById("toBuy");
homePage.addEventListener("click", () => {
    document.getElementById("zeroPage").style.display = "none";
    document.getElementById("onePage").style.display = "block";
})

const btn = document.getElementById("send");
btn.addEventListener("click", inputName);
function inputName() {
    const cardNumber = document.getElementById("cardNumber").value;
    const showCard = document.getElementById("showCard");
    const finalText = validator.isValid(cardNumber);
    const maskedFinal = validator.maskify(cardNumber);
    const newAlert = document.getElementById("newAlert");

    if (cardNumber === "") {
        newAlert.innerHTML = "Digite el número de su tarjeta, por favor";
    }
    else {
        document.getElementById("onePage").style.display = "none";
        document.getElementById("twoPage").style.display = "block";
        const cardName = document.getElementById("cardName").value;
        const userName = document.getElementById("userName");
        const correctAnswer = document.getElementById("correctAnswer");
        const wrongAnswer = document.getElementById("wrongAnswer");
        let imageAnswer;
        if (finalText == true) {

            userName.innerHTML = cardName;
            showCard.innerHTML = maskedFinal;
            imageAnswer = "check.png";
            newAlert.innerHTML = "";
            wrongAnswer.innerHTML = "";
            // correctAnswer.innerHTML = "";
            correctAnswer.innerHTML = `Es válida <br> Gracias por su preferencia.`;
        }
        else {
            userName.innerHTML = cardName;
            showCard.innerHTML = maskedFinal;
            imageAnswer = "aspa.png";
            newAlert.innerHTML = "";
            correctAnswer.innerHTML = "";
            // wrongAnswer.innerHTML = "";
            wrongAnswer.innerHTML = "Es inválida, intente nuevamente";
        }
        document.getElementById("imageAnswer").src = imageAnswer;
    }

    return finalText;
}

const validatorPage = document.getElementById("homePage");
validatorPage.addEventListener("click", () => {
    document.getElementById("cardNumber").value = "";
    document.getElementById("cardName").value = "";
    document.getElementById("twoPage").style.display = "none";
    document.getElementById("onePage").style.display = "block";
})
