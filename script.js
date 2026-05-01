// year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// theme toggle (default applied pre-paint by inline script in <head>)
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// active link highlight on scroll
const sectionIds = ['about','experience','projects','skills','education','contact'];
const sections = sectionIds
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

const byHash = new Map(navAnchors.map(a => [a.getAttribute('href').slice(1), a]));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const a = byHash.get(e.target.id);
    if (!a) return;
    if (e.isIntersecting) {
      navAnchors.forEach(x => x.style.color = '');
      a.style.color = 'var(--accent)';
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => io.observe(s));

// reveal-on-scroll fade-in for cards
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      reveal.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document
  .querySelectorAll('.t-card, .project, .skill-card, .edu-card, .c-card, .hero-stats > div')
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
    reveal.observe(el);
  });
