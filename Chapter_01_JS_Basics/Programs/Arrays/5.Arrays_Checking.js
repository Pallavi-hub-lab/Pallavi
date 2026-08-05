
//Checking Arrays

//Check if something is an Array

let result = Array.isArray([1, 2, 3]); // true
console.log(result);
let result1 = Array.isArray({a: 1, b: 2}); // false
console.log(result1);
let result2 = Array.isArray("a"); // false
console.log(result2);   


//every and some    
[80, 90, 100].every(s => s > 50); // true

[10, 20, 90].some(s => s > 50); // true
