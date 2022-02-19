const validator = {
  isValid: function (str) {
    let firstArray = Array.from(str);
    let secondArray = [];
    for (let i = 0; i < firstArray.length; i++) {
      secondArray.push(parseInt(firstArray[i]))
    }
    let reverseArray = secondArray.reverse();
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 1; i < reverseArray.length; i += 2) {

      let valueOfTheEvenPosition = reverseArray[i] * 2;
      if (valueOfTheEvenPosition >= 10) {
        sumOfEven = sumOfEven + 1 + valueOfTheEvenPosition % 10;
      }
      else sumOfEven = sumOfEven + valueOfTheEvenPosition;
    }
    for (let i = 0; i < reverseArray.length; i += 2) {
      sumOfOdd = sumOfOdd + reverseArray[i];
    }
    let finalSum = sumOfEven + sumOfOdd;
    let finalAnswer;
    if (finalSum % 10 == 0) {
      finalAnswer = true;
    }
    else finalAnswer = false;

    return finalAnswer;
  },

  maskify: function (x) {
    //sacamos la cantidad de numeros de la tarjeta
    let lengthOfCard = x.length;
    //restamos 4 digitos a la cantidad de numeros de tarjeta
    let firstDigits = lengthOfCard - 4
    //quitamos los cantidad de la tarjeta - los 4 ultimos digitos y nos quedamos con los 4 ultimos digitos
    let separateDigits = x.slice(firstDigits, lengthOfCard);
    // console.log(separacion);
    let maskedDigits;

    if (lengthOfCard > 5) {
      maskedDigits = "#".repeat(firstDigits) + separateDigits;
    } else {
      maskedDigits = x;
    }
    return maskedDigits;

  }

}
export default validator;