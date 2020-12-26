function logoMenuImgChange() {
    var chbox;
    var logoMenuImg;
    chbox = document.getElementById('logo-menu-chbox');
    logoMenuImg = document.getElementById('logo-menu-img');
    if (chbox.checked) {
        logoMenuImg.setAttribute('src', '/img/close.svg');
    } else {
        logoMenuImg.setAttribute('src', '/img/menu.svg');
    }
}