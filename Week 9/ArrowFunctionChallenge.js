let names = (...list) => `String [${list.join("] , [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let myNumbers = [20, 50, 10, 60];
function calc(...nums) {
  let result = 0,
    remainder;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  remainder = result - 80;
  console.log(result - remainder);
}
calc(20, 50, 10, 60);
