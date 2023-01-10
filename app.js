const convertBtn = document.getElementById("convert-btn");
let convertEl = document.getElementById("convert-num");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFt = 3.281;
const literToGal = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
  let baseVal = convertEl.value;
  lengthEl.textContent = `${baseVal} meter = ${baseVal * meterToFt} feet | ${baseVal} feet = ${baseVal / meterToFt}`
  volumeEl.textContent = `${baseVal} liters = ${baseVal * literToGal} gallons | ${baseVal} gallons = ${baseVal / literToGal}`
  massEl.textContent = `${baseVal} kilograms = ${baseVal * kiloToPound} lbs | ${baseVal} lbs = ${baseVal / kiloToPound}`
})