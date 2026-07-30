/*==========================================================
    PARISTA POUDEL PORTFOLIO
    Portfolio Filter

    Categories:
    - All
    - Web
    - Academic
    - UI/UX
    - Personal
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // Exit safely if the page doesn't have portfolio elements
    if (!filterButtons.length || !portfolioItems.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active state
            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter = button.dataset.filter.toLowerCase();

            portfolioItems.forEach(item => {

                const category =
                    item.dataset.category.toLowerCase();

                if (filter === "all" || filter === category) {

                    item.style.display = "block";

                    requestAnimationFrame(() => {

                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";

                    });

                }

                else {

                    item.style.opacity = "0";
                    item.style.transform = "scale(.9)";

                    setTimeout(() => {

                        item.style.display = "none";

                    }, 250);

                }

            });

        });

    });

});