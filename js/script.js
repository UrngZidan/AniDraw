const menuToggle = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

})