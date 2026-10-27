import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { handleCheckoutRedirect } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

export function Hero({ offer }) {
  const checkoutHref = buildCheckoutUrl(offer.checkoutUrl, { oferta: offer.id });

  return (
    <header className="relative overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] pt-8 pb-14 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Coluna de Copy Principal */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{offer.kicker}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-white">
            {offer.headline}{' '}
            <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-wavy underline-offset-4">
              {offer.headlineHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-muted-on-dark)] leading-relaxed max-w-2xl">
            {offer.subheadline}
          </p>

          <ul className="space-y-2.5 pt-1">
            {offer.heroBullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 space-y-3">
            <a
              href={checkoutHref}
              onClick={(e) => handleCheckoutRedirect(e, offer.checkoutUrl, offer)}
              className="cta-pulse w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[var(--color-cta-bg)] hover:bg-[var(--color-cta-hover)] text-[var(--color-cta-text)] font-bold text-base sm:text-lg shadow-lg transition-all cursor-pointer text-center"
            >
              <span>{offer.ctaText}</span>
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>{offer.ctaSubtext}</span>
            </div>
          </div>
        </div>

        {/* Coluna Visual / Mockup de Alta Conversão */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md rounded-2xl bg-[var(--color-bg-dark-elevated)] p-3 sm:p-4 border border-white/15 shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40">
              <img
                src={offer.heroImage}
                alt={offer.name}
                width="640"
                height="480"
                fetchpriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-sm border border-white/15 rounded-lg p-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Acesso Digital Imediato
                  </p>
                  <p className="text-sm font-bold text-white">{offer.heroBadge}</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-600 text-white text-xs font-extrabold whitespace-nowrap">
                  R$ {offer.priceNumber},00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
