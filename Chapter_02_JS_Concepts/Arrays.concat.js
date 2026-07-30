let a = [1, 3];
let b = [5, 9];
let c = a.concat(b);
console.log(c);



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
