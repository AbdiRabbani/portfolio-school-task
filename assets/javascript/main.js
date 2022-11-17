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

window.addEventListener('scroll', e => {
    if(window.scrollY > 70) {
        navHeader.classList.add('on-scroll')
        navHeader.classList.add('navbar-dark')
        floating.classList.add('floating-button-on-scroll')
    }else {
        navHeader.classList.remove('on-scroll')
        navHeader.classList.remove('navbar-dark')
        floating.classList.remove('floating-button-on-scroll')
    }
});