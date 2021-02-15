// menu
const menuBtn = document.querySelector('.logo-menu-colored')
const navbar = document.querySelector('.navbar')
const article = document.querySelector('.article')


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('logo-menu-colored-close')
    navbar.classList.toggle('navbar-show')
    if (window.pageYOffset == 0 && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
    else {
        article.classList.remove('article-show')
    }
})

window.addEventListener('scroll', function () {
    if (window.pageYOffset && menuBtn.classList.contains('logo-menu-colored-close')) {
        article.classList.add('article-show')
    }
})

// search
const searchItems = [
    {
        name: "შუშანიკის წამება - იაკობ ცურტაველი",
        link: "/author/iakob-tsurtaveli/shushanikis-wameba/"
    },
    {
        name: "აბო თბილელის წამება - იოანე საბანისძე",
        link: "/author/ioane-sabanisdze/abo-tbilelis-wameba/"
    },
    {
        name: "გრიგოლ ხანძთელის ცხოვრება - გიორგი მერჩულე",
        link: "/author/giorgi-merchule/grigol-khandztelis-tskhovreba/"
    },
    {
        name: "ვეფხისტყაოსანი - შოთა რუსთაველი",
        link: "/author/shota-rustaveli/vepkhistkaosani/"
    },
    {
        name: "სიბრძნე სიცრუისა - სულხან-საბა ორბელიანი",
        link: "/author/sulkhan-saba-orbeliani/sibrdzne-sitsruisa/"
    },
    {
        name: "დავითიანი - დავით გურამიშვილი",
        link: "/author/davit-guramishvili/davitiani/"
    },
    {
        name: "გოგჩა - ალექსანდრე ჭავჭავაძე",
        link: "/author/aleqsandre-chavchavadze/gogcha/"
    },
    {
        name: "საღამო გამოსალმებისა - გრიგოლ ორბელიანი",
        link: "/author/grigol-orbeliani/sagamo-gamosalmebisa/"
    },
    {
        name: "პასუხი შვილთა - გრიგოლ ორბელიანი",
        link: "/author/grigol-orbeliani/pasukhi-shvilta/"
    },
    {
        name: "თამარ მეფის სახე ბეთანიის ეკლესიაში - გრიგოლ ორბელიანი",
        link: "/author/grigol-orbeliani/tamar-mepis-sakhe-betaniis-eklesiashi/"
    },
    {
        name: "შემოღამება მთაწმინდაზე - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/shemogameba-mtatsmindaze/"
    },
    {
        name: "ხმა იდუმალი - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/khma-idumali/"
    },
    {
        name: "ფიქრნი მტკვრის პირას - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/piqrni-mtkvris-piras/"
    },
    {
        name: "ბედი ქართლისა - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/bedi-qartlisa/"
    },
    {
        name: "არ უკიჟინო, სატრფოო... - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/ar-ukijino-satrpoo/"
    },
    {
        name: "ცისა ფერს - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/tsisa-pers/"
    },
    {
        name: "ვპოვე ტაძარი - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/vpove-tadzari/"
    },
    {
        name: "მერანი - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/merani/"
    },
    {
        name: "სულო ბოროტო - ნიკოლოზ ბარათაშვილი",
        link: "/author/nikoloz-baratashvili/sulo-boroto/"
    },
]

const body = document.querySelector('.body')
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.logo-search')
const searchBtnCol = document.querySelector('.logo-search-colored')
const searchInput = document.querySelector('.search-bar-input')
const searchClear = document.querySelector('.search-bar-clear')
const searchItemsSection = document.querySelector('.search-section')
const searchNoMatch = document.querySelector('.search-section-nomatch')

searchBtn.addEventListener('click', function () {
    searchShow()
})
searchBtnCol.addEventListener('click', function () {
    searchShow()
})

function searchShow() {
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

searchInput.addEventListener('input', function () {
    let text = this.value.trim();
    diplaySearchItems();
    searchItemsSection.classList.add('search-section-show')
    let output = document.querySelectorAll('.search-section a')
    let outputItems = document.querySelectorAll('.search-section-item')

    // console.log(output.firstChild);
    if (text != '') {
        outputItems.forEach(function (elem) {
            if (elem.innerText.search(text) == -1) {
                elem.style.display = 'none'
                elem.classList.add('no-match')
            }
        })
        let noMatch = document.querySelectorAll('.no-match')
        if (output.length == noMatch.length) {
            searchItemsSection.innerHTML = '<p class="search-section-nomatch">არაფერი მოიძებნა</p>'
        }
    } else {
        outputItems.forEach(function (elem) {
            elem.style.display = 'none'
        })
        searchItemsSection.classList.remove('search-section-show')
    }
})

function diplaySearchItems() {
    let displaySearchItems = searchItems.map(function (item) {

        return `<a href="${item.link}">
                    <p class="search-section-item">${item.name}</p>
                </a>`
    })
    displaySearchItems = displaySearchItems.join('')
    searchItemsSection.innerHTML = displaySearchItems
}

searchClear.addEventListener('click', function () {
    searchInput.value = ''
    searchItemsSection.classList.remove('search-section-show')
    searchInput.focus()
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