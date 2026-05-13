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
    navbar.classList.toggle('shadow-md', window.scrollY > 20);
  });
}

// ── Menu page: tab switching ──────────────────────────────────────────
const tabs     = document.querySelectorAll('.menu-tab');
const sections = document.querySelectorAll('.menu-section');

if (tabs.length && sections.length) {
  // Show first section by default
  sections[0].classList.add('active');
  tabs[0].classList.add('active');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;

      // Update tab styles
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show matching section
      sections.forEach(s => s.classList.remove('active'));
      const targetSection = document.getElementById(target);
      if (targetSection) targetSection.classList.add('active');

      // Scroll to top of menu content smoothly
      const menuContent = document.getElementById('menu-content');
      if (menuContent) {
        const offset = menuContent.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

// ── Reservation / Contact form ────────────────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Request received! We\'ll confirm within a few hours.';
    btn.style.backgroundColor = '#4a7c59';
    btn.disabled = true;
  });
}
