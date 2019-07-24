//Ceaser Cipher FreeCodeCamp
rot13 = str =>{
    let strArray = []
    for(let val of str){
        strArray.push(val)
    }

    for(let i=0; i<strArray.length; i++){
        let n = str.charCodeAt(i)
        if(n>64 && n<91){
            let a = n + 13;
            if(a>90){
                let remain = a - 90;
                a = 64 + remain;
            }
            let b = String.fromCharCode(a)
            strArray[i] = b
        }
    }
    return strArray.join("");
}

console.log(rot13("SERR PBQR PNZC"))