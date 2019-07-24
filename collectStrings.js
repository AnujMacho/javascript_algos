//collectStrings

function collectStrings(obj){
  let stringsArray = [];
  function helperMethod(newObj){
    let keys = Object.keys(newObj);
    keys.forEach(el => {
      if(typeof(newObj[el]) === "string"){
        stringsArray.push(newObj[el])
      } else if(typeof(newObj[el]) === "object"){
        helperMethod(newObj[el])
      }
    });

  }
  helperMethod(obj)
  console.log(stringsArray)
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj)