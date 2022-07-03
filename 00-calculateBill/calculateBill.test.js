const calculateBill = require('./00-calculateBill');

test('should return correct total', () => {

   var result = calculateBill(80, 0.2, 0.1, '$')

   expect(result).toBe("$104");
});

test('should return correct total, when currency is Euro', () => {

   var result = calculateBill(80, 0.2, 0.1, 'Eur')

   expect(result).toBe("Eur104");
});