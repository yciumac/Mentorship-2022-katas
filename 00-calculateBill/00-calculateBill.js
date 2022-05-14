function CalculateBill(bill, vat, tip) {
   var curr = '$';

   var totalAmount = String(curr) + (bill + (bill * vat) + (bill * tip));

   return totalAmount;
}
console.log(CalculateBill(80, 0.2, 0.1))

module.exports = CalculateBill;
