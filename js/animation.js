// change scale on hover 
const styleAllButtons = document.querySelectorAll('button');
styleAllButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering'));
});

// add red to clear buttons 
const styleClearButtons = document.querySelectorAll('.clear-button');
styleClearButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-clear-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-clear-button'));
});

// add orange to operator buttons 
const styleOperatorButtons = document.querySelectorAll('.operator-button');
styleOperatorButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-operator-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-operator-button'));
});

// add orange to equal button
const styleEqualButton = document.querySelector('.equal-button');
styleEqualButton.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-operator-button'));
styleEqualButton.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-operator-button'));

// add lighter grey to number buttons 
const styleNumberButtons = document.querySelectorAll('.number-button');
styleNumberButtons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-number-button'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-number-button'));
});