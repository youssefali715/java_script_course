let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swapped = swappingCases
  .split("")
  .map(function (ele) {
    if (ele == ele.toUpperCase()) {
      return ele.toLowerCase();
    } else if ((ele = ele.toLowerCase())) {
      return ele.toUpperCase();
    }
  })
  .join("");
document.write(swapped);
document.write(`<br>`);

let inverted = invertedNumbers.map((ele) => -ele).join(" | ");
document.write(inverted);
document.write(`<br>`);

let ignored = ignoreNumbers
  .split("")
  .map(function (ele) {
    if (Boolean(Number(ele)) === false) {
      return ele;
    } else {
      return "";
    }
  })
  .join("");
document.write(ignored);
document.write(`<br>`);
