const secondLargestNumber = require('./03-secondLargestNumber');

test('should return second largest number in given array', () => {
   var result = secondLargestNumber([1, 2, 3]);
   expect(result).toEqual(2);
});

test('should return second largest number in given array', () => {
   var result = secondLargestNumber(['1', 21, '11']);
   expect(result).toEqual('11');
});

test('should return second largest number in given array', () => {
   var result = secondLargestNumber(['hello', { a: 55 }, 1, 2, 3]);
   expect(result).toEqual(2);
});