
//function in ts - it is a block of code that performs a specific task 
//and can be reused multiple times in a program
//function with no parameters and no return type
function myfunction() {
    console.log("hi sangita");
    console.log("Function with no parameters and no return type");
}
myfunction();
//function with parameters with return type
function greet(name, age) {
    console.log("hi" + name + "your age is" + age);
}
greet("sangita", 25);
function add(a, b) {
    return (a + b);
}
let result = add(15, 18);
console.log(" the sum is" + result);
