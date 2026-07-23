// Multiple condition

let age = 26;
// age > 18 - he will go to goa, else not
// drink > 25 - yes, else no

let is_pramod_enjoy = age > 18? (age > 26 ? "Drink" : "No") : false;
console.log('Can pramid drink ?  : ${is_pramod_enjoy}')

//2. 

let statusCode = 404;
let category = 
statusCode < 300 ? "Success":
statusCode < 400 ? "Redirect":
statusCode < 500 ? "Client Error" : "Server Error";
console.log('Status ${statusCode} : ${category}');


//3. 

let temp = 35;
let feel = (temp >= 40) ? "very Hot" : 
            (temp >= 30) ? "Hot":
            (temp >= 20) ? "Warm":
            (temp >= 10) ? "cool" : "cold";
console.log("Temperature :", temp, "/feel :", feel);