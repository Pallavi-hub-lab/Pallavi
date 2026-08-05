//shallow copy 
//original array will not change if you change the copied array

let original =  [1, 2, 3, 4, 5];
let copy1 = [...original]; // Copying an array using spread operator

console.log(copy1); // [1, 2, 3, 4, 5]
console.log(original);  

let copy2 = original.slice(); // Copying an array using slice method
console.log(copy2);


let copy3 = Array.from(original); // Copying an array using Array.from method   
console.log(copy3);

let copy4 = original.concat(); // Copying an array using concat method
console.log(copy4);

copy4 = push(99); // Adding an element to the copied array
console.log(copy4);

//Deep copy // never to use
let deep_copy_array = original;
original.push(99); // Adding an element to the original array
console.log(original);
console.log(deep_copy_array); // [1, 2, 3, 4, 5] // original array will not change if you change the copied array   