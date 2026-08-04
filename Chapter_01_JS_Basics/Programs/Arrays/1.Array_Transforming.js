
// map array is used to transform the array into another array. 
// It takes a function as an argument and applies that function to each element of the array, returning a new array with the transformed values.   

let scores = [45, 96, 12, 36, 33];
let grade = scores.map(s => s > 45? "Pass" : "Fail");
console.log(grade);

// Filter
let passing = scores.filter(s => s > 22);
console.log(passing);