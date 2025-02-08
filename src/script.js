// document.addEventListener("DOMContentLoaded", function () {
//     const colorPicker = document.querySelector(".color-picker");

//     // Show color picker after scrolling 300px
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             colorPicker.classList.add("show");
//         } else {
//             colorPicker.classList.remove("show");
//         }
//     });

//     // Theme change functionality
//     document.querySelectorAll(".color-option").forEach(color => {
//         color.addEventListener("click", function () {
//             let selectedColor = getComputedStyle(this).backgroundColor;
//             document.documentElement.style.setProperty("--bg-color", selectedColor);
//             document.documentElement.style.setProperty("--text-color", selectedColor === "#312b2b" ? "#fff" : "#333");
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Add 'active' class to clicked link
            this.classList.add("active");
        });
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const colorPickerBtn = document.getElementById("colorPickerBtn");
        const colorPicker = document.getElementById("colorPicker");
        const colorOptions = document.querySelectorAll(".color-option");

        // Toggle color picker display
        colorPickerBtn.addEventListener("click", function (event) {
            colorPicker.classList.toggle("active");
            event.stopPropagation(); // Prevent closing on click
        });

        // Close color picker if clicked outside
        document.addEventListener("click", function () {
            colorPicker.classList.remove("active");
        });

        // Prevent closing when clicking inside the color picker
        colorPicker.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        // Change button color when a color is selected
        colorOptions.forEach(option => {

            option.addEventListener("click", function () {
                const textColor = option.getAttribute("data-bg"); // Get text color from data attribute
                document.documentElement.style.setProperty("--text-color", textColor); // Change text color globally
        
                colorPicker.classList.remove("active"); // Close picker
            });
        });
    });

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box', {origin: 'bottom'});
ScrollReveal().reveal('.contact-info, #amazon, .about-img', {origin: 'left'});
ScrollReveal().reveal('form, #cybergyan, .about-content', {origin: 'right'});
ScrollReveal().reveal('#Sankrail', {origin: 'left'});
ScrollReveal().reveal('#iiests, ',{origin: 'right'});

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);



