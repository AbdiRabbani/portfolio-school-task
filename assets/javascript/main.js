let idx = 0
const textArray = [
    "Portfolio",
    "Abdi Rabbani",
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1000);

const navHeader = document.querySelector('.navbar')

window.addEventListener('scroll', e => {
    if(window.scrollY > 0) {
        navHeader.classList.add('on-scroll')
        navHeader.classList.add('navbar-dark')
    }else {
        navHeader.classList.remove('on-scroll')
        navHeader.classList.remove('navbar-dark')
    }
})