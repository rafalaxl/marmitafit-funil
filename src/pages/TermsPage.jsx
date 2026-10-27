import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export function TermsPage({ onNavigate }) {
  useEffect(() => {
    document.title = 'Termos de Uso | Portal de Treinamentos Gastronômicos';
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
          <Shield className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0" aria-hidden="true" />
          <h1 className="font-display text-2xl sm:text-3xl font-bold">Termos e Condições de Uso</h1>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            <strong>1. Aceitação dos Termos:</strong> Ao acessar e adquirir qualquer infoproduto, apostila digital (PDF) ou treinamento em vídeo disponibilizado neste portal, você concorda integralmente com os presentes Termos de Uso.
          </p>
          <p>
            <strong>2. Natureza do Produto e Entrega Digital:</strong> Todos os materiais comercializados neste site são produtos estritamente digitais (cursos online e e-books em formato PDF). O envio do link de acesso é realizado de forma 100% automatizada para o endereço de e-mail cadastrado pelo comprador no momento do checkout, logo após a compensação do pagamento.
          </p>
          <p>
            <strong>3. Garantia Incondicional de 7 Dias (CDC Art. 49):</strong> Em estrita conformidade com o Código de Defesa do Consumidor, o comprador dispõe do prazo de 7 (sete) dias corridos a contar da data da compra para solicitar o cancelamento e reembolso integral do valor pago, diretamente pela plataforma processadora do pagamento (Kiwify/Hotmart/Cakto), sem necessidade de justificativa.
          </p>
          <p>
            <strong>4. Propriedade Intelectual e Licença de Uso Individual:</strong> O acesso adquirido é pessoal e intransferível. É expressamente proibida a revenda não autorizada, distribuição gratuita em grupos ou pirataria dos arquivos digitais fornecidos.
          </p>
          <p>
            <strong>5. Isenção de Responsabilidade de Resultados:</strong> As receitas, métodos de organização alimentar e guias de confeitaria possuem caráter exclusivamente educativo e culinário. Não substituem orientação médica ou nutricional individualizada, nem configuram promessa de ganho financeiro fixo sem a devida aplicação prática.
          </p>
        </div>
      </div>
    </div>
  );
}
