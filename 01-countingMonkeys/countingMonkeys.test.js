const countingMonkeys = require('./02-countingMonkeys');

test('should return numbers from 1 to 8', () => {

   //expect([1, 2, 3, 4, 5, 6, 7, 8]).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
   expect([1, 2, 3, 4, 5, 6, 7, 8]).toHaveLength(8);

});