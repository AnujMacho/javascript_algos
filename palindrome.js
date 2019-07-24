palindrome = str =>{
    str = str.replace(/[^0-9a-z]/gi, '');
    str = str.toLowerCase();
    let arr = [];
    for(let i=str.length-1; i>=0;i--){
        arr.push(str[i])
    }
    let str2 = arr.join("");
    if (str === str2) return true;
    return false;
}

console.log(palindrome("_eye"));