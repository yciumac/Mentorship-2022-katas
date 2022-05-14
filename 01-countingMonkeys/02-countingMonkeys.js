
function countingMonkeys(num) {
   var ar = [];
   for (var i = 1; i < num; i++)ar.push(i);
   return ar
}
console.log(countingMonkeys(8));

module.exports = countingMonkeys;
