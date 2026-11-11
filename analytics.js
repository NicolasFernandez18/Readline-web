const measurementId = 'G-VDFW5FGK14';
const consentCookieName = 'redline_consent_v2';
const disableFlagName = `ga-disable-${measurementId}`;

const readConsent = () => document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${consentCookieName}=`))
    ?.split('=')[1];

const startGoogleAnalytics = () => {
    if (window.redlineGoogleAnalyticsStarted) return;

    window.redlineGoogleAnalyticsStarted = true;
    window[disableFlagName] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const googleTag = document.createElement('script');
    googleTag.async = true;
    googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(googleTag);
};

window.redlineGoogleAnalyticsConsent = (isAllowed) => {
    window[disableFlagName] = !isAllowed;

    if (isAllowed) {
        if (!window.redlineGoogleAnalyticsStarted) {
            startGoogleAnalytics();
            return;
        }

        window.gtag('consent', 'update', { analytics_storage: 'granted' });
        window.gtag('event', 'page_view');
    } else if (window.redlineGoogleAnalyticsStarted) {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
};

window[disableFlagName] = readConsent() !== 'accepted';
if (readConsent() === 'accepted') startGoogleAnalytics();
