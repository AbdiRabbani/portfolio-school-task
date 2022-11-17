let idx = 0
const textArray = [
    "Portfolio",
    "Abdi Rabbani",
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1000);

const navHeader = document.querySelector('.navbar')
const floating = document.querySelector('.floating-button')
const icon = document.querySelector('.one')
const icon2 = document.querySelector('.two')
const icon3 = document.querySelector('.three')


window.addEventListener('scroll', e => {
    if (window.scrollY > 70) {
        icon.style.left = '-50%';
        icon2.style.right = '-50%';
        icon3.style.right = '-50%';
        navHeader.classList.add('on-scroll')
        navHeader.classList.add('navbar-dark')
        floating.classList.add('floating-button-on-scroll')
    } else {
        icon.style.left = '20vw';
        icon2.style.right = '20vw';
        icon3.style.right = '35vw';
        navHeader.classList.remove('on-scroll')
        navHeader.classList.remove('navbar-dark')
        floating.classList.remove('floating-button-on-scroll')
    }
});