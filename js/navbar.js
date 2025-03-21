const burger = document.getElementById('burgerMenu');
const navbarLinks = document.getElementById('navbarLinks');

burger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});