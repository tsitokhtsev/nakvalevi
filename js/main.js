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
        link: "/author/iakob-tsurtaveli/shushanikis-tsameba/"
    },
    {
        name: "აბო თბილელის წამება - იოანე საბანისძე",
        link: "/author/ioane-sabanisdze/abo-tbilelis-tsameba/"
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
        link: "/author/nikoloz-baratashvili/ar-ukizhino-satrpoo/"
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
    {
        name: "აჩრდილი - VII თავი - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/achrdili/"
    },
    {
        name: "კაცია-ადამიანი?! - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/katsia-adamiani/"
    },
    {
        name: "მგზავრის წერილები - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/mgzavris-tserilebi/"
    },
    {
        name: "ჩემო კალამო - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/chemo-kalamo/"
    },
    {
        name: "ბედნიერი ერი - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/bednieri-eri/"
    },
    {
        name: "პასუხის პასუხი - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/pasukhis-pasukhi/"
    },
    {
        name: "განდეგილი - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/gandegili/"
    },
    {
        name: "ოთარაანთ ქვრივი - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/otaraant-qvrivi/"
    },
    {
        name: "რა გითხრათ, რით გაგახაროთ? - ილია ჭავჭავაძე",
        link: "/author/ilia-chavchavadze/ra-gitkhrat-rit-gagakharot/"
    },
    {
        name: "აღმართ-აღმართ - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/agmart-agmart/"
    },
    {
        name: "ქებათა ქება - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/qebata-qeba/"
    },
    {
        name: "თორნიკე ერისთავი - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/tornike-eristavi/"
    },
    {
        name: "განთიადი - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/gantiadi/"
    },
    {
        name: "სულიკო - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/suliko/"
    },
    {
        name: "გამზრდელი - აკაკი წერეთელი",
        link: "/author/akaki-tsereteli/gamzrdeli/"
    },
    {
        name: "ხევისბერი გოჩა - ალექსანდრე ყაზბეგი",
        link: "/author/aleqsandre-kazbegi/khevisberi-gocha/"
    },
    {
        name: "კაი ყმა - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/kai-kma/"
    },
    {
        name: "ალუდა ქეთელაური - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/aluda-qetelauri/"
    },
    {
        name: "ბახტრიონი - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/bakhtrioni/"
    },
    {
        name: "ჩემი ვედრება - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/chemi-vedreba/"
    },
    {
        name: "სტუმარ-მასპინძელი - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/stumar-maspindzeli/"
    },
    {
        name: "ამოდის, ნათდება - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/amodis-natdeba/"
    },
    {
        name: "იას უთხარით ტურფასა - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/ias-utkharit-turpasa/"
    },
    {
        name: "კოსმოპოლიტიზმი და პატრიოტიზმი - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/kosmopolitizmi-da-patriotizmi/"
    },
    {
        name: "რამ შემქმნა ადამიანად - ვაჟა-ფშაველა",
        link: "/author/vazha-pshavela/ram-shemqmna-adamianad/"
    },
    {
        name: "სამანიშვილის დედინაცვალი - დავით კლდიაშვილი",
        link: "/author/davit-kldiashvili/samanishvilis-dedinatsvali/"
    },

    {
        name: "ჯაყოს ხიზნები - მიხეილ ჯავახიშვილი",
        link: "/author/mikheil-javakhishvili/jakos-khiznebi/"
    },
    {
        name: "შელოცვა რადიოთი - ნიკო ლორთქიფანიძე",
        link: "/author/niko-lortqipanidze/shelotsva-radioti/"
    },
    {
        name: "მე და ღამე - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/me-da-game/"
    },
    {
        name: "მთაწმინდის მთვარე - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/mtatsmindis-mtvare/"
    },
    {
        name: "შერიგება - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/sherigeba/"
    },
    {
        name: "მშობლიური ეფემერა - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/mshobliuri-epemera/"
    },
    {
        name: "თოვლი - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/tovli/"
    },
    {
        name: "სილაჟვარდე ანუ ვარდი სილაში - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/silazhvarde-anu-vardi-silashi/"
    },
    {
        name: "ქებათა ქება ნიკორწმინდას - გალაკტიონ ტაბიძე",
        link: "/author/galaktion-tabidze/qebata-qeba-nikortsmindas/"
    },
    {
        name: "ყვარყვარე თუთაბერი - პოლიკარპე კაკაბაძე",
        link: "/author/polikarpe-kakabadze/kvarkvare-tutaberi/"
    },
    {
        name: "დიდოსტატის მარჯვენა - კონსტანტინე გამსახურდია",
        link: "/author/konstantine-gamsakhurdia/didostatis-marjvena/"
    },
    {
        name: "პოეზია - პაოლო იაშვილი",
        link: "/author/paolo-iashvili/poezia/"
    },
    {
        name: "ლექსი მეწყერი - ტიციან ტაბიძე",
        link: "/author/titsian-tabidze/leqsi-metskeri/"
    },
    {
        name: "ანანურთან - ტიციან ტაბიძე",
        link: "/author/titsian-tabidze/ananurtan/"
    },
    {
        name: "ნინოწმინდის ღამე - გიორგი ლეონიძე",
        link: "/author/giorgi-leonidze/ninotsmindis-game/"
    },
    {
        name: "ყივჩაღის პაემანი - გიორგი ლეონიძე",
        link: "/author/giorgi-leonidze/kivchagis-paemani/"
    },
    {
        name: "მკვდართა მზე ვარ - ანა კალანდაძე",
        link: "/author/ana-kalandadze/mkvdarta-mze-var/"
    },
    {
        name: "ალავერდობა - გურამ რჩეულიშვილი",
        link: "/author/guram-rcheulishvili/alaverdoba/"
    },
    {
        name: "იგი - ჯემალ ქარჩხაძე",
        link: "/author/jemal-qarchkhadze/igi/"
    },
    {
        name: "კაცი, რომელსაც ლიტერატურა ძლიერ უყვარდა - გურამ დოჩანაშვილი",
        link: "/author/guram-dochanashvili/katsi-romelsats-literatura-dzlier-ukvarda/"
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