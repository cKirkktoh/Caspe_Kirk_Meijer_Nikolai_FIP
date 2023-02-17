const hamburger = document.querySelector('#hamburger');
const mainNav = document.querySelector('#main-nav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('nav-hidden');
});
