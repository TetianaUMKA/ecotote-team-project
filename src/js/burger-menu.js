const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.burger-menu-close');
const burgerOverlay = document.querySelector('.burger-menu-overlay');
const burgerLinks = document.querySelectorAll('.burger-nav-link');

openMenuBtn.addEventListener('click', () => {
  burgerOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  burgerOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
});

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
