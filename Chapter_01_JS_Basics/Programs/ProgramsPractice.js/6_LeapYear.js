//A leap year is a year that is divisible by 4, but not divisible by 100, unless it is also divisible by 400.   


let year = 2032;

if(year % 4 === 0)
{
    if(year % 100 === 0)
        {
            if(year %  400 === 0)
                console.log("leap year");
        }                
        
            console.log("Not a leap leap");
}
else
{
console.log("Leap year");

}
