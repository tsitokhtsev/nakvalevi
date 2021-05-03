/* Writing Page Content */
const container = document.querySelector('.writing.article').querySelector('.container')

fetch('/js/data.json', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(data => data.json()).then(data => {
    data.forEach(p => p.map(a => {
        if (window.location.href.includes(a.link)) {
            a.writings.map(w => {
                if (window.location.href.includes(w.link)) {
                    container.innerHTML =
                        `<h1 class="title">
                            <span class="title-text">${w.name}</span>
                        </h1>
                        <div class="writing-info section">
                            <p class="writing-info-block">
                                <span class="writing-info-block-name PURPLE">ავტორი:</span>
                                <span class="BLACK"><a href="${a.link}">${a.name} ${a.surname}</a></span>
                            </p>
                            <p class="writing-info-block">
                                <span class="writing-info-block-name PURPLE">წელი:</span>
                                <span class="BLACK">${w.year == '~' ? a.year : w.year}</span>
                            </p>
                            <p class="writing-info-block">
                                <span class="writing-info-block-name PURPLE">ჟანრი:</span>
                                <span class="BLACK">${w.genre}</span>
                            </p>
                        </div>
                        
                        <div class="section">
                            <div class="writing-card">
                                <div class="writing-card-header">
                                    <div class="writing-card-title">
                                        <span class="writing-card-title-text">ანალიზი</span>
                                    </div>
                                    <button class="writing-card-button"></button>
                                </div>
                                <div class="writing-card-content">
                                    <div class="writing-analysis"></div>
                                </div>
                            </div>
                        
                            <div class="writing-card">
                                <div class="writing-card-header">
                                    <div class="writing-card-title">
                                        <span class="writing-card-title-text">პერსონაჟები</span>
                                    </div>
                                    <button class="writing-card-button"></button>
                                </div>
                                <div class="writing-card-content">
                                    <div class="writing-characters"></div>
                                </div>
                            </div>
                        
                            <div class="writing-card">
                                <div class="writing-card-header">
                                    <div class="writing-card-title">
                                        <span class="writing-card-title-text">ლექსიკონი</span>
                                    </div>
                                    <button class="writing-card-button"></button>
                                </div>
                                <div class="writing-card-content">
                                    <div class="writing-dictionary"></div>
                                </div>
                            </div>
                        </div>`

                    const analysis = container.querySelector('.writing-analysis')
                    if (w.essay != '') {
                        w.essay.forEach(e => {
                            let paragraph = document.createElement('p')
                            analysis.hasChildNodes() ? analysis.insertBefore(paragraph, analysis.lastChild.nextSibling) : analysis.insertBefore(paragraph, analysis.lastChild)
                            paragraph.innerHTML = `${e}`
                        })
                    } else {
                        analysis.innerHTML = '<span class="na">არ არის ინფორმაცია</span>'
                    }

                    const characters = container.querySelector('.writing-characters')
                    if (w.characters != '') {
                        w.characters.forEach(c => {
                            let character = document.createElement('div')
                            character.setAttribute('class', 'writing-characters-character')
                            characters.hasChildNodes() ? characters.insertBefore(character, characters.lastChild.nextSibling) : characters.insertBefore(character, characters.lastChild)
                            character.innerHTML = `
                                <p class="writing-characters-character-name PURPLE">${c.name}</p>
                                <ul></ul>`

                            const qualities = character.querySelector('ul')
                            c.qualities.forEach(q => {
                                let quality = document.createElement('li')
                                qualities.hasChildNodes() ? qualities.insertBefore(quality, qualities.lastChild.nextSibling) : qualities.insertBefore(quality, qualities.lastChild)
                                quality.innerHTML = `<span>${q};</span>`
                            })
                        })
                    } else {
                        characters.innerHTML = '<span class="na">არ არის ინფორმაცია</span>'
                    }

                    const dictionary = container.querySelector('.writing-dictionary')
                    if (w.dictionary != '') {
                        w.dictionary.forEach(w => {
                            let word = document.createElement('span')
                            word.setAttribute('class', 'writing-dictionary-word')
                            dictionary.hasChildNodes() ? dictionary.insertBefore(word, dictionary.lastChild.nextSibling) : dictionary.insertBefore(word, dictionary.lastChild)
                            word.innerHTML = `<span class="PURPLE">${w.word}</span><br>${w.meaning}`
                        })
                    } else {
                        dictionary.innerHTML = '<span class="na">არ არის ინფორმაცია</span>'
                    }

                    const cards = document.querySelectorAll('.writing-card')

                    const btnFirst = cards[0].querySelector('.writing-card-button')
                    const contentFirst = cards[0].querySelector('.writing-card-content')

                    btnFirst.classList.add('writing-card-button-show')
                    cards[0].style.maxHeight = `${contentFirst.clientHeight + 45}px`
                    contentFirst.classList.add('writing-card-content-show')

                    cards.forEach(card => {
                        const header = card.querySelector('.writing-card-header')

                        header.onclick = () => {
                            cards.forEach(item => {
                                if (item != card) {
                                    const btn = item.querySelector('.writing-card-button')
                                    const content = item.querySelector('.writing-card-content')

                                    item.style.maxHeight = '45px'
                                    btn.classList.remove('writing-card-button-show')
                                    content.classList.remove('writing-card-content-show')
                                }
                            })

                            const btn = card.querySelector('.writing-card-button')
                            const content = card.querySelector('.writing-card-content')

                            btn.classList.toggle('writing-card-button-show')
                            if (btn.classList.contains('writing-card-button-show')) {
                                card.style.maxHeight = `${content.clientHeight + 45}px`
                            } else {
                                card.style.maxHeight = '45px'
                            }
                            content.classList.toggle('writing-card-content-show')
                            setTimeout(() => {
                                const cardPosition = card.getBoundingClientRect()
                                window.scrollTo({ top: window.pageYOffset + cardPosition.top - 75 })
                            }, 500)
                        }
                    })
                }

            })
        }
    }))
})