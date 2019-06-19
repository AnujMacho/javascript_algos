function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1){
        if(!frequencyCounter1[val]){
            frequencyCounter1[val]=1;
        }else{
            frequencyCounter1[val]++;
        }
    }

    for(let val of str2){
        if(!frequencyCounter2[val]){
            frequencyCounter2[val]=1;
        }else{
            frequencyCounter2[val]++;
        }
    }

    for(let val in frequencyCounter1){
        if(!(val in frequencyCounter2)) return false;
        if(frequencyCounter2[val]!==frequencyCounter1[val]) return false;
    }
    return true;

}

console.log(isAnagram("anuj", "anuj"))