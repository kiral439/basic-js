const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateSeason) {
  if(dateSeason == undefined) {
		return 'Unable to determine the time of year!';
	} else if(dateSeason.hasOwnProperty('toString')) {
		throw new Error;
	};
  
	let numberMonth = dateSeason.getMonth();
	if(numberMonth <= 1 || numberMonth == 11) {
		return "winter";
	} else if(numberMonth >= 2 && numberMonth <= 4) {
		return "spring";
	} else if(numberMonth >= 5 && numberMonth <= 7) {
		return "summer";
	} else if(numberMonth >= 8 && numberMonth <= 10) {
		return "fall";
	}
};