const validator = {
  isValid: (creditCardNumber) => {
    const cardArr = creditCardNumber.split("").reverse();
    const totalAdd = [];
    for (let i = 0; i < cardArr.length; i++) {
      if (i % 2 === 0) {
        totalAdd.push(parseInt(cardArr[i]))
      } else {
        cardArr[i] = parseInt(cardArr[i]) * 2;
        if (cardArr[i] > 9) {
          const num = cardArr[i].toString().split("");
          totalAdd.push(parseInt(num[0]) + parseInt(num[1]));
        } else {
          totalAdd.push(parseInt(cardArr[i]));
        }
      }
    }
    const reducedArr = totalAdd.reduce((previousValue, currentValue) => previousValue + currentValue);
    if (reducedArr % 10 === 0) {
      return true;
    }
    return false;
  },
  maskify: (creditCardNumber) => {
    const end = creditCardNumber.slice(-4);
    let replaced = '';
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      replaced += creditCardNumber[i].replace(/\w/g, "#");
    }
    return replaced + end;
  },

};

export default validator;

