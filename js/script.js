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

// divide first param by second param
// take in two numbers 
// return product or '#DIV/0!'
function divide(a, b) {
  return (b === 0) ? '#DIV/0!' : a / b;
}

// perform operation on two numbers with given operator
// take in one operator and two numbers 
// return result 
function operate(a, b, operator) {
  return operator(a, b);
}


// store the exact values on display as array 
let displayValue = [];

// onClick eventListener for buttons that display value 
const displayButtons = document.querySelectorAll('.display-button');
displayButtons.forEach((button) => {
  button.addEventListener('click', createDisplayValue);
});

// create dipslay values from input and store it in an array 
// take in no parameters 
// return no results 
function createDisplayValue() {
  let calculation = document.querySelector('#calculation');
  
  let isOperandButton = this.classList.contains('operand-button');
  let isOperandPrior = calculation.textContent.slice(-1) === ' ';
  
  let input = this.value;
  if (isOperandButton && displayValue.length === 0) {
    return;
  } else if (isOperandButton && isOperandPrior) {
    calculation.textContent = calculation.textContent.slice(0, -3) + ' ' + input + ' ';
  } else if (isOperandButton) {
    calculation.textContent += ' ' + input + ' ';
  } else {
    calculation.textContent += input;
  }

  displayValue = [calculation.textContent];
}


