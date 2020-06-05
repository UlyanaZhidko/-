const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})



const buttonShare = document.querySelector('.button-share');
const arrow = document.querySelector('.arrow');

buttonShare.addEventListener('click', function () {
    arrow.classList.toggle('active');
})
