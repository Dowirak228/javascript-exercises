const leapYears = function(value) {
   if (value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0)) {
      return true
   }
   return false
};

// Do not edit below this line
module.exports = leapYears;
