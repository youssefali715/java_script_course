# Assignment 1
```
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let myMix = mix.map((el) => isNaN(el) ? el : "").reduce((acc,val) => acc + val);
console.log(myMix)
// Elzero
```
# Assignment 2
```
let myString = "EElllzzzzzzzeroo";
let myNewStr = myString.split("").filter(
  function (element, index, array){
    if (element != array[index-1]){
      return element
    }
  }
).reduce(
  function (accumulator, currentVal){
    return accumulator + currentVal;
  }
);
console.log(myNewStr)
// Elzero

```
# Assignment 3
```
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myNewArr = myArray.map(
  function (el, i , arr){
    if (Array.isArray(el) === true){
      let arri = i;
      let arrilast = i+1
      return myArray.slice(0,arri).concat(el, myArray.slice(arrilast)).join("")
    } else{
      return;
    }
  }
).join("");
console.log(myNewArr)
// Elzero

```
# Assignment 4
```
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNums = numsAndStrings
  .filter(function (value, index, array) {
    return !isNaN(value) ? value : "";
  })
  .map(function (el) {
    return -el;
  });
console.log(newNums)
// [-1, -10, 10, 20, -5, -3]

```
# Assignment 5
```
let nums = [2, 12, 11, 5, 10, 1, 99];
console.log(nums.reduce(
  function (acc,val,i,arr){
    if (val % 2 == 0){
      return acc * val;
    } else {
      return acc + val;
    }
  },1
))
// 500

```