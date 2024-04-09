const convertToCelsius = function(farhenheit) {
  let ans = (farhenheit-32)*5/9;
  ans = Math.round(ans*10)/10;
  return ans;
};

const convertToFahrenheit = function(celcius) {
  let ans = celcius*9/5 +32;
  ans = ans.toFixed(1);
  return Number(ans);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
