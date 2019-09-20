const toggle = document.getElementById('open-sidebar')
const sideNavbar = document.getElementById('side-navbar')

toggle.onmouseover = function () {
    sideNavbar.style.width = "250px"
}

window.onclick = function () {
    sideNavbar.style.width = "0"
}
