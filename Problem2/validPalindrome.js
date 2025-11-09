var isPalindrome = function (s) {
  let lowerCaseStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase().trim();

  if (lowerCaseStr.length === 0) return true;
  else {
    const reversed = lowerCaseStr.split("").reverse().join("");
    return reversed === lowerCaseStr;
  }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));