function showDetails(a, b, c) {
  let myArray = [a, b, c];
  let name, age, status;
  for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "string") {
      name = myArray[i];
    } else if (typeof myArray[i] === "number") {
      age = myArray[i];
    } else if (typeof myArray[i] === "boolean") {
      status = myArray[i];
    }
  }
  if (status === true) {
    console.log(
      `Hello ${name}, Your Age is ${age}, You are avalibale for hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age is ${age}, You are not avalibale for hire`
    );
  }
}
showDetails(25, "Hamoda", false);
