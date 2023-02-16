const nav_bar = document.getElementById("nav-bar");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const logo = document.getElementById("logo");

function showNav() {
    main.classList.remove("max-main");
    main.classList.add("min-main");
    nav_bar.classList.remove("min-nav-bar");
    nav_bar.classList.add("max-nav-bar");
    logo.classList.remove("min-logo");
    logo.classList.add("max-logo");
    nav.classList.remove("min-nav");
    nav.classList.add("max-nav");
}

function hideNav() {
    main.classList.remove("min-main");
    main.classList.add("max-main")
    nav_bar.classList.remove("max-nav-bar");
    nav_bar.classList.add("min-nav-bar");
    logo.classList.remove("max-logo");
    logo.classList.add("min-logo");
    nav.classList.remove("max-nav");
    nav.classList.add("min-nav");
}

logo.addEventListener("mouseenter", showNav);
logo.addEventListener("mouseleave", hideNav);
nav_bar.addEventListener("mouseenter", showNav);
nav_bar.addEventListener("mouseleave", hideNav);