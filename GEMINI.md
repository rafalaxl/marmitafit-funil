# GEMINI.md — Governança do Projeto: Funil Low-Ticket Autônomo (Marmita Fit & Baby Donuts)

## 1. Visão Geral e Objetivo Comercial
- **Modelo Contratado:** Landing Page Multi-Oferta de Alta Conversão (Tráfego Direto Low-Ticket).
- **Oferta Principal (`/` e `/marmita-fit`):** Curso Marmita Fit — *Sua Comida da Semana Inteira em Apenas 30 Minutos* (Ticket: R$ 37,00 + 2 Order Bumps).
- **Oferta Secundária (`/baby-donuts`):** Mini Baby Donuts Franceses de 5 Minutos — *Confeitaria Express & Delivery Lucrativo* (Ticket: R$ 37,00 + 2 Order Bumps).
- **Páginas de Compliance Obrigatórias:** `/termos` (Termos de Uso) e `/privacidade` (Política de Privacidade e LGPD).
- **Regra Operacional Inviolável:** Funil 100% autônomo (Zero X1 no WhatsApp / Zero suporte manual síncrono).

## 2. Regras Agênticas e Técnicas
1. **Limite Estrito de Linhas:** Nenhum arquivo em `src/` pode ultrapassar **150 linhas** (`agent-frontend-react` / `agent-qa-auditor`).
2. **Tipografia Anti-Slop:** Proibido usar *Inter, Roboto, Open Sans, Lato, Montserrat, Poppins*. Utilizar exclusivamente **Plus Jakarta Sans** (Body/UI) e **Fraunces** (Display/Headings).
3. **Copywriting Anti-Slop & White Hat:**
   - Proibido usar clichês de IA (*"revolucionário"*, *"sinergia"*, *"solução inovadora"*, *"no mundo dinâmico de hoje"*, *"paradigma"*, *"ecossistema robusto"*).
   - Proibido fazer promessas médicas de perda de peso em dias fixos ou ganho financeiro garantido em prazo fixo (100% White Hat para Meta Ads).
4. **Rastreamento e Persistência de UTMs:**
   - Todos os botões de CTA devem utilizar `buildCheckoutUrl(baseUrl)` (`src/utils/utm.js`), preservando `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `src`, `sck` e `fbclid`.
   - Cliques em CTAs disparam `InitiateCheckout` no Meta Pixel com valores numéricos puros (`float`) e moeda `'BRL'`.
5. **Responsividade e Acessibilidade (WCAG 2.1 AA):**
   - Layout 100% responsivo a partir de **320px** sem barra de rolagem horizontal.
   - Contraste mínimo de **4.5:1** para textos normais e estados `:focus-visible` nítidos.
