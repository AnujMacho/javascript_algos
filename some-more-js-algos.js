//Add Upto
// function addUpto(n){
//     return n*(n+1)/2;
// }

// console.log(addUpto(10));

//Chracter count O(n)

// function characterCount(string){
//     //to lower case
//     string = string.toLowerCase();
//     //removing white spaces
//     string = string.split(" ").join("");
//     var strObject = {}
//     //looping
//     for(var i=0; i<string.length;i++){
//         //verifying if data is present
//         if(!strObject[string[i]]){
//             strObject[string[i]] = 1;
//         }else{
//             strObject[string[i]] += 1;
//         }
//     }
//     return strObject;
// }

// console.log(characterCount("aaAAa  bcad 12344"))


//Frequency Counter (Squared Items)

// function squaredItems(arr1, arr2){
//     if (arr1.length !== arr2.length) return false;
//     arr1.forEach(element => {
//         let index = arr2.indexOf(element**2);
//         console.log(index)
//         if(index === -1) return false;
//         arr2.splice(index, 1);
//     });
//     return true;
// }

// console.log(squaredItems([1,2,3],[6,4,1]))

// function squaredItems(arr1, arr2){
//     if(arr1.length !== arr2.length) return false;

//     let frequencyCounter1 = {}

//     let frequencyCounter2 = {}

//     for(let val of arr1){
//         if(val in frequencyCounter1) {
//             frequencyCounter1[val]++;
//         }else{
//             frequencyCounter1[val] = 1;
//         }
//     }
//     for(let val of arr2){
//         if(val in frequencyCounter2) {
//             frequencyCounter2[val]++;
//         }else{
//             frequencyCounter2[val] = 1;
//         }
//     }
//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)

//     for (let key in frequencyCounter1){
//         if(!(key**2 in frequencyCounter2)) return false;
//         if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
//     }
//     return true;
// }

// console.log(squaredItems([1,2,3,1],[9,4,1,1]))


//Anagram

// function isAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     for(let val of str1){
//         if(!frequencyCounter1[val]){
//             frequencyCounter1[val]=1;
//         }else{
//             frequencyCounter1[val]++;
//         }
//     }

//     for(let val of str2){
//         if(!frequencyCounter2[val]){
//             frequencyCounter2[val]=1;
//         }else{
//             frequencyCounter2[val]++;
//         }
//     }

//     for(let val in frequencyCounter1){
//         if(!(val in frequencyCounter2)) return false;
//         if(frequencyCounter2[val]!==frequencyCounter1[val]) return false;
//     }
//     return true;

// }

// console.log(isAnagram("anuj", "anuj"))

//sumZero
//Naive Solution O(n^2)
// function sumZero(arr){
//     for(let i=0;i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]===0) return [arr[i], arr[j]];
//         }
//     }
//     return undefined;
// }

// console.log(sumZero([1,2,3]))

// Good Solution O(n)

// function sumZero(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right){
//         let sum = arr[left]+arr[right];
//         if(sum===0){
//             return [arr[left], arr[right]];
//         }else if(sum>0){
//             right--;
//         }else{
//             left++;
//         }
//     }
// }

// console.log(sumZero([-2,1,2,3]))

//Count Unique Values

// function countUniqueValues(arr){

//     if(arr.length === 0){
//         return 0;
//     }

//     let left = 0;
//     let right = 1;
//     let count = 1;
//     while(right<=arr.length-1){
//         if(arr[left]!==arr[right]){
//             left = right;
//             right++;
//             count++;
//         }else{
//             right++;
//         }
//     }
//     return count;
// }

// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// function findUniq(arr) {
//     let uniqObj = {}
//     for(let val of arr){
//         if(!uniqObj[val]){
//             uniqObj[val]=1;
//         }else{
//             uniqObj[val]++;
//         }
//     }
//     for (let index = 0; index < arr.length; index++) {
//         if(uniqObj[arr[index]] === 1) return arr[index];
//     }
// }

// console.log(findUniq([ 3, 10, 3, 3, 3 ]))

// function validParentheses(parens){
//     let indent = 0;
//     for (let index = 0; index < parens.length && indent>=0; index++) {
//         if(parens[index] === "("){
//             indent++;
//         }else{
//             indent--;
//         }
//     }
//     return (indent ===0);
// }

// console.log(validParentheses( "())" ))

// function parseMolecule(formula) {
//     let newArray = []
//     let letterObj = {}
//     for (let index = 0; index < formula.length; index++) {
//         newArray.push(formula[index])
//     }
//     for (let index = 0; index < newArray.length; index++) {
//         if(parseInt(newArray[index])){
//             letterObj[newArray[index-1]] = parseInt(newArray[index]);
//         }else{
//             letterObj[newArray[index]] = 1;
//         }
//     }
//     console.log(letterObj)
// }

// parseMolecule("H2SO4")

// function secondHighest(arr){
//     for (let i=arr.length-1; i >=0; i--) {
//         for (let j=0;j<i; j++) {
//             console.log(arr[j], arr[j+1])
//             if(arr[j]>arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr[1];
// }

// console.log(secondHighest([900,800,200]))

// function oddProduct(arr) {
// 	let sum = 1;
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]%2 !== 0){
//             sum *= arr[i]
//             console.log(sum)
// 		}
// 	}
// 	return sum;
// }

// console.log(oddProduct([3, 4, 1, 1, 5]))

// function amplify(num) {
//     let newArray = []
// 	for (let i = 1; i <= num; i++) {
//         if (i%4 === 0) {
//             newArray.push(i*10)
//         }else{
//             newArray.push(i)
//         }
//     }
//     return newArray
// }

// console.log(amplify(4))

// function factorial(n) {
//     if(n === 0)return 1;
//     console.log(n)
// 	return n*factorial(n-1)
// }

// console.log(factorial(5))

// function isSuffix(word, suffix) {
//     let a = "-"+word.slice(word.length-suffix.length+1)
//     console.log(a)
// 	for(let i=0;i<suffix.length;i++){
//         console.log(a[i], suffix[i])
// 		if(a[i]!==suffix[i])return false
// 	}
//     return true;
// }

// console.log(isSuffix("rhinoplasty", "-plasty"))

// function mauriceWins(mSnails, sSnails) {
//     msum = mSnails[1]+mSnails[2]
//     ssum = sSnails[0]+sSnails[1]
//     console.log(msum,ssum)
// }

// mauriceWins([3, 5, 10], [4, 7, 11])

function identicalFilter(arr) {
    let newArray = []
	for (let i = 0; i < arr.length; i++) {
        if(arr[i].split("").every(x => x === x[0])) newArray.push(arr[i]);
    }
    console.log(newArray)
}

identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz'])
