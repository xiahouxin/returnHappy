var removeKdigits = function(num, k) {
    let ans=[]
    for(let i=0;i<num.length;i++){
        let ch=num[i]
        while(k>0 && ans.length>0 && ans[ans.length-1]>ch){
            ans.pop()
            console.log(ans);
            k--
        }
        if(ch=="0"&&ans.length==0) continue
        ans.push(ch)
        // console.log(ans);
    }
    ans=ans.slice(0,ans.length-k)
    return ans.length==0 ? "0" :ans.join("")
};
console.log(removeKdigits("1432219",3));