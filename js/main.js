$(document).ready(function(){
	$('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $(".mobile__nav").toggleClass("mobile__nav-show");
    });
    $(".mobile__nav ul li").click(function(){
        $("#nav-icon3").toggleClass('open');
        $(".mobile__nav").toggleClass("mobile__nav-show");
    });
});

function show() {
    var food = ["appetizers", "ramen", "rice", "drinks", "desserts", "alcohol"];
    var category = event.target.innerHTML.toLowerCase();
    for(var i = 0; i < 6; i++) {
        if(category == food[i]){
            document.querySelector("." + category + "__row .menu__content").classList.toggle("no-height");
        }
    }
}

function worklistScroll1() {
    var goTo = $("#location");
        var top = goTo.offset().top;
        top-=100;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistScroll2() {
    var goTo = $("#aboutus");
        var top = goTo.offset().top;
        top-=100;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function home() {
    var goTo = $(".contain");
        var top = goTo.offset().top;
        top-=0;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}