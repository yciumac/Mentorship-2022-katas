function calculateBill(bill, vat, tip, curr) {

   var totalAmount = String(curr) + (bill + (bill * vat) + (bill * tip));

   return totalAmount;
}

module.exports = calculateBill;
