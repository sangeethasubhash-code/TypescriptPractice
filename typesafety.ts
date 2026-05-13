//type safety - it helps to catch errors at 
//compile time rather than runtime

let namee: string = "Sangita" //in ts we can specify the type of variable
let agee: number = 25
let isStudentss: boolean = true

//if we try to assign a value of different type to the variable, it will give an error

let z: string ='hello' 
z="28"
 
const pis: number = 3.14

var v: string = "Hi Sangita"

//modern ts use let and const instead of var

console.log(namee)
console.log(agee)
console.log(isStudentss)
console.log(z)
console.log(pis)
console.log(v)