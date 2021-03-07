// writing page content
const cards = document.querySelectorAll('.writing-card')

window.addEventListener('DOMContentLoaded', () => {
    const firstCard = cards[0]
    const btn = firstCard.querySelector('.writing-card-button')
    const content = firstCard.querySelector('.writing-card-content')

    btn.classList.add('writing-card-button-show')
    firstCard.style.maxHeight = `${content.clientHeight + 45}px`
    content.classList.add('writing-card-content-show')
})

cards.forEach((card) => {
    const header = card.querySelector('.writing-card-header')
    
    header.addEventListener('click', () => {
        cards.forEach((item) => {
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
            window.scrollTo({
                top: window.pageYOffset + cardPosition.top - 75
            })
        }, 500)
    })
})