/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let realAdmins = [];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  realAdmins.push(myAdmins[i]);
}
document.write(`We have ${realAdmins.length} Admins`);
document.write(`<hr>`);

for (let j = 0; j < realAdmins.length; j++) {
  document.write(`The Admin For Team ${j + 1} is ${realAdmins[j]}`);
  document.write(`<h2>Team Members:</h2>`);
  document.write(`<ul>`);
  let myOnlyEmployees = [];
  for (let h = 0; h < myEmployees.length; h++) {
    if (myEmployees[h][0] === realAdmins[j][0])
      myOnlyEmployees.push(myEmployees[h]);
  }
  for (let k = 0; k < myOnlyEmployees.length; k++) {
    document.write(`<li>${myOnlyEmployees[k]}</li>`);
  }
  document.write(`</ul>`);
  document.write(`<hr>`);
}
