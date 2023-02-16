const nav = document.querySelector('nav');
const wlf = document.getElementById('wlf');

wlf.addEventListener("mouseenter", () => {
    nav.classList.add('nav-show');
    nav.addEventListener("mouseenter", () => {
        nav.classList.add("nav-show")
    });

    nav.addEventListener("mouseleave", () => {
        nav.classList.remove("nav-show")
    });
})

wlf.addEventListener("mouseleave", () => {
    setTimeout(nav.classList.remove('nav-show'), 2000)})
