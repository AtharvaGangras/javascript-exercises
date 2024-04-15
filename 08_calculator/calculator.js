const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((total,element)=>total+element,0)
};

const multiply = function(a) {
  return a.reduce((total,element)=>total*element,1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let ans = 1;
  while(num>1){ ans*=num; num--;}
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
