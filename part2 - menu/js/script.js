$(function () {

  var $links = $('.dropdown');

    function myOpen() {
        var $submenu = $(this).children('.submenu');
        $submenu.stop().animate({
            backgroundColor: "#99F0EA",
            height: 'show'
        }, 300);
    }

    function myClose() {
        var $submenu = $(this).children('.submenu');
        $submenu.animate({
            height: 'hide',
            backgroundColor: "#C3F391"
        }, 300);
    }

    $links.mouseenter(myOpen);
    $links.mouseleave(myClose);


});