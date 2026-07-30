/*==========================================================
    PARISTA POUDEL PORTFOLIO
    Premium Custom Cursor
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    // Exit safely if cursor elements don't exist
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    // Track mouse position
    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    // Smooth cursor movement
    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    // Elements that should enlarge the cursor
    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .project-card, .service-card, .tech-card, .portfolio-item"
    );

    hoverElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
            cursor.style.borderColor = "#6C63FF";
            cursor.style.background = "rgba(108,99,255,0.15)";

        });

        element.addEventListener("mouseleave", () => {

            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.borderColor = "#00D4FF";
            cursor.style.background = "transparent";

        });

    });

    // Hide cursor when leaving the browser window
    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";
        dot.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";
        dot.style.opacity = "1";

    });

    // Hide custom cursor on touch devices
    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {

        cursor.style.display = "none";
        dot.style.display = "none";

    }

});