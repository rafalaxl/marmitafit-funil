export const marmitaOffer = {
  id: 'marmita-fit-30min',
  theme: 'marmita',
  name: 'Método Marmita Fit em 30 Minutos',
  pageTitle: 'Método Marmita Fit em 30 Minutos | Comida da Semana Pronta e Saborosa',
  checkoutUrl: import.meta.env.VITE_CHECKOUT_MARMITA_URL || 'https://pay.kiwify.com.br/SEU_LINK_MARMITA_FIT',
  priceNumber: 37.0,
  originalPriceNumber: 197.0,
  installmentsText: '4x de R$ 9,83',
  urgencyText: 'LOTE PROMOCIONAL COM 81% DE DESCONTO + 3 BÔNUS GRATUITOS LIBERADOS HOJE',
  kicker: 'ORGANIZAÇÃO ALIMENTAR PRÁTICA • 27 VÍDEO-AULAS + APOSTILA COMPLETA',
  headline: 'Prepare sua comida da semana inteira em apenas 30 minutos',
  headlineHighlight: 'sem gastar horas na cozinha e sem comer comida sem graça.',
  subheadline: 'O passo a passo em vídeo e PDF para você cozinhar uma única vez, congelar do jeito certo (sem juntar água!) e ter refeições caseiras, saborosas e econômicas todos os dias.',
  heroImage: '/assets/marmita-hero.webp',
  heroBadge: '27 Aulas Práticas + Apostila PDF',
  heroBullets: [
    'Técnica anti-água: aprenda a congelar e descongelar mantendo o sabor de comida feita na hora.',
    'Economize até R$ 600/mês evitando pedidos de última hora por cansaço à noite.',
    'Serve para o seu consumo próprio, para a família toda ou para vender marmitas por encomenda.',
  ],
  ctaText: 'Quero Destravar Minha Rotina Alimentar por R$ 37',
  ctaSubtext: 'Acesso imediato no seu e-mail • Garantia incondicional de 7 dias',
  painSection: {
    title: 'Chegar exausto em casa às 20h e ainda ter que pensar no que cozinhar drena a sua energia.',
    subtitle: 'O problema não é falta de força de vontade. É tentar decidir o que comer quando você já está no limite do cansaço.',
    pains: [
      'Gastar o salário com delivery caro porque não tinha nada pronto na geladeira.',
      'Tentar fazer marmita por conta própria e acabar com legumes aguados e frango seco.',
      'Perder o domingo inteiro em pé no fogão e sujar uma pilha de panelas.',
      'Comer qualquer lanche rápido à noite e acordar inchado e sem disposição no dia seguinte.',
    ],
    forWho: [
      'Pessoas que trabalham o dia todo e têm pouco tempo livre durante a semana.',
      'Quem quer organizar a alimentação da família gastando menos no supermercado.',
      'Iniciantes na cozinha que precisam de medidas exatas e preparo simples.',
      'Quem deseja produzir marmitas fit em casa para gerar uma nova fonte de renda.',
    ],
    notForWho: [
      'Quem procura fórmulas mágicas sem precisar ir para a cozinha nem 30 minutos na semana.',
      'Quem gosta de receitas caras com ingredientes difíceis de achar no mercado comum.',
    ],
  },
  modulesTitle: 'O Que Você Vai Aprender Passo a Passo por Dentro do Curso',
  modulesSubtitle: 'São 5 módulos diretos ao ponto em vídeo + apostila ilustrada para consultar no celular:',
  modules: [
    {
      tag: 'MÓDULO 01',
      title: 'Base, Utensílios, Higiene e Congelamento Perfeito',
      items: [
        'Aula 1 a 4: Organização da bancada, potes ideais, higiene e apostila completa.',
        'Como selar carnes e legumes para nunca soltarem água ao descongelar.',
      ],
    },
    {
      tag: 'MÓDULO 02',
      title: 'Preparações Base em Lote (Cozinhe 1x, Monte 14 Pratos)',
      items: [
        'Aula 5 a 7: Carne moída soltinha, frango em cubos dourado e frango desfiado úmido.',
        'Aula 8 a 10: Arroz integral soltinho, mix de legumes no ponto e feijão caseiro.',
      ],
    },
    {
      tag: 'MÓDULO 03',
      title: 'Cardápio Especial com Frango (8 Receitas Campeãs)',
      items: [
        'Tulipa assada com batata e cenoura • Frango ao molho de laranja com couve.',
        'Estrogonofe fit • Frango xadrez • Escondidinho de abóbora • Risoto de abobrinha.',
      ],
    },
    {
      tag: 'MÓDULO 04',
      title: 'Cardápio Especial com Carnes (6 Receitas Suculentas)',
      items: [
        'Picadinho com legumes • Bife grelhado com couve • Macarrão integral com almôndegas.',
        'Lasanha de berinjela • Abobrinha recheada • Escondidinho de batata-doce.',
      ],
    },
    {
      tag: 'MÓDULO 05',
      title: 'Peixes, Lanches Naturais & Certificado de Conclusão',
      items: [
        'Tilápia assada com tomate cereja e manjericão • Filé de tilápia grelhado com legumes.',
        'Aula Especial: Sanduíche natural para lanche rápido + Emissão do Certificado.',
      ],
    },
  ],
  bonuses: [
    { title: 'Bônus #1: Guia de Caldos e Sopas Fit Reconfortantes', value: 'R$ 47,00', desc: 'Receitas leves e nutritivas perfeitas para o jantar em dias mais frescos.' },
    { title: 'Bônus #2: Guia Prático de Sucos Detox para o Dia a Dia', value: 'R$ 37,00', desc: 'Combinações naturais com frutas e folhas para começar a manhã com disposição.' },
    { title: 'Bônus #3: Apostila Completa de Receitas + Certificado', value: 'R$ 67,00', desc: 'Todas as listas de compras e medidas em PDF prontas para abrir no celular ou imprimir.' },
  ],
  orderBumpsPreview: [
    { name: 'Complemento Opcional #1 no Checkout: Guia de Chás Digestivos e Anti-Retenção', price: 'R$ 17,00', desc: '10 receitas de chás naturais para aliviar a sensação de estufamento após as refeições.' },
    { name: 'Complemento Opcional #2 no Checkout: Caderno de Doces, Sobremesas e Lanches Fit', price: 'R$ 14,00', desc: 'Opções práticas para matar a vontade de doce na rotina sem sair do planejamento.' },
  ],
  testimonials: [
    { name: 'Camila Rocha, 34 anos', role: 'Analista Administrativa (Rotina CLT)', text: 'Eu chegava em casa às 20h30 morta de cansaço e pedia lanche 4 vezes na semana. Agora no sábado de manhã já deixo 12 potes prontos. A dica para não dar água nos legumes mudou tudo.' },
    { name: 'Marcos Vinícius, 41 anos', role: 'Representante Comercial', text: 'Só na primeira quinzena economizei mais de R$ 280 que eu gastava almoçando na rua. O estrogonofe fit e o escondidinho de batata-doce ficam melhores que restaurante.' },
    { name: 'Patrícia Mendes, 29 anos', role: 'Produz Marmitas sob Encomenda', text: 'Comecei fazendo para mim e para o meu marido, postei foto dos potes organizados e as colegas do trabalho começaram a encomendar. O curso é super direto e fácil de acompanhar.' },
  ],
  faqs: [
    { q: 'Como vou receber o acesso ao curso e às apostilas?', a: 'Imediatamente após a confirmação do pagamento (no PIX ou Cartão leva menos de 1 minuto), você recebe no seu e-mail o link de acesso exclusivo com todas as 27 vídeo-aulas e os livros digitais em PDF.' },
    { q: 'Não sei cozinhar quase nada. Vou conseguir acompanhar?', a: 'Sim! O curso começa do absoluto zero: desde quais potes usar e como cortar os alimentos até o tempo exato de fogo para cada proteína.' },
    { q: 'Os ingredientes são caros ou difíceis de achar?', a: 'De forma alguma. Todas as receitas usam ingredientes simples de feira e supermercado comum: frango, carne moída, tilápia, ovos, batata-doce, abóbora, arroz, feijão e temperos naturais.' },
    { q: 'Tenho que pagar mensalidade?', a: 'Não! O valor de R$ 37,00 é pagamento único. Você paga uma única vez e tem acesso completo ao material sem cobranças surpresas.' },
    { q: 'E se eu não gostar do conteúdo?', a: 'Você tem 7 dias de Garantia Incondicional. Se achar que o método não é para você, basta solicitar o reembolso diretamente na plataforma com 1 clique e devolvemos 100% do seu dinheiro.' },
  ],
};
