// title animation on home page
const hero = document.querySelector('.home-hero')
const heroTitleWords = document.getElementsByClassName('home-hero-title-word')

if (window.innerWidth < 480) {
    hero.style.height = `${window.innerHeight - 90}px`
} else {
    hero.style.height = `${window.innerHeight - 190}px`
}

setTimeout(function () {
    heroTitleWords[0].classList.add('home-hero-title-word-show')
}, 500);
setTimeout(function () {
    heroTitleWords[1].classList.add('home-hero-title-word-show')
}, 600)
setTimeout(function () {
    heroTitleWords[2].classList.add('home-hero-title-word-show')
}, 700)