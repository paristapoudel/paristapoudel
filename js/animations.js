/*==========================================================
    PARISTA POUDEL PORTFOLIO
    Scroll & UI Animations

    Features
    - Scroll Reveal
    - Stagger Animation
    - Magnetic Buttons
    - Floating Elements
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================================
        SCROLL REVEAL
    ======================================================*/

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    function revealOnScroll() {

        const triggerPoint = window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {

                element.classList.add("active");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /*======================================================
        STAGGER ANIMATION
    ======================================================*/

    const staggerContainers = document.querySelectorAll(".stagger");

    const staggerObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const children = entry.target.children;

            [...children].forEach((child, index) => {

                setTimeout(() => {

                    child.style.opacity = "1";
                    child.style.transform = "translateY(0)";

                }, index * 120);

            });

            staggerObserver.unobserve(entry.target);

        });

    }, {

        threshold: 0.25

    });

    staggerContainers.forEach(container => {

        staggerObserver.observe(container);

    });

    /*======================================================
        MAGNETIC BUTTONS
    ======================================================*/

    const magneticButtons = document.querySelectorAll(".magnetic");

    magneticButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.18}px, ${y * 0.18}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });

    /*======================================================
        FLOATING DECORATIONS
    ======================================================*/

    const floatingItems = document.querySelectorAll(
        ".floating, .floating-icon"
    );

    floatingItems.forEach((item, index) => {

        item.style.animation =
            `float ${5 + (index % 4)}s ease-in-out infinite`;

    });

    /*======================================================
        IMAGE REVEAL
    ======================================================*/

    const images = document.querySelectorAll(
        ".image-card img, .project-card img, .portfolio-item img"
    );

    const imageObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1)";

            imageObserver.unobserve(entry.target);

        });

    }, {

        threshold: 0.2

    });

    images.forEach(image => {

        image.style.opacity = "0";
        image.style.transform = "scale(.92)";
        image.style.transition =
            "opacity .8s ease, transform .8s ease";

        imageObserver.observe(image);

    });

    /*======================================================
        SECTION PARALLAX
    ======================================================*/

    const parallaxItems = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", () => {

        const scrollY = window.pageYOffset;

        parallaxItems.forEach(item => {

            const speed = item.dataset.speed || 0.15;

            item.style.transform =
                `translateY(${scrollY * speed}px)`;

        });

    });

    /*======================================================
        ACTIVE NAV LINK
    ======================================================*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function highlightNavigation() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (scrollY >= top && scrollY < top + height) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + section.id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", highlightNavigation);

});