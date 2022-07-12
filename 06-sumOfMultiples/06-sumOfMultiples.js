
function sumOfMultiples(number, isTrue) {
   let sum = 0;
   let arr = [];
   if (isTrue === true) {
      for (let i = 1; i < number; i++) {
         if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
         };
      };
      return sum;
   } else if (isTrue === false) {
      for (let i = 1; i < number; i++) {
         if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
         };
      };
      return arr;
   };

};
module.exports = sumOfMultiples;