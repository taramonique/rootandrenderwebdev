// Mobile menu toggle
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

// Nav shadow on scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 1px 0 rgba(184,148,31,0.15)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// ── Menu page: tab switching ──────────────────────────────────────────
const tabs     = document.querySelectorAll('.menu-tab');
const sections = document.querySelectorAll('.menu-section');

if (tabs.length && sections.length) {
  sections[0].classList.add('active');
  tabs[0].classList.add('active');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      sections.forEach(s => s.classList.remove('active'));
      const targetSection = document.getElementById(target);
      if (targetSection) targetSection.classList.add('active');

      const menuContent = document.getElementById('menu-content');
      if (menuContent) {
        const offset = menuContent.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

// ── Reservation form ──────────────────────────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Request received — we\'ll confirm by phone shortly.';
    btn.style.borderColor = '#2A4A2E';
    btn.style.color = '#2A4A2E';
    btn.disabled = true;
  });
}
