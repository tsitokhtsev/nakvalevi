// title animation on home page
const heroTitleWords = document.getElementsByClassName('home-hero-title-word')

setTimeout(function () {
    heroTitleWords[0].classList.add('home-hero-title-word-show')
}, 500);
setTimeout(function () {
    heroTitleWords[1].classList.add('home-hero-title-word-show')
}, 600)
setTimeout(function () {
    heroTitleWords[2].classList.add('home-hero-title-word-show')
}, 700)