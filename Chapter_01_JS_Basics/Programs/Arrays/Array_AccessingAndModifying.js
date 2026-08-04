let status = ["pass", "fail", "pass", "fail"];
console.log(status);
console.log(status.length); // Output: 4
console.log(status[0]); // Output: pass
console.log(status[1]); // Output: fail
console.log(status[3]); // Output: fail


//Modifying the array
status[0] = "fail";
console.log(status); // Output: ["fail", "fail", "pass", "fail"]
console.log(status.length); // Output: 4


let arr = [10, 20, 30, 40, 50];
console.log(arr);
//Add to End
arr.push(60);
console.log(arr); // Output: [10, 20, 30, 40, 50, 60]
//Remove from End
arr.pop();
console.log(arr); // Output: [10, 20, 30, 40, 50]

//Add to Beginning
arr.unshift(5);
console.log(arr); // Output: [5, 10, 20, 30, 40, 50]
//Remove from Beginning
arr.shift();
console.log(arr); // Output: [10, 20, 30, 40, 50]

arr.splice(2, 1); // removes 1 element at index 2
console.log(arr); // Output: [10, 20, 40, 50]
arr.splice
console.log(arr); // Output: [10, 20, 40, 50]


let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
browsers.sort();
console.log(browsers);  

browsers.reverse();
console.log(browsers);
console.log(browsers.length); // Output: 5

let removed = browsers.shift(); // removes 1 element at index 0
console.log(removed); // Output: Chrome
console.log(browsers); // Output: ["Firefox", "Safari", "Edge", "Opera"]

for(let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);

    if(browsers[i] === "Edge") {
        console.log("Edge is found at index " + i);
    }
}