// changing background color of navbar on scroll
var myNav = document.getElementById("myNav")
var logo = document.getElementById("logo")

window.onscroll = function () {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        logo.style.height = '50px'
        myNav.classList.add("nav-colored")
        myNav.classList.remove("nav-transparent");
    }
    else if(window.screen.width > 500){
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




//services dropdown div
$(function () {

    $(".services-collapsible-div > div > div:last-child").slideUp("slow");

    $(".services-collapsible-div > div > div:first-child").click(function (e) {

        e.preventDefault();

        var $tab = $(this).parent();

        var is_single = $tab.parent().hasClass("single");

        $tab.toggleClass("open");
        $tab.children(":last-child").slideToggle("slow");

        if (is_single) {
            $tab.siblings().removeClass("open");
            $tab.siblings().children(":last-child").slideUp("slow");
        }
    });
});

