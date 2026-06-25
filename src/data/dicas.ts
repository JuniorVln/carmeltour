export interface Dica {
  /** chave de ícone (mapeada para um ícone lucide na página) */
  icon: string;
  title: string;
  /** parágrafos do conteúdo */
  content: string[];
}

// Dicas de viagem para a Terra Santa, traduzidas e adaptadas do conteúdo atual
// da Carmel Tour. Conteúdo informativo — também ajuda na descoberta por IA/SEO.
export const dicas: Dica[] = [
  {
    icon: "users",
    title: "Viagem em grupo",
    content: [
      "Esta é uma caravana especial — mais do que um passeio turístico, é uma experiência voltada ao aprendizado e à comunhão. Para aproveitá-la bem, a unidade do grupo é essencial.",
      "Respeite os horários, permaneça com o grupo durante os passeios e fique atento às orientações dos guias locais. Espera-se que todos participem das atividades. Os quartos são duplos, salvo quando contratado quarto individual.",
    ],
  },
  {
    icon: "file",
    title: "Documentos e passaporte",
    content: [
      "O documento exigido é o passaporte. Faça uma cópia dele e guarde o original no cofre do hotel. Portadores de passaporte estrangeiro residentes no Brasil devem levar também o RNE original.",
      "Crianças viajando sozinhas ou na companhia de apenas um dos pais precisam de autorização da Vara da Infância.",
    ],
  },
  {
    icon: "stamp",
    title: "Vistos (Israel, Jordânia e Egito)",
    content: [
      "O visto para Israel é emitido gratuitamente na chegada para brasileiros e a maioria das nacionalidades. É necessário passaporte válido por pelo menos 6 meses a partir do último dia da viagem.",
      "Roteiros que incluem Jordânia ou Egito exigem visto, obtido na chegada de cada país mediante taxa, que será informada com antecedência. Passaportes de emergência não são aceitos nesses casos.",
    ],
  },
  {
    icon: "luggage",
    title: "O que levar na mala",
    content: [
      "Priorize roupas confortáveis e práticas — caminharemos bastante, então leve calçado confortável (tênis). Em locais religiosos não é permitido shorts nem camisetas decotadas ou sem mangas.",
      "Leve um agasalho leve para o fim da tarde e roupa de banho, caso queira entrar no Mar Morto ou se batizar no Rio Jordão.",
    ],
  },
  {
    icon: "plane",
    title: "Bagagem e dicas para o voo",
    content: [
      "Em geral: 1 bagagem de mão de até 8 kg (55 x 40 x 23 cm) e 1 mala despachada de até 23 kg. Líquidos, géis e aerossóis acima dos limites devem ir na bagagem despachada.",
      "Leve na bagagem de mão itens de higiene, medicamentos de uso habitual, um agasalho e uma muda de roupa. Dinheiro e documentos devem ficar sempre com você.",
      "Para voos longos, monte um kit de conforto: almofada de pescoço, máscara de dormir, fones, meias de compressão e algo para se entreter. Hidrate-se bem a bordo.",
    ],
  },
  {
    icon: "shield",
    title: "Imigração em Israel",
    content: [
      "Na chegada, você passa pelo controle de passaportes apresentando o passaporte válido. Israel não carimba o passaporte: o sistema imprime um Cartão de Fronteira Eletrônico com seus dados e informações do visto.",
      "Guarde esse cartão sempre à mão durante toda a estadia — ele é a sua identificação oficial e a prova do seu visto no país.",
    ],
  },
  {
    icon: "money",
    title: "Moeda e dinheiro",
    content: [
      "A moeda oficial é o novo shekel israelense. O ideal é levar dólares ou euros e trocar ao chegar em Tel Aviv, onde se consegue uma cotação melhor. É fácil negociar em dólar em Israel.",
      "Cartões de crédito internacionais são aceitos na maioria dos estabelecimentos. Leve trocado em dólar para mercados e vendedores ambulantes, e mantenha sempre uma reserva de emergência. Guarde valores no cofre do hotel.",
    ],
  },
  {
    icon: "wifi",
    title: "Internet e eletricidade",
    content: [
      "Muitos hotéis e restaurantes oferecem Wi-Fi gratuito. Para estar sempre conectado, vale comprar um chip de internet local (3G/4G) — com o celular desbloqueado.",
      "A voltagem é 220V/50Hz. As tomadas são de três pinos, mas adaptadores europeus de dois pinos costumam funcionar. A maioria dos quartos tem secador de cabelo.",
    ],
  },
  {
    icon: "lang",
    title: "Idioma",
    content: [
      "Israel tem dois idiomas oficiais: hebraico e árabe. O inglês é amplamente compreendido e muitos israelenses falam ou entendem espanhol — e até arriscam um português.",
      "Os israelenses são muito acolhedores e gostam de ajudar, então a comunicação raramente é um problema.",
    ],
  },
  {
    icon: "shopping",
    title: "Compras e Tax Free (IVA)",
    content: [
      "Em Israel é possível pedir a devolução do IVA em lojas autorizadas (símbolo TAX REFUND), para compras acima de 400 shekels, com nota fiscal específica e produtos de uso pessoal que sairão do país.",
      "No Aeroporto Ben Gurion, antes do check-in, apresente produtos, recibos, passaporte e cartão de entrada no balcão da Milgram. A devolução pode ser em dinheiro, cheque ou transferência (com pequena taxa).",
    ],
  },
  {
    icon: "food",
    title: "Alimentação",
    content: [
      "A culinária de Israel é uma rica mistura de sabores árabes, mediterrâneos e judaicos (cozinha kosher). Esteja aberto a experimentar a gastronomia local.",
      "Nos hotéis, o sistema é de meia pensão (café da manhã e jantar), com cardápio fixo nas refeições em grupo. Bebidas e cafés consumidos à parte são pagos pelo passageiro. A água da torneira é potável.",
    ],
  },
  {
    icon: "shield",
    title: "Segurança",
    content: [
      "Apesar de estar em uma região sensível, Israel é bastante seguro para o turismo. Crimes comuns como assaltos são raros nas ruas, e mesmo passeios à noite não representam perigo.",
      "Ainda assim, mantenha sempre o bom senso: ande junto com o grupo e siga as orientações dos guias.",
    ],
  },
  {
    icon: "weather",
    title: "Clima e fuso horário",
    content: [
      "Israel está 6 horas à frente do horário de Brasília. Tem verões quentes, longos e secos (abril a outubro) e invernos amenos (novembro a março).",
      "De agosto a outubro o clima é seco, com temperaturas entre 19ºC e 38ºC. Em Jerusalém as noites podem ser mais frias — um suéter resolve. Confira a previsão uma semana antes da viagem.",
    ],
  },
  {
    icon: "calendar",
    title: "Dias de descanso (Shabat)",
    content: [
      "Os dias de descanso variam conforme a religião: sexta-feira para muçulmanos, sábado (Shabat) para judeus e domingo para cristãos.",
      "Como a população é majoritariamente judaica, é comum encontrar o comércio fechado aos sábados, quando quase nada funciona. Planeje-se para essas datas.",
    ],
  },
  {
    icon: "mountain",
    title: "Roteiros com o Monte Sinai",
    content: [
      "A subida ao Monte Sinai é feita ao amanhecer — leve lanterna e roupa de abrigo. São mais de 2.200 metros de altitude, com cerca de 6 horas de caminhada (subida e descida).",
      "Parte do trajeto pode ser feita de camelo (aprox. US$ 40 ida e volta). Se você estiver em boa forma física, é um esforço que vale a pena — sem dúvida um dos pontos altos da viagem.",
    ],
  },
];
