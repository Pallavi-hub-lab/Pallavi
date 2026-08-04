let fruits = ["Banana", "Cherry", "Orange", "Apple"];
fruits.sort();
console.log(fruits);


//Natural Sorting
//here it is taken as string
// so it is sorted in alphabetical order
let num = [4, 52, 9, 47];
console.log(num.sort()); //['4', '47', '52', '9']

//sorting in ascending and descending order

let nums = [5, 9, 7, 36, 78, 10];
console.log(nums.sort((a,b) => a-b));//ascending order  

console.log(nums.reverse());//reverse the array

console.log(nums.sort((a,b) => b-a));//descending order
console.log(nums.reverse());//reverse the array