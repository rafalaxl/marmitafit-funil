# DESIGN.md — Design System & Tokens (Família Estética: Organic Editorial × High-Conversion)

## 1. Diretriz Conceitual
- **Família Estética:** *Organic/Soft × Editorial* — combina frescor gastronômico, clareza escaneável no mobile e autoridade editorial sem parecer template genérico de PLR.
- **Tipografia Selecionada (Fora da Blacklist Anti-Slop):**
  - **Display / Headings:** `'Fraunces', Georgia, serif` (contraste editorial elegante para palavras-chave de destaque) + `'Plus Jakarta Sans', sans-serif` (títulos diretos de alta legibilidade).
  - **Body / UI:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`.
- **Escala Modular de Espaçamento:** Base-8px (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`).

## 2. Hierarquia de Tokens CSS (`src/index.css`)
- **Tema Principal (Marmita Fit — Emerald & Warm Cream):**
  - `--color-bg-primary: #FAF8F5` (Creme orgânico suave, zero fadiga visual)
  - `--color-bg-secondary: #FFFFFF` (Superfície de cards)
  - `--color-bg-dark: #0F291E` (Verde floresta profundo para seções de alto impacto — contraste 14.2:1 com branco)
  - `--color-text-primary: #111C16` (Contraste 16.1:1 sobre `#FAF8F5`)
  - `--color-text-secondary: #3D5245` (Contraste 7.8:1 sobre `#FAF8F5` — aprovado WCAG 2.1 AA)
  - `--color-brand-primary: #15803D` (Verde esmeralda vivo para acentos)
  - `--color-cta-bg: #16A34A` / Hover `#15803D` com texto `#FFFFFF`
  - `--color-highlight: #D97706` (Âmbar quente para selos e ancoragem)
- **Tema Secundário (Baby Donuts — Artisanal Cocoa & Berry):**
  - `--color-bg-dark: #2A1215` (Cacau profundo)
  - `--color-brand-primary: #BE185D` (Framboesa artesanal)
  - `--color-cta-bg: #16A34A` (Verde conversão no botão de compra)

## 3. Voice & Tone (Seção 7 para `agent-copywriter`)
- **Personalidade:** Prática, acolhedora, direta e honesta. Fala diretamente com quem trabalha o dia inteiro, chega cansado em casa e precisa de um método passo a passo simples que funcione na vida real.
- **Público-Alvo (ICP):**
  - *Marmita Fit:* Homens e mulheres (25 a 55 anos) com rotina corrida que querem comer bem a semana toda gastando apenas 30 minutos no fim de semana e economizar no mercado/delivery.
  - *Baby Donuts:* Pessoas que buscam produzir doces franceses rápidos (5 minutos de preparo) em casa para a família ou para vender sob encomenda/delivery com excelente margem.
