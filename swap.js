// swap two numbers without using a temporary variable

let x = 10,
  y = 5;

// fist method: using arithmetic operation
x = x + y;
y = x - y;
x = x - y;

// second method: using bitwise XOR
x = x ^ y; // x now becomes 15 (1111)
y = x ^ y; // y becomes 10 (1010)
x = x ^ y; // x becomes 5 (0101)
