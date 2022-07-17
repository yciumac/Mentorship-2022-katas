
function twoToOne(str1, str2) {

   if (str1.match(/[0-9]/i) || str2.match(/[0-9]/i)) {
      return "Invalid input";
   } else {
      return [...new Set((str1 + str2).split(''))].sort().join('');
   }

};

module.exports = twoToOne;