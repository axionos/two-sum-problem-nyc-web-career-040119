// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(nums[i])
        result.push(nums[j])
      }
    }
  }
  return result
};
