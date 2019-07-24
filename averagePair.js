averagePair = (arr, num) =>{
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            let avg = arr[i]+arr[j]/2;
            if(avg===num){
                return true
            }
        }
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5))