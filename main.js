document.addEventListener('DOMContentLoaded', () => {
    /* ===========================
       1) MENÚ / DROPDOWNS
    =========================== */
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (!link) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdowns.forEach(d => d !== dropdown && d.classList.remove('active'));
            dropdown.classList.toggle('active');
        });
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const parentLi = link.closest('li');
                if (!parentLi.classList.contains('dropdown')) {
                    mobileMenu?.classList.remove('active');
                    navMenu?.classList.remove('active');
                    dropdowns.forEach(d => d.classList.remove('active'));
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth > 768 && !e.target.closest('.dropdown')) {
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenu?.classList.remove('active');
            navMenu?.classList.remove('active');
        } else {
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    /* ===========================
       2) CARRUSEL
    =========================== */
    const carousels = document.querySelectorAll('.carousel, .hero-carousel');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.querySelectorAll('img'));
        let currentIndex = 0;
        let autoSlideInterval;

        function updateCarousel() {
            const slideWidth = carousel.clientWidth;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function startAutoSlide() {
            if (carousel.classList.contains('hero-carousel')) {
                autoSlideInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }, 9000);
            }
        }

        if (carousel.classList.contains('hero-carousel')) {
            startAutoSlide();
        }

        window.addEventListener('resize', updateCarousel);

        if (carousel.classList.contains('carousel')) {
            const prevBtn = carousel.querySelector('.carousel-btn.prev');
            const nextBtn = carousel.querySelector('.carousel-btn.next');
            const indicators = Array.from(carousel.querySelectorAll('.carousel-indicators .material-symbols-outlined'));

            function updateIndicators(index) {
                indicators.forEach((ind, i) => {
                    if (i === index) {
                        ind.textContent = "radio_button_checked";
                        ind.classList.add("active");
                    } else {
                        ind.textContent = "radio_button_unchecked";
                        ind.classList.remove("active");
                    }
                });
            }

            nextBtn?.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
                updateIndicators(currentIndex);
            });

            prevBtn?.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel();
                updateIndicators(currentIndex);
            });

            indicators.forEach((ind, i) => {
                ind.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                    updateIndicators(currentIndex);
                });
            });

            updateIndicators(currentIndex);
        }

        updateCarousel();
    });
});