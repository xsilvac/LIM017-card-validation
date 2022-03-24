const validator = {
  isValid: function (str) {
    const firstArray = Array.from(str);
    const secondArray = [];
    for (let i = 0; i < firstArray.length; i++) {
      secondArray.push(parseInt(firstArray[i]))
    }
    const reverseArray = secondArray.reverse();
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 1; i < reverseArray.length; i += 2) {

      const valueOfTheEvenPosition = reverseArray[i] * 2;
      if (valueOfTheEvenPosition >= 10) {
        sumOfEven = sumOfEven + 1 + valueOfTheEvenPosition % 10;
      }
      else sumOfEven = sumOfEven + valueOfTheEvenPosition;
    }
    for (let i = 0; i < reverseArray.length; i += 2) {
      sumOfOdd = sumOfOdd + reverseArray[i];
    } //tratar de reducir con el primer for de los numeros pares
    const finalSum = sumOfEven + sumOfOdd;
    let finalAnswer;
    if (finalSum % 10 == 0) {
      finalAnswer = true;
    }
    else finalAnswer = false;

    return finalAnswer;
  },

  maskify: function (mask) {
    //sacamos la cantidad de numeros de la tarjeta
    const lengthOfCard = mask.length;
    //restamos 4 digitos a la cantidad de numeros de tarjeta
    const firstDigits = lengthOfCard - 4
    //quitamos los cantidad de la tarjeta - los 4 ultimos digitos y nos quedamos con los 4 ultimos digitos
    const separateDigits = mask.slice(firstDigits, lengthOfCard);
    // console.log(separacion);
    let maskedDigits;

    if (lengthOfCard > 4) {
      maskedDigits = "#".repeat(firstDigits) + separateDigits;
    } else {
      maskedDigits = mask;
    }
    return maskedDigits;
  }
}
export default validator;