/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    for (let num of nums1) {
        let count = map.has(num) ? map.get(num)+1 : 1;
        map.set(num, count);
    }
    let intersection = new Array();
    // let index = 0;
    for (let num of nums2) {
        let count = map.has(num) ? map.get(num) : 0;
        if (count > 0) {
            // intersection[index++]=num;
            intersection.push(num)
            console.log(intersection);
            count--;
            if (count > 0) {
                map.set(num, count);
            } else {
                map.delete(num);
            }
        }
    }
    return intersection;
};

console.log(intersect([4,9,5],[9,4,9,8,4]));