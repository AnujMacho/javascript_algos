//maxSubArraySum
maxSubArraySum = (arr, num) =>{
    if(num>arr.length){
        return null;
    }
    let maxSum = 0;
    while(arr.length){
        let s = sum(arr.slice(0, num))
        if(s>maxSum) maxSum = s;
        arr.splice(0,1);
    }
    return maxSum;
}

sum = arr =>{
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2))