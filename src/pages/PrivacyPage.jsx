import React, { useEffect } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

export function PrivacyPage({ onNavigate }) {
  useEffect(() => {
    document.title = 'Política de Privacidade e LGPD | Portal de Treinamentos';
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <a
          href="/"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-primary)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar para a Página Inicial</span>
        </a>

        <div className="flex items-center gap-2.5 border-b border-[var(--color-border-subtle)] pb-4">
          <Lock className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0" aria-hidden="true" />
          <h1 className="font-display text-2xl sm:text-3xl font-bold">Política de Privacidade (LGPD)</h1>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            <strong>1. Compromisso com a Privacidade (Lei nº 13.709/2018 - LGPD):</strong> Respeitamos a sua privacidade e protegemos os seus dados pessoais com rigor técnico e transparência.
          </p>
          <p>
            <strong>2. Coleta de Dados e Processamento de Pagamentos:</strong> Nossa página de apresentação não coleta nem armazena números de cartão de crédito ou dados bancários. Todo o processamento financeiro ocorre exclusivamente em ambiente criptografado da plataforma oficial de checkout (Kiwify / Hotmart / Cakto), onde seu nome e e-mail são solicitados unicamente para emissão de nota e entrega automática do acesso ao produto.
          </p>
          <p>
            <strong>3. Uso de Cookies, Parâmetros UTM e Pixels de Desempenho:</strong> Utilizamos cookies primários, parâmetros UTM e o Meta Pixel para mensurar o desempenho de campanhas publicitárias (eventos <em>PageView</em> e <em>InitiateCheckout</em>) e otimizar a experiência de navegação.
          </p>
          <p>
            <strong>4. Compartilhamento de Informações:</strong> Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros sob nenhuma hipótese.
          </p>
          <p>
            <strong>5. Direitos do Titular:</strong> Você pode solicitar a revisão, correção ou exclusão dos seus dados cadastrais a qualquer momento através do suporte automático na própria plataforma de entrega recebida em seu e-mail de compra.
          </p>
        </div>
      </div>
    </div>
  );
}
