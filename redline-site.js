document.addEventListener('DOMContentLoaded', () => {
    const updateMotionVisibility = () => {
        document.documentElement.dataset.motionHidden = String(document.hidden);
    };

    document.addEventListener('visibilitychange', updateMotionVisibility);
    updateMotionVisibility();

    const menuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        const menuIcon = menuButton.querySelector('i');

        const setMenuOpen = (isOpen) => {
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            mobileMenu.dataset.open = String(isOpen);
            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
            mobileMenu.inert = !isOpen;
            document.body.classList.toggle('menu-open', isOpen);

            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars', !isOpen);
                menuIcon.classList.toggle('fa-xmark', isOpen);
            }
        };

        setMenuOpen(false);

        menuButton.addEventListener('click', () => {
            setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
        });

        mobileMenu.addEventListener('click', (event) => {
            if (event.target.closest('a')) setMenuOpen(false);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
                menuButton.focus();
            }
        });

        window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
            if (event.matches) setMenuOpen(false);
        });
    }

    const form = document.getElementById('contact-form');

    if (form) {
        const successMessage = document.getElementById('form-success-msg');
        const errorMessage = document.getElementById('form-error-msg');
        const submitButton = document.getElementById('submit-btn');
        const submitLabel = submitButton.querySelector('.submit-label');
        const originalLabel = submitLabel.textContent;

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            successMessage.hidden = true;
            errorMessage.hidden = true;
            submitButton.disabled = true;
            submitButton.setAttribute('aria-busy', 'true');
            submitLabel.textContent = 'Enviando...';

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { Accept: 'application/json' }
                });

                if (response.ok) {
                    successMessage.hidden = false;
                    form.reset();
                } else {
                    errorMessage.hidden = false;
                }
            } catch {
                errorMessage.hidden = false;
            } finally {
                submitButton.disabled = false;
                submitButton.removeAttribute('aria-busy');
                submitLabel.textContent = originalLabel;
            }
        });
    }
});
