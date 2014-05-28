function intro() {
    var logo = document.getElementById('logo');
    // logo.classList.add('rotate');
}

document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('circle1');
    logo.addEventListener("webkitAnimationEnd", intro, false);
}, false);
