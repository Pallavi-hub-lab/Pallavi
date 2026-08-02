let results = ["pass", "fail", "pass", "fail"];

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = results.indexOf("pass");
console.log(index); // Output: 0

index = results.indexOf("fail");
console.log(index); // Output: 1

//lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
index = results.lastIndexOf("pass");
console.log(index); // Output: 2

index = results.lastIndexOf("fail");
console.log(index); // Output: 3    

let nums = [10, 20, 30, 40, 50];
let result = nums.find(x => x < 20);
console.log(result); // Output: 10

result = nums.find(x => x > 30);
console.log(result); // Output: 40  

//findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
let indexResult = nums.findIndex(x => x < 20);
console.log(indexResult); // Output: 0

nums.findLastIndex(x => x > 30); // Output: 4
nums.findLastIndex(x => x < 20); // Output: 0

