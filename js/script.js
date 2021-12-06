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


// onClick eventListener for buttons
const inputButtons = document.querySelectorAll('button');
inputButtons.forEach((button) => {
  if (button.className !== 'clear-button') {
    button.addEventListener('click', createDisplayValue);
  }
  
});

// create dipslay values from input 
// take in no parameters 
// return no results 
function createDisplayValue() {
  let calculation = document.querySelector('#calculation');
  let isEqualButton = this.classList.contains('equal-button');
  let isOperandButton = this.classList.contains('operand-button');
  let isOperandPrior = calculation.textContent.slice(-1) === ' ';
  
  let input = this.value;
  if (isEqualButton) {
    return;
  } else if (isOperandButton && isOperandPrior) {
    calculation.textContent = calculation.textContent.slice(0, -3) + ' ' + input + ' ';
  } else if (isOperandButton) {
    calculation.textContent += ' ' + input + ' ';
  } else {
    calculation.textContent += input;
  }

}