function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function argFunct(a,b,obs){
    return obs(a,b)
}
console.log(argFunct(1, 2,divide))