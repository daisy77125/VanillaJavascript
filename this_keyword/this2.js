function displayThis() {
  console.log(this);
}

console.log(this); // {} in node, window in browser
displayThis(); // global in node, window in browser
