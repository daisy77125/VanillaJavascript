// Logical Operator; Truthy & Falsy

/*
Falsy:

false
0
''
undefined
null
NaN
*/

console.log(false || "M"); // 'M'

console.log(false || 0); // 0
console.log(0 || false); // false

// short-circuiting
console.log(false || 0 || "M"); // 'M'
console.log(false || "M" || 5); // 'M'

// real-world example
let selectedColor = "red";
let defaultColor = "blue";
let color = selectedColor || defaultColor;
