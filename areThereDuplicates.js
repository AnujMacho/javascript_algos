areThereDuplicates = (...args) =>{
    args.sort();
    let j=1;
    for(let i=0; i<args.length; i++){
        if(args[i]===args[j]){
            return true;
        }else{
            j++;
        }
    }
    return false;
}

console.log(areThereDuplicates(3,2,1,1))