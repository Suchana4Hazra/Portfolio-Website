// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         document.body.classList.add("loaded"); // Reveal content
        
//         // Remove the door container from the DOM
//         const doorContainer = document.querySelector(".door-container");
//         if (doorContainer) {
//             doorContainer.remove();
//         }
//     }, 1500); // Matches the door animation time
// });

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded"); // Reveal content smoothly
        
        // Fade out and remove the door container
        const doorContainer = document.querySelector(".door-container");
        if (doorContainer) {
            doorContainer.style.opacity = "0"; // Smooth fade-out effect
            setTimeout(() => {
                doorContainer.remove(); // Remove after fade-out
            }, 500); // Wait for fade-out to complete
        }
    }, 1500); // Matches the door animation time
});
