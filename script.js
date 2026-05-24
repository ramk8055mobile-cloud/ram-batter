// Version: 1.5
// Feature Registry:
// - 1.1: Merged missing sections from new.html (Story, Process, Testimonials) and updated price.
// - 1.2: Mobile optimization and testimonial location updates.
// - 1.3: Removed WhatsApp, implemented dynamic footer year.
// - 1.4: Fixed image path (.jpeg to .jpg), added missing updateYear(), and stabilized language switch.
// - 1.5: Reduced language switch width and fixed navbar flex alignment.

function updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

function setLanguage(lang) {
    document.body.className = 'lang-' + lang;
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-ta').classList.remove('active');
    document.getElementById('btn-' + lang).classList.add('active');
}

const animateOnScroll = () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.hero-content, .f-card, .glass-box, .story-section, .process-card, .comparison-card, .t-card, .order-section');
    elements.forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    updateYear();
});

// Add styles for the reveal animation to the head
const style = document.createElement('style');
style.textContent = `
    .reveal-init {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        will-change: opacity, transform;
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
