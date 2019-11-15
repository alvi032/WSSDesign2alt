// changing background color of navbar on scroll
var myNav = document.getElementById("myNav")
var logo = document.getElementById("logo")

window.onscroll = function () {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        logo.style.height = '50px'
        myNav.classList.add("nav-colored")
        myNav.classList.remove("nav-transparent");
    }
    else if(window.screen.width > 425){
        logo.style.height = '70px'
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
}

// hamburger-icon
$(document).ready(function(){
    $('#btnControl').click(function(){
        $('#hamburger-icon').click(function(){
            $(this).toggleClass('open');
            $('#mobile-nav-ul').toggleClass('open-nav');
        });
    });
});


// resizing intro video to 16:9
window.onload = function videoResize(){
    var introVidHeight = document.getElementById("intro-video-div").offsetWidth*(9/16)
    document.getElementById("intro-video-div").style.height = introVidHeight + 'px'
}
window.onresize = function videoResize(){
    var introVidHeight = document.getElementById("intro-video-div").offsetWidth*(9/16)
    document.getElementById("intro-video-div").style.height = introVidHeight + 'px'
}

