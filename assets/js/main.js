const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});

// ab hier Mehrwertsteuer-Rechner
// SCHRITT 2 Variablen benennen UND deklarieren
// Was soll berechnet werden?
const add = document.getElementById("add");
const sub = document.getElementById("sub");
// Variablen Mehrwertsteuersatz
let radio19 = document.getElementById("radio19");
let radio7 = document.getElementById("radio7");
// userInput
let userInput = document.getElementById("userInput");
// Mehrwertsteuersatz-Variable
let mwstSatz;
// Ergebnis
let mwstAmount = document.getElementById("mwstAmount");
let finalPrice = document.getElementById("finalPrice");
let auswahlFrage = document.getElementById("auswahlFrage");
// Schritt 3 Callen
function auswahl() {
  if (add.checked) {
    auswahlFrage.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro*`;
  } else if (sub.checked) {
    auswahlFrage.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro*`;
  }
}
// Ergebnis Funktion
function calculate() {
  auswahl();
  if (add.checked && radio19.checked) {
    let sumAdd = userInput.value * 1.19;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = sumAdd - userInput.value;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (add.checked && radio7.checked) {
    let sumAdd = userInput.value * 1.07;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = sumAdd - userInput.value;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (sub.checked && radio19.checked) {
    let sumAdd = userInput.value / 1.19;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = userInput.value - sumAdd;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  } else if (sub.checked && radio7.checked) {
    let sumAdd = userInput.value / 1.07;
    finalPrice.innerHTML = sumAdd.toFixed(2).replace(".", ",") + " €";
    let sumSub = userInput.value - sumAdd;
    mwstAmount.innerHTML = sumSub.toFixed(2).replace(".", ",") + " €";
  }
}
