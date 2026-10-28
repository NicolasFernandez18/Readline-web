(() => {
  const header = document.querySelector('header');
  if (!header) return;
  const desktopNav = header.querySelector('nav');
  if (desktopNav) {
    const toggle = document.createElement('button');
    toggle.className = 'rl-mobile-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'rl-mobile-menu');
    toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    const menu = document.createElement('nav');
    menu.className = 'rl-mobile-menu';
    menu.id = 'rl-mobile-menu';
    menu.setAttribute('aria-label', 'Navegación móvil');
    [...desktopNav.querySelectorAll('a')].forEach((link) => {
      const clone = link.cloneNode(true);
      clone.classList.remove('hidden', 'md:flex', 'text-redline-red', 'font-bold');
      if (link.href === window.location.href || link.pathname === window.location.pathname) {
        clone.setAttribute('aria-current', 'page');
      }
      menu.appendChild(clone);
    });
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      toggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      menu.classList.toggle('is-open', open);
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú de navegación');
        toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      }
    });
    header.firstElementChild?.appendChild(toggle);
    header.appendChild(menu);
  }

  // Reveal is progressive enhancement: content remains visible if JS/observer is unavailable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const candidates = document.querySelectorAll('main h1, main > div, main section, main .grid > *');
    candidates.forEach((el) => {
      if (el.closest('header')) return;
      el.classList.add('rl-reveal');
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    candidates.forEach((el) => observer.observe(el));
  }
})();
