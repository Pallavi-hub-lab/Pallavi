let arr = [10, 10, 20, 30, 40, 50];
console.log(arr); // Output: [10, 10, 20, 30, 40, 50]   
console.log(arr.length); // Output: 6
console.log(arr[4]); // Output: 40

let testResults = ["pass", "fail", "pass", "fail"];
console.log(testResults); // Output: ["pass", "fail", "pass", "fail"]
console.log(testResults.length); // Output: 4
let mixed = [10, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];




let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
let scores = new Array(3); // creates an array of length 3
let scores2 = new Array(10, 20, 30); // creates an array with elements 10, 20, 30
let numbers = new Array(100, 200, 300); // creates an array with elements 100, 200, 300
let test = Array.of(10, 20, 30, 40); // creates an array with elements 10, 20, 30, 40
console.log(test.length); // Output: 4


let chars = Array.from("Hello"); // creates an array from a string
console.log(chars); // Output: ["H", "e", "l", "l", "o"]
