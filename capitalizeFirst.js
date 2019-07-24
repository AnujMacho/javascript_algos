//CapitalizeFirst

function capitalizeFirst(arr){
    let i =0;
    let newArray = [];
    function helperMethod(array){
        if(array.length === 0) return;
        newArray.push(array[0][0].toUpperCase()+arr[i].slice(1));
        i++;
        return helperMethod(array.slice(1));
    }
    helperMethod(arr);
    return newArray;
}

console.log(capitalizeFirst(["anuj", "rock", "role"]))