/**
 * @param {number[]} nums
 * @return {number}
 */
// 原地哈希 -------------------
var missingNumber = function(nums) {
    let swap=(nums,i,j)=>{
        let c = nums[i];
        nums[i] = nums[j];
        nums[j] = c;
    }
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] != i && nums[i] < n) swap(nums, nums[i], i--);
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] != i) return i;
    }
    return n;
};
console.log(missingNumber([3,0,1]));


// 异或
var missingNumber = function(nums) {
    let xor = 0;
    const n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }
    return xor;
};