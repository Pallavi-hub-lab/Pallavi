// Arithmetic Operators
let x = 10;
x = "John";
console.log(x); // Output: John

let y = 10;
y += 5; // y = y + 5
console.log(y); // Output: 15


//Arithmetic Operators
// +, -, *, /, %, ++, --

let a = 10;
let b = 3;
let sum = a + b; // addition
let subtraction = a - b; // subtraction
let multiplication = a * b; // multiplication
let division = a / b; // division
let modulus = a % b; // modulus (remainder)

console.log("Sum:", sum); // Output: Sum: 13
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus); // Output: Modulus: 1


// Exponential 
let base = 2;
let exponent = 3;
let power = base ** exponent; // exponentiation
console.log("Power:", power); // Output: Power: 8

// Comparison operators
// ==, ===, !=, !==, >, <, >=, <=

// == (loose comparison) checks for equality of values, but not types
let num1 = 5;
let str1 = "5";
console.log(num1 == str1); // Output: true      

// === (strict comparison) checks for equality of values and types
console.log(num1 === str1); // Output: false        

console.log(3 > 4); // Output: false
console.log(3 < 4); // Output: true
console.log(3 >= 3); // Output: true
console.log(3 <= 2); // Output: false
console.log(3 != 4); // Output: true
console.log(3 !== "3"); // Output: true 
console.log(3 !== 3); // Output: false

console.log(5 == "5"); // Output: true
console.log(5 === "5"); // Output: false    


// === stict check we will check for both the datatype and value
// == loose check we will check either value or datatype

console.log(3 == 4); // Output: false   
console.log(4 == 4); // Output: true
console.log(3 == "4"); // Output: false
console.log(5!="5"); // Output: false
console.log(4 == "4"); // Output: true

console.log(5!="5"); // Output: false - loose datatype or value
console.log(5!=="5"); // Output: true - strict datatype and value
console.log(5!==="5"); // Output: false - strict datatype and value

console.log(5 == 5); // Output: true
console.log(5 === 5); // Output: true


// Logicl operators
// &&, ||, !

let a = true;
let b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false

// Confusing comparison part-1

console.log(" " == 0); //true
console.log(" " === 0); // false
console.log("0" == 0); //true
console.log('0' === 0); //false
console.log(" " === "0"); //false
console.log("" === "0"); 

// Confusing comparison part-2

// ----------- null and undefined ------------
console.log(null == undefined); //true
console.log(null === undefined); 
console.log(null == 0);
console.log(null >= 0); 
console.log(null > 0);




