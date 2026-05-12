// ─── MOBILE MENU TOGGLE ───────────────────────────────────────────────────────
// Finds the hamburger button and the hidden mobile nav, then toggles visibility.
// Tailwind's "hidden" class sets display:none — toggling it shows/hides the menu.

const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu automatically when any link inside it is tapped
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});


// ─── NAV SHADOW ON SCROLL ─────────────────────────────────────────────────────
// Adds a subtle shadow to the nav bar once the user scrolls past the hero.
// Gives visual depth and reinforces that the nav is sticky.

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('shadow-md');
  }
});


// ─── CONTACT FORM SUBMISSION ──────────────────────────────────────────────────
// Prevents the default page reload on submit and shows a friendly message.
// When we're ready to go live, we'll replace this with a real form service
// (like Formspree) — no backend needed.

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '✓ Sent! Tara will be in touch soon.';
  btn.classList.remove('bg-sage-dark', 'hover:bg-sage-mid');
  btn.classList.add('bg-sage-mid', 'cursor-default');
  btn.disabled = true;
});
