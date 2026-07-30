/*==========================================================
    PARISTA POUDEL PORTFOLIO
    Typing Animation
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const words = [
        "Software Engineer",
        "Frontend Developer",
        "UI Designer",
        "B.Sc. CSIT Student"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    const typingSpeed = 100;
    const deletingSpeed = 55;
    const pauseTime = 1800;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            letterIndex++;

            typingElement.textContent =
                currentWord.substring(0, letterIndex);


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, pauseTime);

                return;
            }

        } else {

            letterIndex--;

            typingElement.textContent =
                currentWord.substring(0, letterIndex);


            if (letterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

                // Immediately start next word
                setTimeout(typeEffect, 200);

                return;
            }
        }


        setTimeout(
            typeEffect,
            deleting ? deletingSpeed : typingSpeed
        );

    }

    typeEffect();

});