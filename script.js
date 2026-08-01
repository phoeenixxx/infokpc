document.addEventListener("DOMContentLoaded", () => {
    const textToType = "FRONT-END დეველოპმენტი";
    const typewriterElement = document.getElementById("typewriter-text");
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const faqItem = btn.parentElement;
            const isActive = faqItem.classList.contains("active");
            
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                faqItem.classList.add("active");
            }
        });
    });
});