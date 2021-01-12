// writing page content
const btn = document.getElementsByClassName('writing-card-button')
const card = document.getElementsByClassName('writing-card')
const content = document.getElementsByClassName('writing-card-content')

window.addEventListener('load', function () {
    console.log('hello')
    const contentHeight = content[0].clientHeight
    btn[0].classList.add('writing-card-button-show')

    card[0].style.maxHeight = `${contentHeight + 45}px`

    content[0].classList.add('writing-card-content-show')
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        const contentHeight = content[i].clientHeight
        btn[i].classList.toggle('writing-card-button-show')

        if (btn[i].classList.contains('writing-card-button-show')) {
            card[i].style.maxHeight = `${contentHeight + 45}px`
        } else {
            card[i].style.maxHeight = '45px'
        }

        content[i].classList.toggle('writing-card-content-show')
    })
}