/*==========================================================
    PARISTA POUDEL PORTFOLIO
    Contact Page JavaScript

    Features
    - Contact Form Validation
    - Demo Form Submission
    - FAQ Accordion
    - Character Counter
    - Submit Button Animation
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================================
        CONTACT FORM
    ======================================================*/

    const form = document.getElementById("contactForm");

    if (form) {

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const submitBtn = form.querySelector("button[type='submit']");

        // Character Counter
        const counter = document.createElement("small");

        counter.id = "messageCounter";
        counter.style.display = "block";
        counter.style.marginBottom = "20px";
        counter.style.color = "#B8C0CC";

        messageInput.after(counter);

        function updateCounter() {

            counter.textContent =
                `${messageInput.value.length}/500 characters`;

        }

        updateCounter();

        messageInput.addEventListener("input", () => {

            if (messageInput.value.length > 500) {

                messageInput.value =
                    messageInput.value.substring(0, 500);

            }

            updateCounter();

        });

        // Validation

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert("Please fill in all fields.");

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            // Button Loading

            submitBtn.disabled = true;

            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            setTimeout(() => {

                submitBtn.innerHTML =
                    '<i class="fa-solid fa-circle-check"></i> Message Sent';

                alert(
                    "Thank you! This is a demo portfolio, so the message was not actually sent."
                );

                form.reset();

                updateCounter();

                setTimeout(() => {

                    submitBtn.disabled = false;

                    submitBtn.innerHTML = originalText;

                }, 2000);

            }, 1800);

        });

    }

    /*======================================================
        FAQ ACCORDION
    ======================================================*/

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer =
                question.nextElementSibling;

            const isOpen =
                answer.style.display === "block";

            document.querySelectorAll(".faq-answer")
                .forEach(item => {

                    item.style.display = "none";

                });

            if (!isOpen) {

                answer.style.display = "block";

            }

        });

    });

});