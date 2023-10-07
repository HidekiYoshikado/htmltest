let currentNumber = 1;

function nextNumber() {
  const numberCard = document.getElementById("numberCard");
  numberCard.innerText = currentNumber;
  currentNumber++;
}
