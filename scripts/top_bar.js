const header = document.getElementById("top-menu");
const w = document.getElementById("W");
const l = document.getElementById("L");
const f = document.getElementById("F");
const offset = 82;

function max() {
    if (scrollY >= offset) {
        header.classList.remove("max-header");
        header.classList.add("min-header");
        w.classList.add("min-wlf");
        l.classList.add("min-wlf");
        f.classList.add("min-wlf");
    } else {     
        header.classList.remove("min-header");
        header.classList.add("max-header");
        w.classList.remove("min-wlf");
        l.classList.remove("min-wlf");
        f.classList.remove("min-wlf");
    }
}

addEventListener("scroll", max);