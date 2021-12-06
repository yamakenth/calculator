// store current display value 
let displayValue = '';

// onClick eventListener for operands
const operandsButton = document.querySelectorAll('.operands');
operandsButton.forEach((button) => {
  button.addEventListener('click', displayInput);
});

// add two numbers 
// take in two numbers 
// return sum
function add(a, b) {
  return a + b;
}

// subtract second param from first param 
// take in two numbers 
// return difference 
function subtract(a, b) {
  return a - b;
}

// mulitply two numbers 
// take in two numbers 
// return product 
function multiply(a, b) {
  return a * b;
}

// divide first param by second param (check for div 0 later)
// take in two numbers 
// return product
function divide(a, b) {
  return a / b;
}

// perform operation on two numbers with given operator
// take in one operator and two numbers 
// return result 
function operate(a, b, operator) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  }

  return;
}

// display input on page 
// take in no parameters 
// return no results 
function displayInput() {
  const resultField = document.querySelector('#result');
  const firstIsZero = resultField.textContent.length === 1 && resultField.textContent === '0';
  const includesDot = resultField.textContent.includes('.');
  const currInput = this.value;

  // if first input is a dot then append to the zero otherwise overwrite 
  if (firstIsZero && currInput !== '.') {
    resultField.textContent = '';
  }

  // disale dot input if a dot already exists
  if (includesDot && currInput === '.') {
    return;
  }
  
  resultField.textContent += currInput;
}