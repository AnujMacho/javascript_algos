//Palindrome using Recursion

function isPalindrome(str){
   let reverseArray = [];
   
   function helperMethod(str1){
      if(str1.length === 0) return;
      reverseArray.unshift(str1[0]);
      return helperMethod(str1.slice(1))
   }

   helperMethod(str);

   if(reverseArray.join("") === str) return true;
   return false;
}

console.log(isPalindrome("foobar"))