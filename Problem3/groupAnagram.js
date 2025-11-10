var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  const result = Array.from(map.values());
  return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
