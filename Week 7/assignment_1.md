# Assignment 1
```
let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += start){
  if (i == 40)
    continue;
  console.log(i)
}
```
# Assignment 2
```
let start = 10;
let end = 0;
let stop = 3;

for (let index = start; index > end; index--) {
  if (index < 10){
    console.log("0" + index)
  }else{
  console.log(index)
  }
  if (index == 3){
    break;
  }
}
```