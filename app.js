// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".badge", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.2
});

gsap.from("h1", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.4
});

gsap.from(".hero-subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.6
});

gsap.from(".hero-cta", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.8
});

// Scroll Animations for Services
gsap.utils.toArray('.services .card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
    });
});

// Scroll Animations for Portfolio Projects
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: (i % 2) * 0.2 // Stagger slightly for grid items
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Mouse movement glow effect tracking
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Very subtle background grid movement based on mouse
    gsap.to('.bg-grid', {
        x: (x - 0.5) * -20,
        y: (y - 0.5) * -20,
        duration: 2,
        ease: "power2.out"
    });
});
