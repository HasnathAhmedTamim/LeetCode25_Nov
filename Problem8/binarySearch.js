/**
 * Binary Search (O(log n))
 * Returns index of target in sorted array nums, or -1 if not found.
 * @param {number[]} nums - sorted ascending array with unique integers
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];

    if (val === target) return mid;
    if (val < target) {
      left = mid + 1; // target in right half
    } else {
      right = mid - 1; // target in left half
    }
  }

  return -1; // not found
}

// --- Examples ---
console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1

// Export for tests (optional)
// module.exports = search;
