// Small UI helpers: nav toggle, smooth scroll, contact form demo
document.addEventListener('DOMContentLoaded', () => {
    // year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // nav toggle for mobile
    const toggle = document.querySelector('nav-toggle');
    const navList = document.getElementById('nav-list');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('visible');
    });

    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = this.getAttribute('href');
            if (target.length > 1) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({behaviour: 'smooth', block:'start'});
                // close mobile nav
                if(navList.classList.constains('visible')) navList.classList.remove('visible');
            }
        });
    });
});

// demo handler for contact form (replace with real backend or Formspree)
function handleContactForm(event) {
    event.preventDefault();
    const note = document.getElementById('form-note');
    note.textContent = 'Thank you for your message! This is a demo form, so no message was actually sent.';
    event.target.reset();
}

