//isSubsequence
isSubsequence = (str1, str2) =>{
    let i = 0;
    let j = 0;
    let jArray = []
    while(i<str1.length){
        if(str1[i] === str2[j]){
            jArray.push(str2[j])
            i++;
            j++;
        }else if(str1[i] !== str2[j]){
            j++;
        }
    }
    if(jArray.join("") === str1) return true;
    return false;
}

console.log(isSubsequence("sing", "sting"))