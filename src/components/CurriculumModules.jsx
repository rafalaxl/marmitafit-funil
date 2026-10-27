import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export function CurriculumModules({ offer }) {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border-subtle)]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Conteúdo Programático Completo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
            {offer.modulesTitle}
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            {offer.modulesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offer.modules.map((mod, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)] text-xs font-extrabold uppercase tracking-wider">
                  {mod.tag}
                </span>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  {mod.title}
                </h3>
              </div>

              <ul className="space-y-2 pt-1">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
