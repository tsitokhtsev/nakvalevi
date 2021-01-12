// menu
const menuBtn = document.querySelector('.logo-menu')
const navbar = document.querySelector('.navbar')

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('logo-menu-close')
    navbar.classList.toggle('navbar-show')
})

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

// back-to-top button
const backToTopBtn = document.querySelector('.back-to-top')

document.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = window.pageYOffset
    if (scrollTop > clientHeight) {
        backToTopBtn.classList.add("show-btn")
    } else {
        backToTopBtn.classList.remove("show-btn")
    }
})

backToTopBtn.addEventListener('click', function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// timeline anchors
const anchors = document.querySelector('.navbar-anchors')

setTimeout(function () {
    anchors.classList.add('navbar-anchors-show')
}, 500);
setTimeout(function () {
    anchors.classList.remove('navbar-anchors-show')
}, 1500);

navbar.addEventListener('mouseover', function () {
    anchors.classList.add('navbar-anchors-show')
})
navbar.addEventListener('mouseout', function () {
    anchors.classList.remove('navbar-anchors-show')
})

anchors.addEventListener('mouseover', function () {
    anchors.classList.add('navbar-anchors-show')
})
anchors.addEventListener('mouseout', function () {
    anchors.classList.remove('navbar-anchors-show')
})

