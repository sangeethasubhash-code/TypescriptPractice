//function in ts - it is a block of code that performs a specific task 
//and can be reused multiple times in a program

//function with no parameters and no return type
function myfunction():void {
    console.log("hi sangita");
    console.log("Function with no parameters and no return type");
}
myfunction();

//function with parameters and no return type
function greet(name:String,age:number){
    console.log("hi"+name+"your age is"+age);
}
greet("sangita",25);

//function with parameters and return type

function add(a:number,b:number):number{
return (a+b)
}

let result: number =add(15,18);
console.log(" the sum is"+result);

//Arrow function without parameter
let dance:()=>void=()=>{
    console.log("Dancing is fun- using arrow function")
}
dance();

//arrow function with parameter

let sum=(a:number,b:number):number=> a+b;
console.log(add(2,3));