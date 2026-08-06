const greet = function(name)
{
    return `hello,  ${name}`;
}

console.log(greet("Santhosh"));


//Arrow Function

const greet1 = (sname) => `hello, ${sname}`;

console.log(greet1("Sarala"));


//Multiline Arrow Function

const getResult = (score) =>
{
    if(score>70) return "Pass"
    return "Fail";
}

console.log(getResult(30));