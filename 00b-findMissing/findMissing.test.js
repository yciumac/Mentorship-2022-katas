const findMissing = require('./00b-findMissing');

test('should return correct number, when missing is 7', () => {

   var result = findMissing([1, 2, 3, 4, 5, 6, 8, 9, 10]);

   expect(result).toBe(7);
});

test('should return correct number, when missing is 2', () => {

   var result = findMissing([1, 3, 4, 5, 6, 7, 8, 9, 10]);

   expect(result).toBe(2);
});

test('should return correct number, when missing is 1', () => {

   var result = findMissing([2, 3, 4, 5, 6, 7, 8, 9, 10]);

   expect(result).toBe(1);
});