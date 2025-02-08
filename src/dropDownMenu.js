// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu');
    const navbar = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.navbar a'); // Get all the nav links

    // Toggle the 'active' class on the navbar when the menu icon is clicked
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Hide the menu when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active'); // Remove 'active' to hide the menu
        });
    });
});


