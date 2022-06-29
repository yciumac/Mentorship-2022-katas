
function isStringUppercase(string) {
   let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
   if (format.test(string)) {
      return `Invalid input`;
   } else if (string === string.toUpperCase()) {
      return true;
   } else {
      return false;
   }
}


module.exports = isStringUppercase;
