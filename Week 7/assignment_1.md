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

# Assignment 3
```
let start = 1;
let end = 6;
let breaker = 2;

for (let i = 1; i < end+1; i++){
  console.log(i)
  for (let j = 0; j < start; j++){
    console.log("-- " + breaker)
    console.log("-- " + breaker * breaker);
  }
}
```

# Assignment 4
```
let index = 10;
let jump = 2;

for (;;) {
  if (index > jump){
    console.log(index);
    index-=jump;
  }else{
    break;
  }
}
```
# Assignment 5
```
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let index = letter.length; index <= friends.length; index++) {
  if (friends[index-letter.length][letter.length-letter.length] == letter.toUpperCase()){
    continue;
  }else{
  console.log(index + "#" + friends[index-letter.length])
  }
  
}
```
# Assignment 6
```
let start = 0;
let swappedName = "elZerO";
let newName = []
for (let index = 0; index < swappedName.length; index++) {
  if (swappedName[index] === swappedName[index].toUpperCase()){
    newName.push(swappedName[index].toLowerCase());
  }
  else if (swappedName[index] === swappedName[index].toLowerCase()){
    newName.push(swappedName[index].toUpperCase());
  }
  
}
console.log(newName.join(""))
```
# Assignment 7
```
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let index = String(start).length; index < mix.length; index++) {
  if (typeof mix[index] == "string"){
    continue;
  }
  console.log(mix[index])
}
```