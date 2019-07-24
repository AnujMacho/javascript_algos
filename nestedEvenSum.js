//nestedEvenSum

function nestedEvenSum (obj) {
    let sum = 0; 
    let keys = Object.keys(obj);
    
    keys.forEach( k => {
        if ( typeof obj[k] === "number" && obj[k] % 2 === 0) {
            sum += obj[k]; 
        }
        if (typeof obj[k] === "object") {
            return sum += nestedEvenSum(obj[k]);
        }
    })
    
    console.log(sum);
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10