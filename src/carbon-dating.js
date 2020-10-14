const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

// module.exports = function dateSample(sampleActivity) {
function dateSample() {
  const ln = Math.log(MODERN_ACTIVITY / 8.0);
  return ln;
}

console.log(dateSample());
