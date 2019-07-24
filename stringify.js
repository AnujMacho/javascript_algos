//Stringify

function stringifyNumbers(obj){
    let newObj = JSON.parse(JSON.stringify(obj));

    function helperMethod(newObj){
      let keys = Object.keys(newObj);
      keys.forEach(el => {
        if(typeof(newObj[el]) === "number"){
          newObj[el] = newObj[el].toString();
          console.log(typeof(newObj[el]))
        }else if(typeof(obj[el]) === "object"){
          helperMethod(newObj[el]);
        }
      });
    }
  helperMethod(newObj);
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj))