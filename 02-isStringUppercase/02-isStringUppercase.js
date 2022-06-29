
function isStringUppercase(string) {
   let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   if (format.test(string)) {
      return `Invalid input`;
   } else if (string === string.toUpperCase()) {
      return true;
   } else {
      return false;
   }
}


module.exports = isStringUppercase;
