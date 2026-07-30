let fruits = ["Banana", "Cherry", "Orange", "Apple"];
fruits.sort();
console.log(fruits);


//Natural Sorting
//here it is taken as string

let num = [4, 52, 9, 47];
console.log(num.sort());

//sorting in ascending and descending order

let nums = [5, 9, 7, 36, 78, 10];
console.log(nums.sort((a,b) => a-b));
console.log(nums.sort((a,b) => b-a));
console.log(nums.reverse());