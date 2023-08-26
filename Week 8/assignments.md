# Assignment 1
```
function sayHello(theName, theGender) {
  if (theGender === "Male"){
    console.log("Hello ", "MR ", theName)
  } else if (theGender === "Female"){
    console.log("Hello ", "MRS. ", theName)
  }else {
    console.log("Hello ", theName)
  }
}
```
# Assignment 2
```
function calculate(firstNum, secondNum, operation) {
  if (secondNum != undefined){
  switch (operation){
    default:
    case 'add':
      console.log(firstNum + secondNum);
      break;
    case 'subtract':
      console.log(firstNum - secondNum);
      break;
    case 'multiply':
      console.log(firstNum * secondNum);
      break;
    case 'divide':
      console.log(firstNum / secondNum);
      break;
  }
}else{
  console.log(`Second Number Not Found`);
}
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

```
# Assignment 3
```
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100){
  console.log(theAge * 12)
  console.log(theAge * 365)
  console.log(theAge * 365 * 24)
  console.log(theAge * 365 * 24 * 60)
  console.log(theAge * 365 * 24 * 60 * 60)
  }else{
    console.log("Age out of range")
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

```
# Assignment 5
```
function createSelectBox(startYear, endYear) {
  document.write(`<select>`)
  for (let i = startYear; i < endYear + 1; i++){
    document.write(`<option value="${i}">${i}</option>`)
  }
  document.write(`</select>`)
}
createSelectBox(2000, 2021);

```
# Assignment 6
```
function multiply(...nums){
  let mynums = [];
  for (let i = 0; i < nums.length; i++){
    if (typeof nums[i] === 'number'){
      mynums.push(Math.trunc(nums[i]));
    }
  }
  let result = 1;
  for (let j = 0; j < mynums.length; j++){
    result *= mynums[j]
  }
  console.log(result)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

```