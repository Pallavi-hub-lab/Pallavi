let a = [1, 3];
let b = [5, 9];
let c = a.concat(b);
console.log(c);


//More modern way to concat arrays is using the spread operator
let d = [...a, ...b];
console.log(d);

//Join array elements into a string 
//converting array into big string

let s = ["Apple", "Banana", "Mango"].join(" | ");
console.log(s);
