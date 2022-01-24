const element = document.querySelector('.my-element');

element.addEventListener('mouseover', () => {
  element.classList.add('animate__animated', 'animate__flip');
  // do something
});
