const isStringUppercase = require('./02-isStringUppercase');

test('should return true when string isUppercase', () => {
   var result = isStringUppercase('HELLO');
   expect(result).toBe(true);
});

test('should return false when strig is not isUppercase', () => {
   var result = isStringUppercase('Hello');
   expect(result).toBe(false);
});

test('should return "Invalid input" when string contains unacceptable characters', () => {
   var result = isStringUppercase('HELLO!!!!');
   expect(result).toBe("Invalid input");
});

test('should return "Invalid input" when string contains unacceptable characters', () => {
   var result = isStringUppercase('HELLO123');
   expect(result).toBe("Invalid input");
});


