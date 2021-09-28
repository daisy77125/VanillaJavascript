// In JS, ['key' in obj] checks whether an object contains a key named 'key'

const anna = {
  name: "anna",
  age: undefined,
};

console.log("name" in anna); // true
console.log("age" in anna); // true
console.log("hobby" in anna); // false

// for ... in
for (let key in anna) {
  console.log(key);
}

// Object.keys(obj)
const keys = Object.keys(anna);
console.log(keys); // ['name', 'age']

// for ... of
for (let key of keys) {
  console.log(key);
}
