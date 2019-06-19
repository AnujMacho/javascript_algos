function squaredItems(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}

    let frequencyCounter2 = {}

    for(let val of arr1){
        if(val in frequencyCounter1) {
            frequencyCounter1[val]++;
        }else{
            frequencyCounter1[val] = 1;
        }
    }
    for(let val of arr2){
        if(val in frequencyCounter2) {
            frequencyCounter2[val]++;
        }else{
            frequencyCounter2[val] = 1;
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
    }
    return true;
}

console.log(squaredItems([1,2,3,1],[9,4,1,1])) //O(n) time complexity
