//   ## Ternary (Conditional) operator
// condition, either this or either that

let age = 20;
let is_person_go_to_goa = age > 18? "yes" : "no";
console.log(is_person_go_to_goa);

// condition ? value(if true) : value (if false);

let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https//api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");


let responseTime = 850;
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "within SLA" : "SLA breached";
console.log('Response: ${responseTime}ms - ${slaStatus}');
console.log("what is the sla time :  ${sla}");


let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);




