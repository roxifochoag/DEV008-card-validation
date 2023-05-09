import validator from './validator.js';

const validateForm = document.getElementById('validateForm');
const cardInput = document.getElementById('cardNumberInput');
const nameInput = document.getElementById('clientName');
const resultBox = document.getElementById('result');
const cardImgNumber = document.getElementById('creditCardNumber');
const cardImgName = document.getElementById('creditCardName');

nameInput.addEventListener('keyup', () => {
  if (nameInput.value === '') {
    cardImgName.innerHTML = 'NOMBRE';
  } else {
    cardImgName.innerHTML = nameInput.value.toUpperCase();
  }
});

cardInput.addEventListener('keyup', () => {
  let formattedText = cardInput.value.split(' ').join('');
  if(formattedText.length <= 16){
    formattedText.length > 0 ? formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ') : alert('Detente aquí')
  }
  cardImgNumber.innerHTML = validator.maskify(formattedText);
})

validateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cardNumber = cardInput.value;
  const validateResult = validator.isValid(cardNumber);
  if(validateResult) {
    resultBox.textContent = 'La tarjeta es válida';
    alert("La tarjeta es válida");
  } else {
    resultBox.textContent = 'La tarjeta no es válida';
    alert("La tarjeta es no válida");
  }
});