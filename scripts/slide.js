const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        const isRight = control.classList.contains("arrow-right");
        if (isLeft) {
            currentItem -= 1;
        }
        if (isRight) {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        console.log("control", isLeft, currentItem);

        items.forEach(item => item.classList.remove("current-item"));
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })
        items[currentItem].classList.add("current-item");
    
    })
});