const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'src',
  'sck',
  'fbclid',
  'gclid',
];

const STORAGE_KEY = 'rf_funnel_utms_v1';

/**
 * Captura os parâmetros de rastreamento da URL atual e persiste no sessionStorage
 * para que nenhum parâmetro seja perdido durante a navegação interna.
 */
export function captureAndPersistUtms() {
  if (typeof window === 'undefined') return {};

  const currentSearch = new URLSearchParams(window.location.search);
  let stored = {};

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = {};
  }

  let updated = false;
  TRACKED_PARAMS.forEach((key) => {
    const val = currentSearch.get(key);
    if (val && val.trim() !== '') {
      stored[key] = val.trim();
      updated = true;
    }
  });

  if (updated) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Ignore storage quota errors in strict privacy browsers
    }
  }

  return stored;
}

/**
 * Função utilitária pura que lê window.location.search (e fallback de sessão)
 * e concatena de forma segura com a URL de checkout da Kiwify/Hotmart/Cakto.
 */
export function buildCheckoutUrl(baseUrl, extraParams = {}) {
  if (!baseUrl) return '/';
  if (typeof window === 'undefined') return baseUrl;

  const persisted = captureAndPersistUtms();
  const currentSearch = new URLSearchParams(window.location.search);

  try {
    const targetUrl = new URL(baseUrl, window.location.origin);

    Object.entries(persisted).forEach(([k, v]) => {
      if (v && !targetUrl.searchParams.has(k)) {
        targetUrl.searchParams.set(k, v);
      }
    });

    currentSearch.forEach((value, key) => {
      if (value) {
        targetUrl.searchParams.set(key, value);
      }
    });

    Object.entries(extraParams).forEach(([k, v]) => {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        targetUrl.searchParams.set(k, String(v).trim());
      }
    });

    return targetUrl.toString();
  } catch {
    const queryString = window.location.search.replace(/^\?/, '');
    if (!queryString) return baseUrl;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${queryString}`;
  }
}
