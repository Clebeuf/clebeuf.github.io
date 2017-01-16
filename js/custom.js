var siteTitleFontSize = parseInt($("#site-title").css("font-size"));
var siteLinksFontSize = parseInt($("#site-links").css("font-size"));

var navFontSize = 20;
var pageMargin = ($(window).width() - parseInt($(".container").css("width")))/2;

function setNavbar() {
    var height = $(window).height();
    var width = $(window).width();
    var scrollTop = window.pageYOffset;

    // title offsets
    var titleOffsetLeft = (width/2)-( $("#site-title").width()/2 );
    var titleOffsetTop = (height/2)-( $("#site-title").height()/2 );
    var speedTitleLeft = (titleOffsetLeft / height);
    var speedShrinkTitle = parseInt(siteTitleFontSize) / height;

    // links offsets
    var linksOffsetRight = (width/2)-( $("#site-links").width()/2 );
    var linksOffsetTop = (height/2)-( $("#site-links").height()/2 ) + $("#site-title").height()/2;
    var speedLinksRight = (linksOffsetRight / (height));
    var speedShrinkLinks = parseInt(siteLinksFontSize) / height;
    
    $('nav').toggleClass('fixed-navbar', scrollTop >= height - 75);
    $("#site-title").toggleClass('navbar-header', scrollTop >= height - 75);
    $("#site-links").toggleClass('navbar-header', scrollTop >= height - 75);


    
    // fix to use default sizes for width / height of text
    if (scrollTop <= 0) {
        console.log("0")
        $("#site-title").css("left", titleOffsetLeft.toString() + "px");
        $("#site-title").css("top", titleOffsetTop.toString() + "px");
        $("#site-title").css("font-size", siteTitleFontSize.toString() + "px" )

        $("#site-links").css("right", linksOffsetRight.toString() + "px");
        $("#site-links").css("top", linksOffsetTop.toString() + "px");
        $("#site-links").css("font-size", siteLinksFontSize.toString() + "px" )

    } else {
        console.log("hit")
        // title calculate left offset
        if (titleOffsetLeft-(scrollTop*speedTitleLeft) > pageMargin) {
            $("#site-title").css("left", (titleOffsetLeft-(scrollTop*speedTitleLeft)).toString() + "px");
        } else { $("#site-title").css("left", pageMargin.toString() + "px"); }

        // title calculate top offset
        if (titleOffsetTop-(scrollTop/2) > 0) {
            $("#site-title").css("top", (titleOffsetTop-(scrollTop/2)).toString() + "px");
        } else { $("#site-title").css("top", "0"); }

        // title calculate size
        if ((siteTitleFontSize - scrollTop*speedShrinkTitle) > navFontSize) {
            $("#site-title").css("font-size", (siteTitleFontSize - scrollTop*speedShrinkTitle).toString() + "px" )
        } else { $("#site-title").css("font-size", navFontSize.toString() + "px" ) }


        // links calculate left offset
        if (linksOffsetRight-(scrollTop*speedLinksRight) > pageMargin) {
            $("#site-links").css("right", (linksOffsetRight-(scrollTop*speedLinksRight)).toString() + "px");
        } else { $("#site-links").css("right", pageMargin.toString() + "px"); }

        // links calculate top offset
        if (linksOffsetTop-(scrollTop/1.9) > 0) {
            $("#site-links").css("top", (linksOffsetTop-(scrollTop/1.9)).toString() + "px");
        } else { $("#site-links").css("top", "0"); }

        // links calculate size
        if ((siteLinksFontSize - scrollTop*speedShrinkLinks) > navFontSize) {
            $("#site-links").css("font-size", (siteLinksFontSize - scrollTop*speedShrinkLinks).toString() + "px" )
        } else { $("#site-links").css("font-size", navFontSize.toString() + "px" )}

    }
};

// hero / navbar effects
$(window).scroll(function () {
    setNavbar()
});

// call to setup navbar on intial load
setNavbar()
