// script.js

// Smooth scrolling navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Event listeners for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Interactive button effects
const buttons = document.querySelectorAll('.interactive-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
});
