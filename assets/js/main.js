const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});

// ab hier Mehrwertsteuer-Rechner
// SCHRITT 2 Variablen benennen UND deklarieren
// Was soll berechnet werden?
const bruttoToNetto = document.getElementById("add");
const nettoToBrutto = document.getElementById("sub");
// Variablen Mehrwertsteuersatz
let salesTax19 = document.getElementById("salesTax19");
let salesTax7 = document.getElementById("salesTax7");
// amountInput
let amountInput = document.getElementById("amountInput");
// Mehrwertsteuersatz-Variable
let mwstSatz;
// Ergebnis
let mwstAmount = document.getElementById("mwstAmount");
let finalPriceElement = document.getElementById("finalPrice");
let calculatedSalesTax = document.getElementById("calculatedSalesTax");
// Schritt 3 Callen
function select() {
  if (add.checked) {
    select.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro*`;
  } else if (sub.checked) {
    select.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro*`;
  }
}
//  Ergebnis Funktion

function calculate() {
  select();
  if (add.checked) {
    calculateNettoToBrutto();
  } else if (sub.checked) {
    calculateBruttoToNetto();
  }
}

function calculateNettoToBrutto() {
  let finalPrice = amountInput.value * getTax();
  setFinalPrice(finalPrice);
  setSalesTax(finalPrice - amountInput.value);
}

function calculateBruttoToNetto() {
  let finalPrice = amountInput.value / getTax();
  setFinalPrice(finalPrice);
  setSalesTax(finalPrice - amountInput.value);
}

//  Gibt die ausgewählte MWST zurück
function getTax() {
  return salesTax19.checked ? 1.19 : 1.07;
}

function setFinalPrice(finalPrice) {
  finalPriceElement.innerHTML = finalPrice.toFixed(2).replace(".", ",") + " €";
}

function setSalesTax(salesTax) {
  mwstAmount.innerHTML = salesTax.toFixed(2).replace(".", ",") + " €";
}

/*function calculate() {
  select();
  if (add.checked && salesTax19.checked) {
    let sumAdd = amountInput.value * 1.19;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = sumAdd - amountInput.value;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (add.checked && salesTax7.checked) {
    let sumAdd = amountInput.value * 1.07;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = sumAdd - amountInput.value;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (sub.checked && salesTax19.checked) {
    let sumAdd = amountInput.value / 1.19;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = amountInput.value - sumAdd;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (sub.checked && salesTax7.checked) {
    let sumAdd = amountInput.value / 1.07;
   function setFinalPrice(){
  
}
    let sumSub = amountInput.value - sumAdd;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  }
}*/
