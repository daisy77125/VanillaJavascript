// run the script in nodejs

function displayThis() {
  console.log(this);
}

console.log(this); // {}
displayThis(); // the global object

/*
if run in browser, both this will be the window object
*/
