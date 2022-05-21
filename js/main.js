const menuToggle = document.querySelector('.toggle');
const header = document.querySelector('.header')
const showcase = document.querySelector('.showcase');
const icon = document.querySelector('.logo');


menuToggle.addEventListener('click', () => {
  header.classList.toggle('active');
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  icon.classList.toggle('active');
});








