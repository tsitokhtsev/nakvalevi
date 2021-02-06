// menu
const menuBtn = document.querySelector('.logo-menu')
const navbar = document.querySelector('.navbar')
const article = document.querySelector('.article')

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('logo-menu-close')
    navbar.classList.toggle('navbar-show')
    article.classList.toggle('article-show')
})

// back-to-top button
const backToTopBtn = document.querySelector('.back-to-top')

document.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = window.pageYOffset
    if (scrollTop > clientHeight * 0.4) {
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