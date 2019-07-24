//String Reverse Using Recursion

function reverse(str){
   let strArray = []
   function helperMethod(str1){
      if(str1.length === 0) return;
      strArray.unshift(str1[0]);
      return helperMethod(str1.slice(1))
   }
   helperMethod(str);
   return strArray.join("");
}

console.log(reverse("anuj"));