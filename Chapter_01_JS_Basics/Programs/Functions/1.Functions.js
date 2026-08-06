//Without Functions - repeated logic

let scores = 80;
let result1 = scores >= 50 ? "Pass": "Fail";
console.log(result1);

let scores1 = 50;
let result2 = scores1 >= 35 ? "Pass" : "Fail";
console.log(result2);


//With function
function getResult(score)
{
return score >= 35 ? "Pass" : "Fail";
}

console.log(getResult(25));



function getResult1(scoress)
{
    return scores >= 90? "Distinction" : "Not an Distinction";
}

console.log(getResult(97));