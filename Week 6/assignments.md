# Assignment 1
```
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(--String(num).length, -String(num).length)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
```

# Assignment 2
```
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
```
# Assignment 3
```
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse());
```
# Assignment 4
```
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
```
# Assignment 5
```
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.includes(needle) ? console.log("Found") : console.log("Not Found");
haystack.indexOf(needle) != -1
  ? console.log("Found")
  : console.log("Not Found");
haystack.lastIndexOf(needle) != -1
  ? console.log("Found")
  : console.log("Not Found");
```
# Assignment 6
```
console.log(allArrs.concat(arr1,arr2).sort().slice(-arr1.length).join("").toLowerCase());
```