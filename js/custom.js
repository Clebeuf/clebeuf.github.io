
// fade effects for the text
$(window).scroll(function () {

    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    var currentScrollTop = ($('html').scrollTop() || $('body').scrollTop());
    var currentScrollBottom = ($('html').scrollTop() || $('body').scrollTop()) + ( $(window).height() * .5);

    $('.typed-content').css({'opacity': ((height - (scrollTop * 1.75)) / height)});
    //$('#body').css({'opacity': ((height - (scrollTop * 1.5)) / height)});
    
    $('#project').toggleClass('visible', currentScrollBottom >= $('#project').position().top);
    $('#contact').toggleClass('visible', currentScrollBottom >= $('#contact').position().top);
    $('#skills').toggleClass('visible', currentScrollBottom >= $('#skills').position().top);

});


//carousel control
$('.carousel').carousel({
  interval: 15000
})	

$(".typed-header").typed({
    strings: [
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Front End Web Developer",
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a User Interface Designer ",
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Graduate Student at UVic  ^1000:) "],
    typeSpeed: 45,
    contentType: 'html'
});


// animated scroll from http://jsfiddle.net/9SDLw/
$('#navbar-fixed a').click(function(){

    // collapse the burger menu
    $('#navbar-example').collapse('hide');

    // animate the scroll to the menu item
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-0
    }, 1000);
    return false;
});
