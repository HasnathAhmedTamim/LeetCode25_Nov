var sumOddLengthSubarrays = function (arr) {
  const n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    const left = i + 1;
    const right = n - i;
    const totalSub = left * right;
    const oddCount = Math.floor((totalSub + 1) / 2);
    total += arr[i] * oddCount;
  }
  return total;
};
const testArray = [10, 11, 12];

console.log(sumOddLengthSubarrays(testArray));
