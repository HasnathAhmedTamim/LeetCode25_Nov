/**
 * Sort an array in ascending order without built-in sort.
 * We'll use in-place Heap Sort: O(n log n) time, O(1) extra space.
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
	// build max-heap in array
	const n = nums.length;

	function heapify(arr, heapSize, root) {
		let largest = root;
		const left = 2 * root + 1;
		const right = 2 * root + 2;

		if (left < heapSize && arr[left] > arr[largest]) largest = left;
		if (right < heapSize && arr[right] > arr[largest]) largest = right;

		if (largest !== root) {
			const tmp = arr[root];
			arr[root] = arr[largest];
			arr[largest] = tmp;
			heapify(arr, heapSize, largest);
		}
	}

	// build max heap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(nums, n, i);
	}

	// extract elements from heap one by one
	for (let end = n - 1; end > 0; end--) {
		// move current max to end
		const tmp = nums[0];
		nums[0] = nums[end];
		nums[end] = tmp;
		// heapify reduced heap
		heapify(nums, end, 0);
	}

	return nums;
}

// Examples
console.log(sortArray([5,2,3,1])); // [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // [0,0,1,1,2,5]

// Optional export for tests
// module.exports = sortArray;

/**
 * In-place Quick Sort (randomized pivot) - average O(n log n)
 * Not stable. Uses recursion (O(log n) average stack).
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort(nums) {
	function swap(a, i, j) {
		const t = a[i];
		a[i] = a[j];
		a[j] = t;
	}

	function partition(a, left, right) {
		// choose random pivot and move to end
		const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
		const pivot = a[pivotIndex];
		swap(a, pivotIndex, right);

		let store = left;
		for (let i = left; i < right; i++) {
			if (a[i] < pivot) {
				swap(a, i, store);
				store++;
			}
		}
		swap(a, store, right); // move pivot to its final place
		return store;
	}

	function qsort(a, left, right) {
		if (left >= right) return;
		const pivotPos = partition(a, left, right);
		qsort(a, left, pivotPos - 1);
		qsort(a, pivotPos + 1, right);
	}

	qsort(nums, 0, nums.length - 1);
	return nums;
}

// QuickSort examples
console.log(quickSort([5,2,3,1])); // [1,2,3,5]
console.log(quickSort([5,1,1,2,0,0])); // [0,0,1,1,2,5]

// If you prefer Quick Sort as the solution, you can export it instead:
// module.exports = quickSort;

/**
 * Merge Sort (stable) - O(n log n) time, O(n) extra space
 * Returns a new sorted array (we copy back into original for convenience).
 * @param {number[]} nums
 * @return {number[]}
 */
function mergeSort(nums) {
	if (nums.length <= 1) return nums;

	function merge(leftArr, rightArr) {
		const res = [];
		let i = 0, j = 0;
		while (i < leftArr.length && j < rightArr.length) {
			if (leftArr[i] <= rightArr[j]) {
				res.push(leftArr[i++]);
			} else {
				res.push(rightArr[j++]);
			}
		}
		while (i < leftArr.length) res.push(leftArr[i++]);
		while (j < rightArr.length) res.push(rightArr[j++]);
		return res;
	}

	function ms(a) {
		const n = a.length;
		if (n <= 1) return a.slice();
		const mid = Math.floor(n / 2);
		const left = ms(a.slice(0, mid));
		const right = ms(a.slice(mid));
		return merge(left, right);
	}

	const sorted = ms(nums);
	// copy sorted values back into original array (optional)
	for (let i = 0; i < sorted.length; i++) nums[i] = sorted[i];
	return nums;
}

// MergeSort examples
console.log(mergeSort([5,2,3,1])); // [1,2,3,5]
console.log(mergeSort([5,1,1,2,0,0])); // [0,0,1,1,2,5]

// Export mergeSort if needed:
// module.exports = mergeSort;

