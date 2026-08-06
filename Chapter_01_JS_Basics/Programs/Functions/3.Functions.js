//Types of Functions

//1. Function with no return type, no argument
//2. Function with return type, no argument
//3. Function with no return type, with argument
//4. Function with return type, with argument

//Function with no return type and no argument
function greet()
{
console.log("Hi");
}
greet();

//Function with argument and no return type
function getName(name)
{
console.log(name);
}

getName("Santhosh");
console.log("------------------------");
//Function without argument and with return type
function greet()
{
    console.log("Hi");
    return "hello";
}
let call = greet();
console.log(call);
console.log("-------------------------------");

//Function with arguments and with return type
function sum(a, b)
{
    return a+b;
}
let addition = sum(10, 20);
console.log(addition);