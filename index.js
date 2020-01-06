const hamburgerMenu = document.getElementById('hamburger');

hamburgerMenu.addEventListener('click', function() {
    const nav = document.getElementById('mobile-nav');
    const logoHamburger = document.getElementById('logo-hamburger')
    if (nav.style.width === '220px') {
        nav.style.width = 0;
        logoHamburger.style.left = 0;
    } else {
        nav.style.width = '220px';
        logoHamburger.style.left = '-220px';
    }
});