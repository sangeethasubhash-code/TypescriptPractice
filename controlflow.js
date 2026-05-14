"use strict";
let num2 = 10;
if (num2 > 0) {
    console.log("num1 is positive");
}
else if (num2 === 0) {
    console.log("num1 is zero");
}
else {
    console.log("number is not positive");
}
//switch
let weekdays = "wednesday";
switch (weekdays) {
    case "monday":
        console.log("firstday");
        break;
    case "tuesday":
        console.log("secondday");
        break;
    case "wednesday":
        console.log("thirdday");
        break;
    case "thursday":
        console.log("fourthday");
        break;
    case "friday":
        console.log("fifthday");
        break;
    default:
        console.log("Invalid day");
}
//for loop
console.log("for loop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
console.log("while loop");
let z = 0;
while (z < 8) {
    console.log(z);
    z++;
}
//do while loop
console.log("do while loop");
let str = "hi sangita";
do {
    console.log(str);
} while (false);
