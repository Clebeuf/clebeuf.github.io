// make skill sliders darker on hover
$( "div.skillbar" ).hover(
			function() {$( this ).fadeTo("fast", 1);},
			function() {$( this ).fadeTo("fast", .85);}
		);


// exerience sliders
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


//scrollspy
$('body').scrollspy({ target: '#navbar-example' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})	


//carousel control
$('.carousel').carousel({
  interval: 15000
})	


//typed
$(function(){
  $(".typed-header").typed({
    strings: [
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Software Developer",
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Computer Scientist! ",
    "Hello, world! <br> <span class='jh'>I'm Carlene Lebeuf</span> <br> a Graduate Student at UVic  ^1000:) "],
    typeSpeed: 40,
    contentType: 'html'
  });
});


//Stack menu when collapsed & remove pills
$('#navbar-example').on('show.bs.collapse', function() {
    $('.nav').addClass('nav-stacked').removeClass('nav-pills');
    console.log("hello there")
});

//Unstack menu when not collapsed & add back pills
$('#navbar-example').on('hidden.bs.collapse', function() {
    $('.nav').removeClass('nav-stacked').addClass('nav-pills');
});


// animated scroll from http://jsfiddle.net/9SDLw/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-10
    }, 1000);
    return false;
});

