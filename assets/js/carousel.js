document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');

    let currentIndex = 0; // Track the currently active image

    // Function to update the active carousel item
    const updateCarousel = () => {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Slide effect: move the carousel
        const offset = currentIndex * -100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Cycle to the previous image
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; // Cycle to the next image
        updateCarousel();
    });

    // Initialize the carousel to display the first item
    updateCarousel();
});
