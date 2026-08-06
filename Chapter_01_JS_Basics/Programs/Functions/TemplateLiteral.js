//Template Literal

function greet(name)
{
    return `hello. ${name}`;
}

let op = greet("Santhosh");
console.log(op);


//same as above function
const greet1 = function(name)
{
    return `hello, ${name}`;
}

let subject = greet1("Pallavi");
console.log(subject);