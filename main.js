var myNav = document.getElementById("myNav")
var logo = document.getElementById("logo")
window.onscroll = function () {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        logo.style.height = '50px'
        myNav.classList.add("nav-colored")
        myNav.classList.remove("nav-transparent");
    }
    else {
        logo.style.height = '70px'
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
}
