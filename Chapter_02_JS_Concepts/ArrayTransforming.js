let scores = [45, 96, 12, 36, 33];
let grade = scores.map(s => s > 45? "Pass" : "Fail");
console.log(grade);

// Filter
let passing = scores.filter(s => s > 22);
console.log(passing);