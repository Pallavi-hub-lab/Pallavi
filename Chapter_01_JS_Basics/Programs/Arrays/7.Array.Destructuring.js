//let [first, second, third] = [1, 2, 3]; // Destructuring an array into variables
//console.log(first); // Output: 1
//console.log(second); // Output: 2
//console.log(third); // Output: 3



let [first, second, ...third] = [1, 2, 3, 4, 5]; // Destructuring an array into variables with rest operator
console.log(first);
console.log(second);
console.log(third);

