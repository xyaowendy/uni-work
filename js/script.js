$(document).ready(function() {
    $('#fullpage').fullpage({
        //navigation
        navigation: true,

        // scrolling
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        showActiveTooltip: true,

        // loopBottom:true,
        // loopTop:true,
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);

    // loading
    setTimeout(function() {
        $("body").addClass("loaded");
    }, 2000); // 1 second delay
});