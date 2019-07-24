//capitalize words
function capitalizeWords(words){
    let newArr = [];
    function helperMethod(arr){
      if(arr.length === 0) return;
      newArr.push(arr[0].toUpperCase());
      return helperMethod(arr.slice(1));
    }
    helperMethod(words)
    return newArr;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  capitalizeWords(words);