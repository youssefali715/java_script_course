# Assignment 1
```
let num = 9;

let value = String(num).length;
if (value == 1){
  console.log("00" + num);
} else if (value == 2){
  console.log("0" + num);
} else if (value == 3){
  console.log(num);
}
```
# Assignment 2
```
let num1 = 9;
let str = "9";
let str2 = "20";

console.log(num1 == str
  ? `${num1} Is The Same Value As ${str}`
  : `${num1} Is Not The Same Value As ${str}`);

console.log(num1 == str && num1 !== str
  ? `${num1} Is The Same Value As ${str} But Not The Same Type`
  : `${num1} Is Not The Same Value As ${str} But Not The Same Type`);

console.log(num1 != str && num1 !== str
  ? `${num1} Is Not The Same Value Or The Same Type As ${str2}`
  : `${num1} Is Not The Same Value Or Not The Same Type As ${str2}`);

console.log(typeof str === typeof str2 && str != str2
  ? `${str} Is The Same Type As ${str2} But Not The Same Value`
  : `${str} Is The Same Type As ${str2} But Not The Same Value`);
```
# Assignment 3
```
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1){
  if (num3 !== num1){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
  }else if (num3 == num2 && num3 !== num2){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
  }
} else if (num3 != num1 && num3 !== num1 && typeof num3 !== typeof num2){
  console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
```
# Assignment 4
```
let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;
```