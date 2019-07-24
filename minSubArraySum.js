function minSubArrayLen(arr, num) {
    let sum = 0;
    let early = 0;
    let late = 0;
    let minLen = Infinity;
    while (early < arr.length) {
        sum += arr[early];
        if (sum >= num) {
            let min = (early + 1) - late;
            minLen = Math.min(minLen, min);
            sum -= arr[late];
            late++;
            if (sum >= num) sum -= arr[early];
            else early++;
        }else early++;
    }
    return isFinite(minLen) ? minLen : 0;
}

minSubArrayLen([1,2,3,4,5,6], 7);