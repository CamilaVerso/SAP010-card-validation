const validator = {
  isValid(creditCardNumber) {
    const reverseCard = creditCardNumber
      .split("")
      .reverse(); /*O split separa a string em array e o reverse muda a ordem*/

    let addNumbers = 0;

    for (let i = 0; i < reverseCard.length; i++) {
      let numberCardValidater = parseInt(
        reverseCard[i]
      ); /*aqui eu converto para números nnovamente*/

      if (i % 2 === 1) {
        numberCardValidater = numberCardValidater * 2;
        if (numberCardValidater > 9) {
          numberCardValidater = numberCardValidater - 9;
        }
      }

      addNumbers = addNumbers + numberCardValidater;
    }

    if (addNumbers % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(creditCardNumber) {
    const numMask = creditCardNumber.replace(
      /.(?=.{4})/g,
      "#"
    ); /*o replace vai em um primiro momento pesquisar o que eu pedi (até a ',') e depois vai alterar */
    //flags - g= Global
    return numMask;
  },
};
export default validator;
