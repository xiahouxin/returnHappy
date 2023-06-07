/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 方法一
    //    let len=nums.length
    //     if(len<2){
    //         return len
    //     }
    //     let tail=new Array(len)
    //     tail[0]=nums[0]
    //     let end=0
    //     for(let i=1;i<len;i++){
    //         if(nums[i]>tail[end]){
    //             tail[++end]=nums[i]
    //         }else{
    //             let l=-1,r=end+1
    //             while(l+1!=r){
    //                 let m=~~((l+r)/2)
    //                 if(tail[m]>=nums[i]){
    //                     r=m
    //                 }else{
    //                     l=m
    //                 }
    //             }
    //             tail[r]=nums[i]
    //         }
    //     }
    //     return ++end
    // 方法二
        let len=nums.length
        if(len<2){
            return len
        }
        let res=1
        let dp=new Array(len).fill(1)
        for(let i=1;i<len;i++){
            for(let j=0;j<i;j++){
                if(nums[i]>nums[j]){
                    dp[i]=Math.max(dp[i],dp[j]+1)
                }
            }
            res=Math.max(res,dp[i])
        }
        return res
    };