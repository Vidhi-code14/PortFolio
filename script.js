
const sections = document.querySelectorAll("section, .hero-text, .hero-img");

const revealOnScroll = () => {
    let triggerBottom = window.innerHeight * 0.85;

    sections.forEach(sec => {
        let boxTop = sec.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            sec.classList.add("fade-in-up");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// set toggle button function
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    // change icon
    if (body.classList.contains("light-theme")) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    // save preference
    localStorage.setItem("theme", body.classList.contains("light-theme") ? "light" : "dark");
});

// load saved theme
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});
