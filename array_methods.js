const numbers = [0, 11, 22, 33, 44, 55];

// numbers.forEach((number) => console.log(number));

/*
const largerThan20 = numbers.filter((n) => n > 20);
console.log(largerThan20);
*/

/*
const newArray = numbers.map((n) => {
  return { name: "name", age: n };
});
console.log(newArray);
*/

const arr = [1, 30, 4, 21, 100000];
arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
});
console.log(arr); // in sorted order

const sum = numbers.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(sum === 0 + 11 + 22 + 33 + 44 + 55);
