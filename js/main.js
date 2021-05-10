/* Menu */
const menuBtn = document.querySelector('.logo-menu-colored')
const navbar = document.querySelector('.navbar')
const article = document.querySelector('.article')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('logo-menu-colored-close')
    navbar.classList.toggle('navbar-show')
    if (window.pageYOffset == 0 && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
    else {
        article.classList.remove('article-show')
    }
}

window.addEventListener('scroll', function () {
    if (window.pageYOffset && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
})

/* Search */
let searchItems = []
fetch("/js/data.json", {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(data => data.json()).then(data => {
    searchItems = data

    const body = document.querySelector('.body')
    const search = document.querySelector('.search')
    const searchBtn = document.querySelector('.logo-search')
    const searchBtnCol = document.querySelector('.logo-search-colored')
    const searchInput = document.querySelector('.search-bar-input')
    const searchClear = document.querySelector('.search-bar-clear')
    const searchItemsSection = document.querySelector('.search-section')
    const searchNoMatch = document.querySelector('.search-section-nomatch')

    searchBtn.onclick = () => searchShow()
    searchBtnCol.onclick = () => searchShow()

    searchShow = () => {
        if (window.pageYOffset < 65 && window.innerWidth > 480) {
            document.documentElement.scrollTo({
                top: 65,
                behavior: "smooth"
            })
        }

        search.classList.toggle('search-show')

        if (window.innerWidth < 480) {
            search.style.top = '60px'
            search.style.height = `${window.innerHeight - 60}px`
        } else {
            search.style.top = '45px'
            search.style.height = `${window.innerHeight - 45}px`
            body.classList.toggle('stop-scrolling')
        }

        searchInput.focus()
    }

    searchInput.oninput = function () {
        let text = this.value.trim()

        let displaySearchItems = []
        searchItems.forEach(period => period.forEach(author => author.writings.map(writing => {
            if (writing.name.includes(text) || author.name.includes(text) || author.surname.includes(text)) {
                displaySearchItems.push(`<a href="${writing.link}">
    <p class="search-section-item">${writing.name} - ${author.name} ${author.surname}</p>
</a>`)
            }
        })))
        displaySearchItems = displaySearchItems.join('\n')
        searchItemsSection.innerHTML = displaySearchItems

        searchItemsSection.classList.add('search-section-show')
        let output = document.querySelectorAll('.search-section a')
        let outputItems = document.querySelectorAll('.search-section-item')

        if (text != '') {
            let noMatch = []
            outputItems.forEach(elem => {
                if (elem.innerText.search(text) == -1) {
                    elem.style.display = 'none'
                    noMatch.push(elem)
                }
            })
            if (output.length == noMatch.length) {
                let noMatchMsg = document.createElement('p')
                noMatchMsg.setAttribute('class', 'search-section-nomatch')
                searchItemsSection.hasChildNodes() ? searchItemsSection.insertBefore(noMatchMsg, searchItemsSection.lastChild.nextSibling) : searchItemsSection.insertBefore(noMatchMsg, searchItemsSection.lastChild)
                noMatchMsg.innerHTML = 'არაფერი მოიძებნა'
            }
        } else {
            outputItems.forEach(elem => {
                elem.style.display = 'none'
            })
            searchItemsSection.classList.remove('search-section-show')
        }
    }

    searchClear.onclick = () => {
        searchInput.value = ''
        searchItemsSection.classList.remove('search-section-show')
        searchInput.focus()
    }
})

// navbar link hover
const navbarLink = document.querySelectorAll('.navbar-link')

navbarLink.forEach(function (link) {
    link.addEventListener('mouseover', function () {
        link.querySelector('.navbar-link-title-hr').classList.add('navbar-link-title-hr-show')
    })
    link.addEventListener('mouseout', function () {
        link.querySelector('.navbar-link-title-hr').classList.remove('navbar-link-title-hr-show')
    })
})

/* Back-To-Top Button */
const backToTopBtn = document.querySelector('.back-to-top')

document.onscroll = () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = window.pageYOffset
    if (scrollTop > clientHeight * 0.4) {
        backToTopBtn.classList.add("show-btn")
    } else {
        backToTopBtn.classList.remove("show-btn")
    }
}

backToTopBtn.onclick = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

/* Footer */
const footer = document.querySelector('footer')
let copy = document.createElement('span')
copy.innerHTML = 'ნაკვალევი 2020'
footer.appendChild(copy)