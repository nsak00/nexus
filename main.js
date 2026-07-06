/* ==========================================================================
   NEXUS // The Gallery Collection
   Script principal: scroll suave, partículas, parallax y animaciones GSAP
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. LENIS SMOOTH SCROLL ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // --- 2. GENERACIÓN DE PARTÍCULAS AMBIENTALES DE ENSUEÑO ---
    const pContainer = document.getElementById('particle-container');
    if (pContainer) {
        for (let i = 0; i < 25; i++) {
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            dot.style.width = (Math.random() * 4 + 2) + 'px';
            dot.style.height = dot.style.width;
            dot.style.borderRadius = '50%';
            dot.style.background = '#e7c584';
            dot.style.opacity = Math.random() * 0.4 + 0.1;
            dot.style.filter = 'blur(1px)';
            pContainer.appendChild(dot);

            // Flujo orgánico continuo de polvo dorado
            gsap.to(dot, {
                y: "-=" + (30 + Math.random() * 50),
                x: "+=" + (Math.random() * 30 - 15),
                duration: 6 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        }
    }

    // --- 3. BUCLE DE VAIVÉN SEGURO PARA ELEMENTOS RELIQUIA ---
    const relics = ['[data-layer="sneaker"]', '[data-layer="sneaker3"]', '[data-layer="sneaker6"]'];
    relics.forEach((sel, i) => {
        const el = document.querySelector(sel);
        if (el) {
            gsap.to(el, {
                y: '+=15',
                rotate: i % 2 === 0 ? 2 : -2,
                duration: 3.5 + i * 0.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        }
    });

    // --- 4. REVEALS ESTÁNDAR POR SCROLL ---
    document.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 82%'
            }
        });
    });

    // --- 5. PARALLAX MEDIDO: SECCIÓN 1 (HERO) ---
    gsap.to('[data-scene="1"] [data-layer="bg"]', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="1"]', start: 'top top', end: 'bottom top', scrub: 0.5 }
    });
    gsap.to('[data-scene="1"] [data-layer="sneaker"]', {
        yPercent: -25,
        rotate: 8,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="1"]', start: 'top top', end: 'bottom top', scrub: 0.5 }
    });

    // --- 6. PARALLAX MEDIDO: SECCIÓN 3 (EL JARDÍN) ---
    gsap.to('[data-scene="3"] [data-layer="bg3"]', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="3"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });
    gsap.to('[data-scene="3"] [data-layer="painting"]', {
        scale: 1.05,
        yPercent: -3,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="3"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });
    gsap.to('[data-scene="3"] [data-layer="sneaker3"]', {
        yPercent: -50,
        xPercent: 15,
        rotate: -6,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="3"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });

    // --- 7. STAGGER ENTRANCE DE EDICIONES (SECCIÓN 4) ---
    gsap.from('[data-scene="4"] [data-card]', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '[data-scene="4"]', start: 'top 75%' }
    });

    // --- 8. REVEAL CINEMÁTICO DE PALABRAS (SECCIÓN 5) ---
    const splitTitle = document.querySelector('[data-split-title]');
    if (splitTitle) {
        const words = splitTitle.textContent.trim().split(' ');
        splitTitle.innerHTML = words.map(w => `
            <span style="display:inline-block; overflow:hidden; vertical-align:top;">
                <span class="word-span" style="display:inline-block;">${w}&nbsp;</span>
            </span>
        `).join('');

        gsap.from(splitTitle.querySelectorAll('.word-span'), {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.05,
            scrollTrigger: { trigger: splitTitle, start: 'top 80%' }
        });
    }

    // --- 9. PARALLAX MEDIDO: SECCIÓN 6 (LA ASCENSIÓN) ---
    gsap.to('[data-scene="6"] [data-layer="bg6"]', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="6"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });
    gsap.to('[data-scene="6"] [data-layer="painting6"]', {
        scale: 1.04,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="6"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });
    gsap.to('[data-scene="6"] [data-layer="sneaker6"]', {
        yPercent: -80,
        rotate: 10,
        ease: 'none',
        scrollTrigger: { trigger: '[data-scene="6"]', start: 'top top', end: 'bottom bottom', scrub: 0.6 }
    });

    // --- 10. CONTROL DINÁMICO DEL DETECTOR DE ESCENAS ---
    const counterEl = document.querySelector('[data-scene-counter]');
    document.querySelectorAll('[data-scene]').forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => {
                if (self.isActive && counterEl) {
                    const sceneNum = el.getAttribute('data-scene');
                    counterEl.textContent = sceneNum.padStart(2, '0') + ' / 08';
                }
            }
        });
    });

    // --- 11. RATÓN INTERACTIVO SUTIL (HERO ACCENT) ---
    const heroSection = document.querySelector('[data-scene="1"]');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to('[data-scene="1"] [data-layer="sneaker"]', { x: mouseX * 30, y: mouseY * 30, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
            gsap.to('[data-hero-title]', { x: mouseX * -15, y: mouseY * -15, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
        });
    }
});
