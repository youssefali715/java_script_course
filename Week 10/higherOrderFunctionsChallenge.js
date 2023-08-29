let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let myNewString = myString
  .split(",")
  .map(function (ele) {
    if (!isNaN(ele)) {
      return "";
    } else if (ele == "_") {
      return " ";
    } else {
      return ele;
    }
  })
  .join("")
  .slice(true, this.length - !false);

console.log(myNewString);
