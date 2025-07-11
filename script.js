// Scroll animations
document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-md', 'bg-opacity-80');
        } else {
            navbar.classList.remove('backdrop-blur-md', 'bg-opacity-80');
        }
    });

    // Animate elements when in view
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
