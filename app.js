const nav = document.querySelector('nav');
const openBar = document.querySelector('.open__menu-bar');
const one = document.querySelector('.bar__1');
const two = document.querySelector('.bar__2');
const three = document.querySelector('.bar__3');
const menuItem = document.querySelector('.menu__item');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrollY');
    } else {
        nav.classList.remove('scrollY');
    }
})

openBar.addEventListener('click', () => {
    one.classList.toggle('flat');
    two.classList.toggle('disappear');
    three.classList.toggle('flip');
    menuItem.classList.toggle('show')
})

window.addEventListener('click', () => {
    if (window.innerWidth <= 754) {
        menuItem.addEventListener('click', () => {
            one.classList.remove('flat');
            two.classList.remove('disappear');
            three.classList.remove('flip');
            menuItem.classList.remove('show')
        })
    }
})