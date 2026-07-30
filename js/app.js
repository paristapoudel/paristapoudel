/*==========================================================
    PARISTA POUDDEL PORTFOLIO
    Main JavaScript

    Features
    - Loader
    - Mobile Navigation
    - Scroll Progress
    - Sticky Navbar Effect
    - Back To Top
    - Counter Animation
    - Theme Toggle
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================================
        LOADER
    ======================================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.remove();

            }, 600);

        }, 900);

    });

    /*======================================================
        MOBILE NAVIGATION
    ======================================================*/

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                hamburger.classList.remove("active");

            });

        });

    }

    /*======================================================
        SCROLL PROGRESS BAR
    ======================================================*/

    const progressBar = document.getElementById("progress-bar");

    function updateProgressBar() {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

    }

    window.addEventListener("scroll", updateProgressBar);

    /*======================================================
        BACK TO TOP BUTTON
    ======================================================*/

    const backToTop = document.getElementById("backToTop");

    function toggleBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", toggleBackToTop);

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /*======================================================
        NAVBAR SCROLL EFFECT
    ======================================================*/

    const navbar = document.querySelector(".navbar");

function navbarEffect() {

    if (!navbar) return;

    const isLight = document.body.classList.contains("light-theme");

    if (window.scrollY > 80) {

        navbar.style.background = isLight
            ? "rgba(255,255,255,0.92)"
            : "rgba(11,16,32,0.92)";

        navbar.style.backdropFilter = "blur(22px)";
        navbar.style.boxShadow = "0 12px 40px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = isLight
            ? "rgba(255,255,255,0.65)"
            : "rgba(255,255,255,0.06)";

        navbar.style.backdropFilter = "blur(22px)";
        navbar.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", navbarEffect);

    /*======================================================
        COUNTER ANIMATION
    ======================================================*/

    const counters = document.querySelectorAll(".counter");

    function animateCounter(counter) {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;
                clearInterval(timer);

            } else {

                counter.textContent = Math.floor(current);

            }

        }, 20);

    }

    if ("IntersectionObserver" in window) {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.6

        });

        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }

/*======================================================
    THEME TOGGLE
======================================================*/

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    if (themeToggle) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");


        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );


        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';


        // FIX: Immediately update navbar theme
        navbarEffect();

    });

}

});