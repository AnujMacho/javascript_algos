//someRecursive

function someRecursive(arr, callback){
   if(arr.length === 0) return false;
   if(callback(arr[0])) return true;
   return someRecursive(arr.slice(1), callback);
}

function isOdd(element){
   if(element%2 !== 0) return true;
   return false;
}

console.log(someRecursive([2,4,1], isOdd))