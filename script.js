// ============================================
// RedLine.web — interactions
// ============================================
document.addEventListener('DOMContentLoaded', () => {

  // Trigger the hero load sequence
  requestAnimationFrame(() => document.body.classList.add('is-ready'));

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Header: hide on scroll down, show on scroll up + scroll progress ---
  const header = document.getElementById('siteHeader');
  const progressBar = document.getElementById('scrollProgress');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y > lastScrollY && y > 160) {
      header.classList.add('is-hidden');
    } else {
      header.classList.remove('is-hidden');
    }
    lastScrollY = y;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';

    // back-to-top visibility
    toTopBtn.classList.toggle('is-visible', y > 700);
  }, { passive: true });

  // --- Back to top ---
  const toTopBtn = document.getElementById('toTop');
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Footer year ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Contact form: builds a WhatsApp / email message from the fields ---
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const whatsappLink = document.getElementById('whatsappLink');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      formNote.textContent = 'Completá los campos antes de enviar.';
      formNote.classList.remove('is-success');
      form.reportValidity();
      return;
    }

    const nombre = form.nombre.value.trim();
    const negocio = form.negocio.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    const texto = `Hola RedLine.web! Soy ${nombre} (${negocio}). ${mensaje} — Contacto: ${email}`;
    const url = `https://wa.me/5490000000000?text=${encodeURIComponent(texto)}`;

    formNote.textContent = 'Te llevamos a WhatsApp para enviar tu mensaje...';
    formNote.classList.add('is-success');

    window.open(url, '_blank', 'noopener');
    form.reset();
  });

  // --- Hero canvas: subtle speed-line particles (one deliberate motion moment) ---
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles = [];
  let heroEl = canvas.closest('.hero');

  function resizeCanvas() {
    canvas.width = heroEl.offsetWidth;
    canvas.height = heroEl.offsetHeight;
  }

  function createParticles() {
    const count = Math.max(14, Math.floor(canvas.width / 90));
    particles = Array.from({ length: count }, () => spawnParticle());
  }

  function spawnParticle(fromEdge = false) {
    return {
      x: fromEdge ? -60 : Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      len: 40 + Math.random() * 90,
      speed: 1.2 + Math.random() * 2.4,
      opacity: 0.08 + Math.random() * 0.18
    };
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      const gradient = ctx.createLinearGradient(p.x, p.y, p.x + p.len, p.y);
      gradient.addColorStop(0, 'rgba(217,30,54,0)');
      gradient.addColorStop(1, `rgba(255,77,99,${p.opacity})`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.len, p.y);
      ctx.stroke();

      p.x += p.speed;
      if (p.x > canvas.width + p.len) {
        Object.assign(p, spawnParticle(true));
      }
    });
    requestAnimationFrame(drawParticles);
  }

  if (!prefersReducedMotion) {
    resizeCanvas();
    createParticles();
    drawParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  }

  // --- Active nav link on scroll ---
  const sections = ['servicios', 'proceso', 'portfolio', 'contacto']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(mainNav.querySelectorAll('a'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? 'var(--paper)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
});
