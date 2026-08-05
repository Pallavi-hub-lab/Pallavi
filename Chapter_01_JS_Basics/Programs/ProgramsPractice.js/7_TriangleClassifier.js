let a = 60, b = 90, c = 20;

if(a === b && b === c)
{
    console.log("Equilateral Triangle");
}
else if(a === b || b === c || c === a)
{
    console.log("Isoceles Triangle");
}
else
{
    console.log("Scalene Triangle");
}