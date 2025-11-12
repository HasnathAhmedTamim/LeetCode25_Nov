const prefixSum = (arr) => {
  // Get the size of the array.
  const n = arr.length;

  // Create an empty array of the same size as input.
  const result = new Array(n);

  // Initialize the first position of the array with the same value as the first item of the item.
  result[0] = arr[0];

  // Go through the input array, starting in the position 0, to the n.
  for (let i = 1; i < n; i++)
    // Assign the result of the previous value and the value in the current position in the input array.
    result[i] = result[i - 1] + arr[i];

  return result;
};

const prefixTestArray = [2, 4, 6, 8, 10, 12, 14];

console.log(prefixSum(prefixTestArray));
