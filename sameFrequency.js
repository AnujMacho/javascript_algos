sameFrequency = (n1, n2) =>{
    n1 = n1.toString(); 
    n2 = n2.toString();
    const freqCounter1 = {}
    const freqCounter2 = {}
    for (let val of n1){
        if(freqCounter1[val]){
            freqCounter1[val]++;
        }else{
            freqCounter1[val] = 1;
        }
    }
    for (let val of n2){
        if(freqCounter2[val]){
            freqCounter2[val]++;
        }else{
            freqCounter2[val] = 1;
        }
    }
    for(let val in freqCounter1){
        console.log(val)
    }
    console.log(freqCounter2)
    for(let val in freqCounter1){
        if(!(val in freqCounter2)) return false;
        if(freqCounter2[val]!==freqCounter1[val]) return false;
    }
    return true
}

console.log(sameFrequency(22,222))