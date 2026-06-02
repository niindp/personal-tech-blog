const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

if (darkModeBtn) {

    updateButtonText();

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }

        updateButtonText();
    });
}

function updateButtonText() {

    if (!darkModeBtn) return;

    darkModeBtn.textContent =
        document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}


// SCROLL ANIMATION
const elements = document.querySelectorAll('.content, .hero, article, .project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});