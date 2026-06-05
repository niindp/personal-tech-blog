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


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        if (darkModeBtn) {
            darkModeBtn.classList.toggle("show");
        }

        if(navMenu.classList.contains("show")){
            menuToggle.textContent = "✕";
        }else{
            menuToggle.textContent = "☰";
        }
    });
}


// CUSTOM CURSOR
const cursor = document.querySelector(".cursor-dot");

if (cursor) {
    cursor.innerHTML = "💖";

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}


// =========================
// IMAGE POPUP (FIXED)
// =========================

// ONLY ONE FUNCTION (FIXED VERSION)
function openImage(wrapper){
    const img = wrapper.querySelector("img");

    if(!img) return;

    const popup = document.getElementById("imgPopup");
    const popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";
    popupImg.src = img.getAttribute("src");
}

// CLOSE POPUP
function closeImage(){
    document.getElementById("imgPopup").style.display = "none";
}