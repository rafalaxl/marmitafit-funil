import React from 'react';
import { CheckCircle2, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { handleCheckoutRedirect } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

export function PricingSection({ offer }) {
  const checkoutHref = buildCheckoutUrl(offer.checkoutUrl, { oferta: offer.id });

  return (
    <section id="oferta" className="py-14 sm:py-20 px-4 bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Condição Especial por Tempo Limitado
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Comece Hoje por Menos que o Valor de um Lanche no Fim de Semana
          </h2>
        </div>

        <div className="rounded-3xl bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] p-6 sm:p-10 shadow-2xl border-2 border-emerald-500/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[var(--color-border-subtle)]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-brand-primary)]">
                Pacote Completo + 3 Bônus Inclusos
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                {offer.name}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs text-slate-500 line-through">
                De R$ {offer.originalPriceNumber},00 por apenas:
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-700">
                R$ {offer.priceNumber},00
              </p>
              <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                à vista no PIX ou em {offer.installmentsText}
              </p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {offer.modules.map((m, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-text-primary)]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>{m.tag}:</strong> {m.title}
                </span>
              </li>
            ))}
            {offer.bonuses.map((b, idx) => (
              <li key={`b-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-text-primary)]">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>{b.title}</strong> <span className="text-xs text-emerald-700 font-bold">(Incluso Grátis)</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-2 space-y-3">
            <a
              href={checkoutHref}
              onClick={(e) => handleCheckoutRedirect(e, offer.checkoutUrl, offer)}
              className="cta-pulse w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--color-cta-bg)] hover:bg-[var(--color-cta-hover)] text-white font-extrabold text-base sm:text-lg shadow-lg transition-all cursor-pointer text-center"
            >
              <span>{offer.ctaText}</span>
              <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--color-text-secondary)] pt-1">
              <span className="inline-flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                Ambiente 100% Criptografado
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                Liberação Imediata no E-mail
              </span>
            </div>
          </div>
        </div>

        {/* Selo de Garantia Incondicional de 7 Dias */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-dark-elevated)] border border-white/15 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-amber-300" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Garantia Incondicional de 7 Dias — Risco Zero para Você
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Entre, acesse todo o material, baixe as apostilas e teste as receitas. Se por qualquer motivo você achar que não valeu cada centavo dos R$ {offer.priceNumber},00, basta pedir o reembolso em até 7 dias e devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
