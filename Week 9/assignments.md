# Assignment 1
```
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let myArr = [];
    myArr = zName.split(" ");
    myArr[1] = myArr[1].slice(0,1).toUpperCase() + ".";
    zName = myArr.join(" ");
    return zName;
  }
  function ageWithMessage(zAge) {
    zAge = parseInt(zAge);
    return 'Your age is ' + zAge;
  }
  function countryTwoLetters(zCountry) {
    zCountry = zCountry.slice(0,2).toUpperCase()
    return 'You Live In ' + zCountry;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

```
# Assignment 2
```
let itsMe = _ => `Iam A Normal Function`;
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
```
# Assignment 3
```
function checker(zName) {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

```
# Assignment 4
```
function specialMix(...data) {
  let passTest = [];
  let specialTest = []
  for (let i = 0; i < data.length; i++){
    if (typeof data[i] == 'number'){
      passTest.push("PASS")
    } else if (typeof data[i] == 'string' && Boolean(parseInt(data[i])) == true){
      passTest.push(data[i])
    } else if (typeof data[i] == "string" && Boolean(parseInt(data[i])) == false) {
      specialTest.push("NOT PASS");
    }
  }
  if (passTest.length == data.length && passTest[0] == 'PASS'){
    let result = 0;
    for (let j = 0; j < data.length; j++){
      result += data[j]
    }
    return(result);
  } else if (Boolean(parseInt(passTest[0])) == true) {
    let result = 0;
    for (let j = 0; j < passTest.length; j++) {
      result += parseInt(passTest[j]);
    }
    return(result);
  } else if (specialTest.length == data.length && specialTest[0] == "NOT PASS") {
    return("All are strings");
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

```