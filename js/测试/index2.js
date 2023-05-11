let str="AABABBBCCCDDDeeeEEffFFF"
// console.log(str.charCodeAt(0));  //65
// console.log("Z".charCodeAt(0)); //90
// console.log("a".charCodeAt(0)); //97
// console.log("z".charCodeAt(0)); //122

// console.log(str.split("").sort((a,b)=>a-b).join(""));


function unique(str) {
    let arr = str.split("");
    let newArr = [...new Set(arr)];
    return newArr.join("");
}
console.log(unique(str));



nums = [-1,0,1,2,-1,-4]
function fun(arr){
    arr.sort((a,b)=>{
        return a-b
    })
    let ans=[]
    for(let i=0;i<arr.length-2;i++){
        let j=i+1,k=arr.length-1
        while(j<k){
            
            let sum=arr[i]+arr[j]+arr[k]
            if(sum<0){
                j++
            }else if(sum>0){
                k--
            }else{
                ans.push([arr[i],arr[j],arr[k]])
                j++
                k--
            }
        }
    }
    return ans
}
console.log(fun(nums));