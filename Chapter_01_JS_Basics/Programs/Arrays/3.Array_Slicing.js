let arr = [1, 2, 3, 4, 5];

// slice(start, end)
// ✔ Returns a NEW array.
// ✔ Does NOT modify (mutate) the original array.
// ✔ start index is included.
// ✔ end index is excluded.
// ✔ Array indexing starts from 0.
// ✔ If 'end' is omitted, it returns elements from 'start' to the end of the array.

console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr);