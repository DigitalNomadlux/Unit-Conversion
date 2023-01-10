const convertBtn = document.getElementById("convert-btn");
const convertEl = document.getElementById("convert-num");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFt = 3.281;
const literToGal = 3.785;
const kiloToPound = 2.205;

convertBtn.addEventListener("click", function() {
  let baseVal = convertEl.value;
  
  lengthEl.textContent =
    `${baseVal} meter = ${(baseVal * meterToFt).toFixed(3)} feet
    | ${baseVal} feet = ${(baseVal / meterToFt).toFixed(3)} meter`

  volumeEl.textContent =
    `${baseVal} liters = ${(baseVal / literToGal).toFixed(3)} gallons
    | ${baseVal} gallons = ${(baseVal * literToGal).toFixed(3)} liters`

  massEl.textContent =
    `${baseVal} kilograms = ${(baseVal * kiloToPound).toFixed(3)} lbs
    | ${baseVal} lbs = ${(baseVal / kiloToPound).toFixed(3)} kilograms`
})