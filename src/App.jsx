import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { marmitaOffer } from './data/marmitaOffer';
import { donutsOffer } from './data/donutsOffer';

export function App() {
  const [pathname, setPathname] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (newPath) => {
    if (typeof window === 'undefined') return;
    const search = window.location.search || '';
    window.history.pushState({}, '', `${newPath}${search}`);
    setPathname(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const normalized = pathname.replace(/\/+$/, '') || '/';

  if (normalized === '/termos') {
    return <TermsPage onNavigate={navigate} />;
  }

  if (normalized === '/privacidade') {
    return <PrivacyPage onNavigate={navigate} />;
  }

  if (normalized === '/baby-donuts' || normalized === '/donuts') {
    return <LandingPage offer={donutsOffer} onNavigate={navigate} />;
  }

  return <LandingPage offer={marmitaOffer} onNavigate={navigate} />;
}

export default App;
