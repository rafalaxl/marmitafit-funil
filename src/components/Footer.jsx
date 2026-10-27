import React from 'react';

export function Footer({ offerName, onNavigate }) {
  const handleLink = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)] text-slate-300 border-t border-white/10 py-10 px-4 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        <div className="space-y-2 max-w-3xl mx-auto text-slate-400 leading-relaxed">
          <p className="font-bold text-slate-200">{offerName}</p>
          <p>
            AVISO LEGAL DE CONFORMIDADE: Este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms, Inc. Depois que você sair do Facebook ou Instagram, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos.
          </p>
          <p>
            Os resultados na preparação culinária ou na comercialização das receitas variam de acordo com a dedicação individual no seguimento das instruções passo a passo fornecidas no material didático.
          </p>
        </div>

        <nav
          aria-label="Links institucionais e conformidade"
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold text-slate-200"
        >
          <a
            href="/termos"
            onClick={(e) => handleLink(e, '/termos')}
            className="hover:text-emerald-400 underline underline-offset-4 transition-colors"
          >
            Termos de Uso
          </a>
          <span aria-hidden="true" className="text-slate-600">•</span>
          <a
            href="/privacidade"
            onClick={(e) => handleLink(e, '/privacidade')}
            className="hover:text-emerald-400 underline underline-offset-4 transition-colors"
          >
            Política de Privacidade
          </a>
          <span aria-hidden="true" className="text-slate-600">•</span>
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className="hover:text-emerald-400 underline underline-offset-4 transition-colors"
          >
            Oferta Principal (Marmita Fit)
          </a>
          <span aria-hidden="true" className="text-slate-600">•</span>
          <a
            href="/baby-donuts"
            onClick={(e) => handleLink(e, '/baby-donuts')}
            className="hover:text-emerald-400 underline underline-offset-4 transition-colors"
          >
            Oferta 2 (Baby Donuts)
          </a>
        </nav>

        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} {offerName}. Todos os direitos reservados. Entrega 100% digital e automatizada por e-mail.
        </p>
      </div>
    </footer>
  );
}
