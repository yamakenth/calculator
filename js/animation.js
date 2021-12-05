const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('mouseenter', (e) => e.target.classList.add('hovering'));
  button.addEventListener('mouseleave', (e) => e.target.classList.remove('hovering'));
});