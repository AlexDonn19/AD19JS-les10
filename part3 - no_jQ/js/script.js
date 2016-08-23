document.addEventListener('DOMContentLoaded', (function () {

  var links = document.getElementsByClassName('dropdown');

    function myOpen(e) {
        e.preventDefault();
        var submenu = this.querySelector('.submenu');
        submenu.style.display = "block";
    }

    function myClose() {
        var submenu = this.querySelector('.submenu');
        submenu.style.display = "none";
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", myOpen);
        links[i].addEventListener("mouseout", myClose);
    }


})
);