let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.reverse().slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"]
console.log(my.slice(++counter, --zero)); // ["Elham", "Mazero"]
my.unshift("Elzero");
console.log(my[++zero]); // "Elzero"
console.log(
  my[++zero].slice(my.indexOf("r")) +
    my[--zero].slice(my.indexOf("o")).toUpperCase()
); // "Elzero"
