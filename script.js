document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navbar");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const productItems = document.querySelectorAll(".product-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    productItems.forEach(item => observer.observe(item));
});
