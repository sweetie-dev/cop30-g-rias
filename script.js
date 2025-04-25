document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        
        let currentSlide = 0;
        const slideCount = slides.length;

        // Function to update carousel position
        function updateCarousel() {
            container.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Initialize first slide
        updateCarousel();

        // Previous button click handler
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateCarousel();
        });

        // Next button click handler
        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        });

        // Auto-advance functionality
        let autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        }, 5000);

        // Pause auto-slide on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });

        // Resume auto-slide when mouse leaves
        carousel.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateCarousel();
            }, 5000);
        });
    });
}); 