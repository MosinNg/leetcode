/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    console.log('val', val);
    if (nums.indexOf(val) !== -1 && i !== nums.indexOf(val)) {
      return [i, nums.indexOf(val)];
    }
  }
};

console.log(
  twoSum([3,2,4], 6)
);
