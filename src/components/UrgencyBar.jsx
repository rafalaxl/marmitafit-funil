import React from 'react';
import { Sparkles } from 'lucide-react';

export function UrgencyBar({ text }) {
  return (
    <div className="w-full bg-[var(--color-bg-dark)] text-[var(--color-text-on-dark)] border-b border-white/10 py-2.5 px-3">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center">
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
}
