const barElement = document.querySelector('.fa-bars');
const menuElement = document.querySelector('.menu');

barElement.addEventListener('click', () => {
    menuElement.classList.toggle('show-menu');
});