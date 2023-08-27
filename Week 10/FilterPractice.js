let sentence = "I Love Foood Code Too Playing Much";
let newSentence = sentence
  .split(" ")
  .filter((el) => el.length <= 4)
  .join(" ");
console.log(newSentence);

let ignoreNumbers = "Elz123er4o";
let newIgnore = ignoreNumbers
  .split("")
  .filter((el) => isNaN(el))
  .join("");
console.log(newIgnore);

let mix = "A13BS2ZX";
let notMix = mix
  .split("")
  .filter((el) => Number.isInteger(+el))
  .map((el) => el * el)
  .join("");
console.log(notMix);
