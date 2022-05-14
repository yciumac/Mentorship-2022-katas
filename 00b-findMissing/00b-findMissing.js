function findMissing(numbers) {
   let source = [1, 2, 3, 4, 5, 6, 8, 9, 10];

   let compare = (a, b) => a - b;

   function findMissing(array) {
      array.sort(compare);

      if (array.length === array[array.length - 1]) {
         return array.length + 1;
      } else {
         let resultlength = array[array.length - 1] + 1;

         for (let i = 1; i < resultlength; i++) {
            if (array.indexOf(i) === -1) {
               return i;
            }
         }
      }
   }
}

console.log(findMissing(source));
module.exports = findMissing;

