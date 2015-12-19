window.onscroll = parallax

function parallax() {
    var marginTop = document.getElementById("page").scrollTop * -.3
    document.getElementsByClassName("background")[0].style.marginTop = marginTop + 'px'
}
