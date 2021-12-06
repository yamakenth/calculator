const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  // change scale
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering'));
  // change color 
  if (button.className === 'clear-button') {
    button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-clear-button'));
    button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-clear-button'));
  } else if (button.className === 'operand-button') {
    button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering-operand-button'));
    button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering-operand-button'));
  }
});