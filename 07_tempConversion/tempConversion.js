const convertToCelsius = function(fahr) {
  let celsiusTemp = (fahr - 32) * 5 / 9;
  return +celsiusTemp.toFixed(1);
};

const convertToFahrenheit = function(cel) {
  let fahrenTemp = (cel * 9/5) + 32;
  return +fahrenTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
