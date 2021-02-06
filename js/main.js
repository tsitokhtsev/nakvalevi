// menu
const menuBtn = document.querySelector('.logo-menu')
const navbar = document.querySelector('.navbar')
const article = document.querySelector('.article')


menuBtn.addEventListener('click', function () {
    console.log(window.pageYOffset);
    menuBtn.classList.toggle('logo-menu-close')
    navbar.classList.toggle('navbar-show')
    if (window.pageYOffset == 0 && menuBtn.classList.contains('logo-menu-close')) {
        article.classList.add('article-show')
    }
    else {
        article.classList.remove('article-show')
    }
})

window.addEventListener('scroll', function(){
    if (window.pageYOffset && menuBtn.classList.contains('logo-menu-close')){
        article.classList.add('article-show')
    }
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