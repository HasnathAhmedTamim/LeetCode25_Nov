/**
 * 844. Backspace String Compare
 * Two-pointer approach from the end: O(n) time, O(1) extra space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    // find next valid char in s
    let skipS = 0;
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++; i--;
      } else if (skipS > 0) {
        skipS--; i--;
      } else break;
    }

    // find next valid char in t
    let skipT = 0;
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++; j--;
      } else if (skipT > 0) {
        skipT--; j--;
      } else break;
    }

    const chS = (i >= 0) ? s[i] : null;
    const chT = (j >= 0) ? t[j] : null;

    if (chS !== chT) return false;

    i--; j--;
  }

  return true;
}

// Examples
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b"));     // false

// Optional export for tests
// module.exports = backspaceCompare;
