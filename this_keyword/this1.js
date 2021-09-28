function displayThis() {
  console.log(this);
}

const obj = {
  title: "TITLE",
  method1: function () {
    console.log(this);
  },
  method2: function () {
    displayThis();
  },
};

obj.method1(); // obj
obj.method2(); // window in browser, global in node
