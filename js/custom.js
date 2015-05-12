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
