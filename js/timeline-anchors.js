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