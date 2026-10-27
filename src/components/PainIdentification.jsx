import React from 'react';
import { AlertCircle, Check, X } from 'lucide-react';

export function PainIdentification({ painSection }) {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Bloco PAS: Problema & Agitação */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] leading-tight">
            {painSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)]">
            {painSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painSection.pains.map((pain, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-sm"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">
                {pain}
              </p>
            </div>
          ))}
        </div>

        {/* Filtro de Qualificação: Para Quem É vs Para Quem Não É */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-[var(--color-bg-secondary)] border-2 border-[var(--color-brand-border)] shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-brand-primary)] flex items-center gap-2">
              <Check className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>Para quem este método foi desenhado:</span>
            </h3>
            <ul className="space-y-3">
              {painSection.forWho.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-text-primary)]">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-rose-800 flex items-center gap-2">
              <X className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>Para quem NÃO é indicado:</span>
            </h3>
            <ul className="space-y-3">
              {painSection.notForWho.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-text-secondary)]">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-1" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
