const sumOfMultiples = require('./06-sumOfMultiples');

test('returns sum for multiples of 3 and 5, when 2nd arg is true', () => {
   var result = sumOfMultiples(10, true);
   expect(result).toBe(23);
});

test('returns sum for multiples of 3 and 5, when 2nd arg is true', () => {
   var result = sumOfMultiples(16, true);
   expect(result).toBe(60);
});

test('returns an array of multiples of 3 and 5, when 2nd arg is false', () => {
   var result = sumOfMultiples(10, false);
   expect(result).toEqual([3, 5, 6, 9]);
});

test('returns an array of multiples of 3 and 5, when 2nd arg is false', () => {
   var result = sumOfMultiples(16, false);
   expect(result).toEqual([3, 5, 6, 9, 10, 12, 15]);
});

