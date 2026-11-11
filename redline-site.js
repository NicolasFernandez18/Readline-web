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

    const cookieNotice = document.getElementById('cookie-notice');
    const cookieToast = document.getElementById('cookie-toast');
    const cookiePreferencesTrigger = document.getElementById('cookie-preferences-trigger');
    const cookieConsentName = 'redline_consent_v2';

    const readCookieConsent = () => {
        const consentCookie = document.cookie
            .split(';')
            .map((cookie) => cookie.trim())
            .find((cookie) => cookie.startsWith(`${cookieConsentName}=`));

        return consentCookie ? consentCookie.split('=')[1] : null;
    };

    const loadAnalytics = () => {
        if (typeof window.redlineGoogleAnalyticsConsent === 'function') {
            window.redlineGoogleAnalyticsConsent(true);
            return;
        }

        if (document.querySelector('script[data-consent-analytics]')) return;

        const analyticsScript = document.createElement('script');
        analyticsScript.src = 'dist/analytics.js';
        analyticsScript.async = true;
        analyticsScript.dataset.consentAnalytics = 'true';
        document.head.append(analyticsScript);
    };

    const disableAnalytics = () => {
        if (typeof window.redlineGoogleAnalyticsConsent === 'function') {
            window.redlineGoogleAnalyticsConsent(false);
        }
    };

    let toastTimeout;

    const showCookieToast = (message) => {
        window.clearTimeout(toastTimeout);
        cookieToast.textContent = message;
        cookieToast.hidden = false;
        cookieToast.dataset.visible = 'true';

        toastTimeout = window.setTimeout(() => {
            cookieToast.dataset.visible = 'false';
            window.setTimeout(() => {
                cookieToast.hidden = true;
            }, 200);
        }, 4000);
    };

    if (cookieNotice && cookieToast && cookiePreferencesTrigger) {
        const savedConsent = readCookieConsent();
        const acceptButton = document.getElementById('cookie-accept');
        const rejectButton = document.getElementById('cookie-reject');

        if (savedConsent === 'accepted') {
            loadAnalytics();
        } else if (savedConsent !== 'necessary') {
            cookieNotice.hidden = false;
        }

        const saveConsent = (consent) => {
            const secureAttribute = window.location.protocol === 'https:' ? '; Secure' : '';
            document.cookie = `${cookieConsentName}=${consent}; Max-Age=15552000; Path=/; SameSite=Lax${secureAttribute}`;

            if (readCookieConsent() !== consent) {
                showCookieToast('No se pudo guardar tu preferencia. Revisá la configuración de cookies del navegador.');
                return;
            }

            if (consent === 'accepted') {
                loadAnalytics();
            } else {
                disableAnalytics();
            }
            cookieNotice.hidden = true;
            cookiePreferencesTrigger.focus();
            showCookieToast('Listo, guardamos tu elección.');
        };

        acceptButton.addEventListener('click', () => saveConsent('accepted'));
        rejectButton.addEventListener('click', () => saveConsent('necessary'));

        cookiePreferencesTrigger.addEventListener('click', () => {
            window.clearTimeout(toastTimeout);
            cookieToast.hidden = true;
            cookieNotice.hidden = false;
            acceptButton.focus();
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
