# Assignment 1
```
let day = "   friday  ";

day = day.trim();
let conacat2 = day.substring(1);
let conacat1 = day[0].toUpperCase();
let userInput = conacat1 + conacat2;

switch (userInput){
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log("No Appointments Available");
    break;
  case 'Monday':
  case 'Thursday':
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case 'Tuesday':
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case 'Wednesday':
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
```