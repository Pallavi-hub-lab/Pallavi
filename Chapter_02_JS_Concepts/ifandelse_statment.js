let age = 20;
if (age > 18)
{
console.log("Go Goa");
}
else{
console.log("Not goa");
}

let age = 27;
if(age > 18)
{
    console.log("Goa");
    if(age > 26)
    {
console.log("DRINK");    
}
else
{
    console.log("You can't Drink");
}
}
else
{
console.log("No Goa");
}




//
// Conditional Statements

let status = 200;
if (status === 200) {
  console.log("OK");
} else if (status === 404) {
  console.log("Not Found");
} else {
  console.log("Other");
}

let x = 5;
let y = x++;
console.log(y, x);

let day = 3;
switch (day) {
  case 1: console.log("Mon");
  case 2: console.log("Tue");
  case 3: console.log("Wed");
  case 4: console.log("Thu");
  default: console.log("Other");
}

let i = 0;
for (i = 0; i < 5; i++) 
    { 
        if (i === 3) 
        {
            break; 
        } 
        console.log(i);
    }
