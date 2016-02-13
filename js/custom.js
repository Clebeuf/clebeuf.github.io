// make skill sliders darker on hover
$( "div.skillbar" ).hover(
			function() {$( this ).fadeTo("fast", 1);},
			function() {$( this ).fadeTo("fast", .85);}
		);

// fade effects for the text
$(window).scroll(function () {

    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    var currentScrollTop = ($('html').scrollTop() || $('body').scrollTop());
    var currentScrollBottom = ($('html').scrollTop() || $('body').scrollTop()) + ( $(window).height() * .3);

    $('.typed-content').css({'opacity': ((height - (scrollTop * 1.5)) / height)});
    
    $('#project').toggleClass('visible', currentScrollBottom >= $('#project').position().top);
    $('#contact').toggleClass('visible', currentScrollBottom >= $('#contact').position().top);
    $('#skills').toggleClass('visible', currentScrollBottom >= $('#skills').position().top);

});


//carousel control
$('.carousel').carousel({
  interval: 15000
})	

$('#myModal').modal('show')

// temp start typed on modal close
$('#myModal').on('hide.bs.modal', function () {
      $(".typed-header").typed({
        strings: [
        "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Software Developer",
        "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Computer Scientist! ",
        "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Graduate Student at UVic  ^1000:) "],
        typeSpeed: 40,
        contentType: 'html'
      });
})


// animated scroll from http://jsfiddle.net/9SDLw/
$('#navbar-fixed a').click(function(){

    // collapse the burger menu
    $('#navbar-example').collapse('hide');

    // animate the scroll to the menu item
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-10
    }, 1000);
    return false;
});
