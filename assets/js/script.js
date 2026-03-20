// Smooth Scrolling Navigation
const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = currentTime => {
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed / duration);
        window.scrollTo(0, startPosition + run * targetPosition);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Mobile Menu Hamburger Toggle
const toggleHamburger = () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
};

toggleHamburger();

// Interactive Button Hover Effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover-effect');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover-effect');
    });
});

// Smooth Animations
const animatedElements = document.querySelectorAll('.animate');
const showOnScroll = () => {
    animatedElements.forEach(el => {
        const elementBottom = el.getBoundingClientRect().bottom;
        const isVisible = elementBottom < window.innerHeight;
        if (isVisible) {
            el.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();
