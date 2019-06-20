function countUniqueValues(arr){

    if(arr.length === 0){
        return 0;
    }

    let left = 0;
    let right = 1;
    let count = 1;
    while(right<=arr.length-1){
        if(arr[left]!==arr[right]){
            left = right;
            right++;
            count++;
        }else{
            right++;
        }
    }
    return count;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))