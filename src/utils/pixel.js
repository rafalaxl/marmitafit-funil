import { buildCheckoutUrl } from './utm';

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '';

/**
 * Inicializa o Meta Pixel condicionalmente se o ID estiver configurado.
 */
export function initMetaPixel() {
  if (typeof window === 'undefined' || !PIXEL_ID) return;
  if (window.fbq) return;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', PIXEL_ID);
}

export function trackPageView(contentName) {
  if (typeof window === 'undefined') return;
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
    if (contentName) {
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        currency: 'BRL',
      });
    }
  }
}

/**
 * Dispara o evento InitiateCheckout com valores numéricos puros (float)
 * e redireciona preservando todas as UTMs.
 */
export function handleCheckoutRedirect(e, baseUrl, offerMeta) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const numericPrice = typeof offerMeta?.priceNumber === 'number' ? offerMeta.priceNumber : 37.0;

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      content_name: offerMeta?.name || 'Infoproduto Low-Ticket',
      content_ids: [offerMeta?.id || 'main-offer'],
      content_type: 'product',
      value: numericPrice,
      currency: 'BRL',
      num_items: 1,
    });
  }

  const destination = buildCheckoutUrl(baseUrl, {
    oferta: offerMeta?.id || 'principal',
  });

  if (typeof window !== 'undefined') {
    window.location.href = destination;
  }
}
