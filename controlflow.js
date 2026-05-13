
let num1 = 10;
if (num1 > 0) {
    console.log("num1 is positive");
}
else if (num1 === 0) {
    console.log("num1 is zero");
}
else {
    console.log("num1 is not positive");
}
//switch
let weekday = "wednesday";
switch (weekday) {
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
let j = 0;
while (j < 8) {
    console.log(j);
    j++;
}
//do while loop
console.log("do while loop");
let s = "hi sangita";
do {
    console.log(s);
} while (false);
