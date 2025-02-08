    document.addEventListener("DOMContentLoaded", function () {
        const roles = ["Frontend Developer", "Web Designer", "AI/ML Enthusiast", "Coder"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const typingText = document.getElementById("typing-text");
            let currentRole = roles[roleIndex];

            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex--);
            } else {
                typingText.textContent = currentRole.substring(0, charIndex++);
            }

            let typingSpeed = isDeleting ? 100 : 150;

            if (!isDeleting && charIndex === currentRole.length + 1) {
                isDeleting = true;
                typingSpeed = 1000; // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    });
