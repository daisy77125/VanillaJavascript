// spread operator usage in cloning objects & arrays

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let anna = new Person("anna", 10);
let anna2 = { ...anna };

let arr = [0, 1, 2, 3, 4];
let arr2 = [...arr];
let arr3 = [...arr, 100, ...arr]; // [0, 1, 2, 3, 4, 100, 0, 1, 2, 3, 4]
