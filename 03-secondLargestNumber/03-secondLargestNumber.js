function secondLargestNumber(numbers) {

   let largest = 0, secondLargest = 0;

   for (const i of numbers) {
      if (i > largest) {
         largest = i;
      };
   };

   for (const j of numbers) {
      if (j > secondLargest && j < largest) {
         secondLargest = j;
      };
   };

   return secondLargest;
};

module.exports = secondLargestNumber;
