/* ---- AI Typing Effect ---- */
const text = [
    "AI Developeri",
    "Biznes Tadbirkor",
    "Treyding Mutaxassisi",
    "Robototexnika Ishqibozi",
    "Yosh Innovator"
];

let counter = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (counter === text.length) {
        counter = 0;
    }
    currentText = text[counter];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        index = 0;
        counter++;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 80);
    }
}
type();

/* ---- Scroll Animation ---- */
const elements = document.querySelectorAll(".fade-up");

function scrollAnimation() {
    const trigger = window.innerHeight * 0.85;
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("show");
    });
}
window.addEventListener("scroll", scrollAnimation);
scrollAnimation();

/* ---- Header Darkening ---- */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 60) {
        header.style.background = "rgba(0,0,0,0.75)";
    } else {
        header.style.background = "rgba(0,0,0,0.35)";
    }
});
