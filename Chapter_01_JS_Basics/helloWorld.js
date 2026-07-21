// Topic : All Number types in javascript

/* In javascript, numbers are Always of type "number" except for BigInt type 
There is no separate type for integers, floats, or doubles. All numbers are represented as 64-bit floating point values (IEEE 754 standard).
*/

// 1. Integer literals
// Decimal integer literal (base 10) - most common 

let decimal = 42; // decimal literal
console.log("Decimal:", decimal, "Type:", typeof decimal); // Output: Decimal: 42 Type: number

// Binay (base 2) - starting with 0b or 0B
let binary = 0b101010; // binary literal
console.log("Binary:", binary, "Type:", typeof binary); // Output: Binary: 42 Type: number

// octal (base 8) - starting with 0o or 0O
let octal = 0o52; // octal literal
console.log("Octal:", octal, "Type:", typeof octal); // Output: Octal: 42 Type: number

// Hexadecimal (base 16) - starting with 0x or 0X   
let hexadecimal = 0x2A; // hexadecimal literal
console.log("Hexadecimal:", hexadecimal, "Type:", typeof hexadecimal); // Output: Hexadecimal: 42 Type: number


// 2. Floating-point literals
// Floating-point literals can be written with or without a decimal point
let float1 = 3.14; // floating-point literal
console.log("Float1:", float1, "Type:", typeof float1); // Output: Float1: 3.14 Type: number

let float2 = 2.5e3; // exponential notation
console.log("Float2:", float2, "Type:", typeof float2); // Output: Float2: 2500 Type: number

let float3 = 1.2e-3; // exponential notation
console.log("Float3:", float3, "Type:", typeof float3); // Output: Float3: 0.0012 Type: number          

let float4 = -0.5; // negative floating-point literal
console.log("Float4:", float4, "Type:", typeof float4); // Output: Float4: -0.5 Type: number        

let float5 = .5; // floating-point literal without leading digit
console.log("Float5:", float5, "Type:", typeof float5); // Output: Float5: 0.5 Type: number     

let float6 = 5.; // floating-point literal without trailing digit
console.log("Float6:", float6, "Type:", typeof float6); // Output: Float6: 5 Type: number


3. exponential notation
// Exponential notation is a way to represent very large or very small numbers using powers of 10
let million = 1e6; // 1 million
console.log("Million:", million, "Type:", typeof million); // Output: Million: 1000000 Type: number     

let tiny = 1e-6; // 0.000001
console.log("Tiny:", tiny, "Type:", typeof tiny); // Output: Tiny: 0.000001 Type: number        

let large = 1.23e+8; // 123,000,000
console.log("Large:", large, "Type:", typeof large); // Output: Large: 123000000 Type: number       
