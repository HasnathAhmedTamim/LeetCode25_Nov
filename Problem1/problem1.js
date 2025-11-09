var twoSum = function(nums, target) {
	const seen = new Map(); // value -> index
	for (let i = 0; i < nums.length; i++) {
		const x = nums[i];
		const need = target - x;
		if (seen.has(need)) {
			return [seen.get(need), i];
		}
		// store the current number's index
		seen.set(x, i);
	}
	// problem guarantees exactly one solution, so no explicit return needed
};

// Quick tests (prints expected outputs)
console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([3,2,4], 6));     // [1, 2]
console.log(twoSum([3,3], 6));       // [0, 1]

// export for use in other modules/tests
if (typeof module !== 'undefined') module.exports = twoSum;