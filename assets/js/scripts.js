$(document).ready(function (){
    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    $('.cover-wrapper, .cover-filter').css({ height: vh100 });
});