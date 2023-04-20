function find(array, value) {
    let l=-1,r=array.length
    while(l+1!=r){
        let mid=l+~~((r-l)/2)
        if(array[mid]>=value){
            r=mid
        }else{
            l=mid
        }
    }
    if(r==array.length) return -1
    return array[r]==value ? r : -1
}