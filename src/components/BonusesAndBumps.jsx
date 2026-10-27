import React from 'react';
import { Gift, PlusCircle } from 'lucide-react';

export function BonusesAndBumps({ offer }) {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Bônus Gratuitos Inclusos Hoje */}
        <div className="space-y-6">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-highlight-bg)] text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Presentes Inclusos na Sua Inscrição Hoje</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              Garantindo seu acesso hoje, você leva 3 Bônus Exclusivos de graça
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offer.bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-primary)]">
                      Bônus Exclusivo #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold line-through text-slate-500">
                      Vendido por {bonus.value}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                    Nesta página hoje:
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">
                    GRÁTIS (R$ 0,00)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparência de Order Bumps Disponíveis no Checkout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] space-y-5">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] flex items-center justify-center sm:justify-start gap-2">
              <PlusCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" aria-hidden="true" />
              <span>Materiais Extras Opcionais Disponíveis no Checkout</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              Ao clicar no botão de inscrição, você também poderá adicionar (se desejar) estes guias complementares com preço simbólico de aluno:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offer.orderBumpsPreview.map((bump, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-dashed border-[var(--color-brand-primary)]/40 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--color-brand-primary)] uppercase">
                    Adicional Opcional #{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-bold">
                    + {bump.price}
                  </span>
                </div>
                <p className="text-sm font-bold text-[var(--color-text-primary)]">{bump.name}</p>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">{bump.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
