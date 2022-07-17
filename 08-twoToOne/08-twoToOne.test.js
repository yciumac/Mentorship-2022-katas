const twoToOne = require('./08-twoToOne');

test('join two strings and return new sorted string with distinct letters only', () => {
   var result = twoToOne('aaa', 'bbb');
   expect(result).toBe('ab');
});

test('join two strings and return new sorted string with distinct letters only', () => {
   var result = twoToOne('ffeehh', 'abcyy');
   expect(result).toBe('abcefhy');
});

test('should return "Invalid input" when string contains numbers', () => {
   var result = twoToOne('ffe123', '2bcyy');
   expect(result).toBe("Invalid input");
});