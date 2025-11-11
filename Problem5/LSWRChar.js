function lengthOfLongestSubstring(s) {
  const lastStoreIndex = new Map();
  let start = 0;
  let maximum = 0;

  for (let end = -0; end < s.length; end++) {
    const character = s[end];
    if (
      lastStoreIndex.has(character) &&
      lastStoreIndex.get(character) >= start
    ) {
      start = Math.max(lastStoreIndex.get(character) + 1, start);
    }
    lastStoreIndex.set(character, end);
    maximum = Math.max(maximum, end - start + 1);
  }
  return maximum;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(""));
