# Funil Low-Ticket Autônomo: Marmita Fit (`/`) & Baby Donuts (`/baby-donuts`)

Projeto construído em **Vite + React 18 + Tailwind CSS** seguindo rigorosamente a arquitetura White Hat para Meta Ads, persistência blindada de UTMs e governança dos agentes locais (`GEMINI.md` e `DESIGN.md`).

---

## 1. Rotas Disponíveis no Projeto
- **`/` (ou `/marmita-fit`):** Oferta Principal — *Método Marmita Fit em 30 Minutos* (R$ 37,00).
- **`/baby-donuts`:** Oferta Secundária — *Mini Baby Donuts Franceses de 5 Minutos* (R$ 37,00).
- **`/termos`:** Termos e Condições de Uso (Compliance Meta Ads / CDC).
- **`/privacidade`:** Política de Privacidade e LGPD (Compliance Meta Ads).

---

## 2. Onde Estão os Entregáveis, Order Bumps e Criativos (Para Subir na Kiwify/Cakto)
Todos os arquivos foram baixados do seu Google Drive e organizados localmente na pasta:
`D:\01_Projetos\MarmitaFit-Funil\entregaveis-checkout\`

*(Nota: Esta pasta está no `.gitignore` para não deixar o repositório do GitHub/Vercel pesado).*

### A. Pasta `01_Marmita_Fit/`
- **`Produto_Principal/`**: Apostila `marmita fit.pdf` + `Certificado para curso marmita fit.pdf` *(e as 27 vídeo-aulas estão prontas na sua pasta do Drive `1qKP5SZMuR97lY3aPXBXEyDYkUjLrK0O2`)*.
- **`OrderBumps_e_Bonus/`**:
  - **Order Bump 1 (R$ 17,00):** `Chas-para-Emagrecimento-e-Retencao-de-Liquidos.pdf`
  - **Order Bump 2 (R$ 14,00):** `Receitas-Fit-de-Doces-e-Sobremesas.pdf` + `Receitas-de-Lanches-Salgados-Fit.pdf`
  - **Bônus Inclusos na Oferta:** `Caldos-e-Sopas-Fit-Como-Aprimorar-sua-Saude-e-Bem-Estar.pdf` + `Sucos-Detox-Equilibrando-seu-Bem-Estar.pdf`
- **`Criativos/`**: `CRIATIVO 1.mp4`, `CRIATIVO 2.mp4`, `CRIATIVO 3.jpg` e `Vsl ==- Marmita Fit.mp4`.

### B. Pasta `02_Baby_Donuts/`
- **`PDFs_Principal_e_OrderBumps/`**:
  - **Principal (R$ 37,00):** `52 Receitas de Mini Baby Donuts franceses.pdf`
  - **Order Bump 1 (R$ 17,00):** `Guia-de-Precificacao-Como-Cobrar-sem-Medo-e-Aumentar-o-Lucro.pdf` + `Guia-Pratico-Como-Embalar-Donuts-para-Delivery-sem-Perder-Qualidade.pdf`
  - **Order Bump 2 (R$ 14,00):** `Fotos-Profissionais-com-o-Celular-para-Atrair-Clientes-no-Instagram.pdf` + `Como-Criar-Promocoes-que-Vendem-Rapido.pdf`
  - **Bônus Inclusos:** `Manual-Gourmet-de-Coberturas-e-Recheios.pdf`, `Calendario-de-Temas-para-Donuts-Sazonais.pdf` e `O-Segredo-da-Decoracao-Francesa-para-Confeitarias-de-Alto-Padrao.pdf`.
- **`Criativos_Amostra/`**: Criativos em vídeo `.mp4` prontos para subir no Gerenciador de Anúncios.

---

## 3. Como Configurar Seus Links de Checkout e Meta Pixel
Crie um arquivo `.env` na raiz (`D:\01_Projetos\MarmitaFit-Funil\.env`) ou configure as variáveis no painel da **Vercel**:

```env
VITE_META_PIXEL_ID=SEU_PIXEL_ID_AQUI
VITE_CHECKOUT_MARMITA_URL=https://pay.kiwify.com.br/SEU_CODIGO_MARMITA
VITE_CHECKOUT_DONUTS_URL=https://pay.kiwify.com.br/SEU_CODIGO_DONUTS
```
