// title animation on home page
const hero = document.querySelector('.home-hero')
const heroTitle = document.querySelector('.home-hero-title')
const heroTitleWords = document.getElementsByClassName('home-hero-title-word')
const heroContainerBottom = document.querySelector('.home-hero-container-bottom')

console.log(heroTitle.getBoundingClientRect().height);

if (window.innerWidth < 480) {
    let heroHight = window.innerHeight - 90
    hero.style.height = `${heroHight}px`
    heroContainerBottom.style.height = `${heroHight - 225}px`
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