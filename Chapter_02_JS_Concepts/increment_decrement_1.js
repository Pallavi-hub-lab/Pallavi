//Pre-increment
let a = 10;
let b = ++a;
console.log(b);

//Post-increment
let a = 10;
let b = a++;
console.log(b);

//Advance increment
let a = 10;
console.log(++a +a);
console(a);

let a = 10;
console.log(++a + a + a++);
console.log(a);

let i = 1;
let result = i++ + ++i;
console.log(result, i);

let a = 10;
console.log(++a + ++a);
console.log(a);

let a = 34;
let result = a++;
console.log(result);
console.log(a);

let a = 100;
console.log(a++ + ++a + a++ + ++a);

let a = 37;
console.log(--a + a--);
console.log(a);

let a = 5;
let b = a-- + --a;
console.log(b, a);

let i = 1;
let r = i++ > i? i++ : ++i;
console.log(r, i);

