/**
 * Script for staggered fade-in animation on page load.
 * This provides a smooth, dynamic entry for the content.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements marked for initial hidden state
    const elementsToAnimate = document.querySelectorAll('.initial-hidden, .links-container a');
    
    // Base delay for the animation start
    let delay = 100;

    elementsToAnimate.forEach((element, index) => {
        // Calculate a staggered delay for each element
        // Headshot/Name comes first, then credentials, then links
        const staggerDelay = delay + (index * 150); 

        // Set the final state with a delay
        setTimeout(() => {
            element.classList.remove('initial-hidden');
            element.classList.add('fade-in');
        }, staggerDelay);
    });
});