
function switchTab(event, tabId) {
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .industry-card, .x-content, .x-image, .dev-content, .code-window, .trust-section');

    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        // Add specific interaction delays for grid items if needed
        if (el.classList.contains('feature-card') || el.classList.contains('industry-card')) {
            el.style.transitionDelay = `${(index % 3) * 100}ms`;
        }
        observer.observe(el);
    });
});
