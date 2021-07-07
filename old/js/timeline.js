/* Timeline */
const periods = document.querySelectorAll('.timeline-main')

fetch('/js/data.json', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(data => data.json()).then(data => {
    data.forEach(p => p.map(a => {
        let author = document.createElement('div')
        author.setAttribute('class', 'timeline-author')
        periods[data.indexOf(p)].insertBefore(author, periods[data.indexOf(p)].lastChild.nextSibling)
        author.innerHTML =
            `<hr class="timeline-line">
            <a href="${a.link}">
                <div class="timeline-author-bio">
                    <div class="timeline-author-info">
                        <span class="timeline-author-info-name">${a.name}<br>${a.surname}</span>
                        <span class="timeline-author-info-years">${a.year}</span>
                    </div>
                    <img class="author-img" src="${a.image}" alt="portrait">
                </div>
            </a>
            <hr class="timeline-line">
            <div class="timeline-author-writings"></div>`

        const writings = author.querySelector('.timeline-author-writings')
        a.writings.forEach(w => {
            let writing = document.createElement('a')
            writing.setAttribute('href', `${w.link}`)
            writings.hasChildNodes() ? writings.insertBefore(writing, writings.lastChild.nextSibling) : writings.insertBefore(writing, writings.lastChild)
            writing.innerHTML =
                `<div class="timeline-author-writing">
                    <span>${w.name}</span>
                    <span class="timeline-author-writing-date">${w.year}</span>
                </div>`
        })
    }))
})

/* Timeline Anchors */
const anchors = document.querySelector('.navbar-anchors')

setTimeout(() => {
    anchors.classList.add('navbar-anchors-show')
}, 500);
setTimeout(() => {
    anchors.classList.remove('navbar-anchors-show')
}, 1500);

navbar.addEventListener('mouseover', () => {
    anchors.classList.add('navbar-anchors-show')
})
navbar.addEventListener('mouseout', () => {
    anchors.classList.remove('navbar-anchors-show')
})

anchors.addEventListener('mouseover', () => {
    anchors.classList.add('navbar-anchors-show')
})
anchors.addEventListener('mouseout', () => {
    anchors.classList.remove('navbar-anchors-show')
})