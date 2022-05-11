const palindromes = function(string) {
   let processString = string.toLowerCase().replace(/[^a-z]/g, "");

   return (processString.split("").reverse().join("") == processString)
};

// Do not edit below this line
module.exports = palindromes;
