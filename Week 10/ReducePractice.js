let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];
let theBiggestVal = theBiggest.reduce(function (acc, val, i, arr) {
  if (val.length > acc.length) {
    return val;
  } else {
    return acc;
  }
});
console.log(theBiggestVal);

console.log("#".repeat(20));

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let mystr = removeChars
  .filter(function (el) {
    if (el == "@") {
      return;
    } else {
      return el;
    }
  })
  .reduce(function (acc, val, i, arr) {
    return acc + val;
  });
console.log(mystr);
