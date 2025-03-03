
function updateBodyPadding() {
    const header = document.querySelector(".header");
    document.body.style.paddingTop = header.offsetHeight + "px";
}

// Pozovi funkciju kada se stranica učita
window.addEventListener("load", updateBodyPadding);

// Pozovi funkciju ako se veličina headera promijeni
window.addEventListener("resize", updateBodyPadding);

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}