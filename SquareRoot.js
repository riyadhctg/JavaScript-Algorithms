//Find square root of a Number

var squareRoot = function (number) {

  if (number < 0)
    return -1;
  if (number === 0 || number === 1) {
    return number;
  }

  var root = 0.0;
  var precision = 0.01;
  var square = root;

  while (square < number) {
    root += precision;
    square = root*root;
  }

  return root;

}

console.log(squareRoot(64));
