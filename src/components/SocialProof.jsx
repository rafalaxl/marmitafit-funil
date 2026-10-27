import React from 'react';
import { Star } from 'lucide-react';

export function SocialProof({ testimonials }) {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border-subtle)]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
            Quem Já Aplicou na Própria Cozinha Recomenda
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            Relatos reais de quem trocou a correria e o desperdício por um passo a passo simples:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, idx) => (
            <article
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                <p className="text-sm font-bold text-[var(--color-text-primary)]">{item.name}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
