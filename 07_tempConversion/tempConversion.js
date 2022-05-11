const ftoc = function(temp) {
   temp = (temp - 32 ) * 5 / 9
   var rounded = Math.round(temp * 10) / 10
   return rounded
};

const ctof = function(temp) {
   temp = temp * 9 / 5 + 32
   var rounded = Math.round(temp * 10) / 10
   return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
