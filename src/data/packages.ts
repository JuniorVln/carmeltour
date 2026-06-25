export type PackageCategory = "viagens-biblicas" | "7-igrejas" | "educacao" | "casais";

export interface ItineraryDay {
  dia: string;
  descricao: string;
}

export interface Package {
  slug: string;
  category: PackageCategory;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  duration: string;
  destinations: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  notIncludes: string[];
  price: string;
  /** Data de saída em ISO (yyyy-mm-dd). null = roteiro evergreen, saídas sob consulta. */
  departureDate: string | null;
  /** Rótulo legível da data de saída (ex.: "Maio de 2026"). */
  dateLabel?: string;
  leader?: string;
  heroImage: string;
  gallery: string[];
  featured: boolean;
  pdfUrl?: string;
  badge?: string;
}

export const categoryLabels: Record<PackageCategory, string> = {
  "viagens-biblicas": "Viagens Bíblicas",
  "7-igrejas": "7 Igrejas & Experiências",
  educacao: "Carmel Educação",
  casais: "Carmel Casais",
};

export const categoryColors: Record<PackageCategory, string> = {
  "viagens-biblicas": "bg-amber text-white",
  "7-igrejas": "bg-navy text-white",
  educacao: "bg-brown text-white",
  casais: "bg-amber-dark text-white",
};

// Conteúdo real consolidado a partir do site atual (carmeltour.com) e dos PDFs
// dos roteiros. Caravanas duplicadas (mesmo itinerário, líderes diferentes) foram
// unificadas em um único produto. Roteiros com datas já vencidas ficam como
// evergreen (departureDate: null) — "próximas saídas sob consulta" — para não
// exibir datas antigas. Basta preencher departureDate/dateLabel quando houver
// uma nova saída confirmada para o card e o filtro de datas voltarem a destacá-la.
export const packages: Package[] = [
  // =========== VIAGENS BÍBLICAS ===========
  {
    slug: "caravana-israel",
    category: "viagens-biblicas",
    title: "Caravana Israel",
    subtitle: "Uma jornada de fé, história e emoção pela Terra Santa",
    description:
      "Israel é um país fascinante que combina história antiga, paisagens deslumbrantes e modernidade. Como Terra Santa, abriga locais sagrados como Jerusalém, Nazaré e o Mar da Galileia. Uma peregrinação completa que une espiritualidade, história e beleza em cada lugar.",
    highlights: [
      "Exploração de Tel Aviv e Jaffa",
      "Cesareia Marítima e Monte Carmelo",
      "Passeio de barco no Mar da Galileia e renovação de batismo no Rio Jordão (Yardenit)",
      "Monte das Bem-Aventuranças, Tabgha, Cafarnaum e Caná da Galileia",
      "Flutuação no Mar Morto",
      "Entrada Triunfal em Jerusalém",
      "Jerusalém: Cenáculo, Monte das Oliveiras, Getsêmani, Via Dolorosa, Gólgota, Jardim do Túmulo, Monte do Templo e Tanque de Betesda",
      "Belém (Campo dos Pastores) e Betânia",
    ],
    duration: "9 dias",
    destinations: ["Israel"],
    itinerary: [
      { dia: "Dia 1", descricao: "Voo de partida rumo a Israel. Início da peregrinação à Terra Santa." },
      { dia: "Dia 2", descricao: "Chegada a Tel Aviv, transfer ao hotel e tarde livre no bairro histórico de Jaffa." },
      { dia: "Dia 3", descricao: "Jope (Jaffa) → Cesareia Marítima → Monte Carmelo → Vale do Precipício (Nazaré)." },
      { dia: "Dia 4", descricao: "Monte das Bem-Aventuranças → Tabgha → Cafarnaum → passeio de barco no Mar da Galileia → Yardenit (Rio Jordão)." },
      { dia: "Dia 5", descricao: "Caná da Galileia → Monte da Tentação → Mar Morto → Pousada do Bom Samaritano → Entrada Triunfal em Jerusalém." },
      { dia: "Dia 6", descricao: "Cenáculo → Monte das Oliveiras → Vale do Juízo Final (Cedrom) → Getsêmani → Casa de Caifás → Cidade de Davi." },
      { dia: "Dia 7", descricao: "Monte do Templo → Portão das Ovelhas → Tanque de Betesda → Via Dolorosa → Gólgota → Jardim do Túmulo → Belém (Campo dos Pastores) → Betânia." },
      { dia: "Dia 8", descricao: "Dia livre em Jerusalém." },
      { dia: "Dia 9", descricao: "Retorno. Fim dos serviços." },
    ],
    includes: [
      "Passagem aérea em classe econômica",
      "Hospedagem com meia pensão",
      "Receptivo e assistência na chegada e partida",
      "Entradas em todos os locais conforme itinerário",
      "Ônibus de luxo com Wi-Fi e ar-condicionado",
      "Guias locais falando português",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Gorjetas para guias e motoristas",
      "Seguro viagem",
    ],
    price: "U$ 3.399,00",
    departureDate: null,
    heroImage: "/images/card-israel.jpg",
    gallery: [],
    featured: true,
    badge: "Mais Vendido",
  },
  {
    slug: "israel-egito",
    category: "viagens-biblicas",
    title: "Caravana Israel & Egito",
    subtitle: "Os mistérios do Egito e a jornada de fé de Israel, com final em Roma",
    description:
      "Descubra os mistérios do Egito e as histórias de Israel em uma caravana inesquecível. O Egito, berço de antigas civilizações, fascina com as Pirâmides de Gizé, o Mar Vermelho e o Monte Sinai; Israel revela a Terra Santa de Jerusalém à Galileia. A viagem se completa com dias em Roma.",
    highlights: [
      "Museu Egípcio no Cairo e travessia do Canal de Suez",
      "Monte Sinai (Monte Horebe) — subida noturna e Mosteiro de Santa Catarina",
      "Massada (teleférico), Qumran e Mar Morto",
      "Jericó — a cidade mais antiga do mundo — e Monte da Tentação",
      "Batismo simbólico no Rio Jordão (Qasr al-Yahud)",
      "Monte das Bem-Aventuranças, Cafarnaum, Tabgha, Caná e Monte Tabor",
      "Jerusalém: Monte das Oliveiras, Getsêmani, Cenáculo, Via Dolorosa, Muro das Lamentações e Jardim do Túmulo",
      "Belém (Campo dos Pastores) e Roma (Vaticano e Coliseu)",
    ],
    duration: "11 dias",
    destinations: ["Egito", "Israel", "Roma"],
    itinerary: [
      { dia: "Dia 1", descricao: "Brasil → Cairo (voo). Pernoite a bordo." },
      { dia: "Dia 2", descricao: "Cairo — tour panorâmico pela cidade e Museu Egípcio. Hospedagem." },
      { dia: "Dia 3", descricao: "Canal de Suez → Fonte de Mara → Mar Vermelho → Vila de Santa Catarina. Subida noturna ao Monte Sinai (Monte Horebe)." },
      { dia: "Dia 4", descricao: "Nascer do sol no Monte Horebe → Mosteiro de Santa Catarina → Israel (Eilat, tour panorâmico) → Mar Morto." },
      { dia: "Dia 5", descricao: "Massada (teleférico) → Qumran → Jericó → Monte da Tentação → Rio Jordão (Qasr al-Yahud) → passeio de barco no Mar da Galileia." },
      { dia: "Dia 6", descricao: "Monte das Bem-Aventuranças → Cafarnaum → Tabgha → Caná da Galileia → Nazareth Village → Vale do Precipício → Monte Tabor." },
      { dia: "Dia 7", descricao: "Monte das Oliveiras → Dominus Flevit → Getsêmani (Igreja das Nações) → Cenáculo → São Pedro in Galicantu → Cidade de Davi." },
      { dia: "Dia 8", descricao: "Muro das Lamentações → Esplanada do Templo → Via Dolorosa → Tanque de Betesda → Jardim do Túmulo → Campo dos Pastores (Belém) → Betânia." },
      { dia: "Dia 9", descricao: "Jerusalém → Roma (voo). Tour panorâmico, Vaticano (Praça e Basílica de São Pedro) e Coliseu (externo)." },
      { dia: "Dia 10", descricao: "Roma → Brasil (voo)." },
      { dia: "Dia 11", descricao: "Chegada ao Brasil e fim dos serviços." },
    ],
    includes: [
      "Passagem aérea Guarulhos x Cairo x Tel Aviv x Roma x Guarulhos",
      "Hospedagem com meia pensão",
      "Jantar com show folclórico no Egito",
      "Receptivo e assistência na chegada e partida",
      "Entradas em todos os locais conforme itinerário",
      "Ônibus de luxo com Wi-Fi e ar-condicionado",
      "Seguro viagem (maiores de 64 anos podem ter taxa extra)",
      "Guias locais falando português",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Gorjetas para os guias",
      "Visto de entrada no Egito e visto eletrônico em Israel",
    ],
    price: "U$ 3.799,00",
    departureDate: null,
    heroImage: "/images/card-egypt.jpg",
    gallery: [],
    featured: true,
    badge: "Egito + Israel",
    pdfUrl: "https://carmeltour.com/wp-content/uploads/2025/05/9-israelEGITO-fab-MB_compressed.pdf",
  },
  {
    slug: "israel-roma",
    category: "viagens-biblicas",
    title: "Caravana Israel & Roma",
    subtitle: "A Terra Santa e a Cidade Eterna em uma jornada de fé",
    description:
      "Descubra Israel em uma jornada de fé, história e emoção, e complete a viagem em Roma, a Cidade Eterna. Da Galileia a Jerusalém, percorra os lugares onde a Bíblia ganhou vida; em Roma, visite o Vaticano, o Coliseu e o Fórum Romano.",
    highlights: [
      "Jope (Jaffa), Cesareia Marítima e Monte Carmelo",
      "Nazaré (Vale do Precipício)",
      "Monte das Bem-Aventuranças, Tabgha e Cafarnaum",
      "Mar da Galileia e Yardenit (Rio Jordão)",
      "Monte da Tentação e Mar Morto",
      "Jerusalém completa: Cenáculo, Monte das Oliveiras, Getsêmani, Cidade de Davi, Via Dolorosa, Gólgota e Jardim do Túmulo",
      "Belém (Campo dos Pastores) e Betânia",
      "Roma: Vaticano (Basílica de São Pedro), Coliseu (externo) e Fórum Romano",
    ],
    duration: "10 dias",
    destinations: ["Israel", "Roma"],
    itinerary: [
      { dia: "Dia 1", descricao: "Voo de partida rumo a Israel. Início da peregrinação à Terra Santa." },
      { dia: "Dia 2", descricao: "Chegada a Tel Aviv, transfer ao hotel e tarde livre no bairro histórico de Jaffa." },
      { dia: "Dia 3", descricao: "Jope (Jaffa) → Cesareia Marítima → Monte Carmelo → Vale do Precipício (Nazaré)." },
      { dia: "Dia 4", descricao: "Monte das Bem-Aventuranças → Tabgha → Cafarnaum → passeio de barco no Mar da Galileia → Yardenit (Rio Jordão)." },
      { dia: "Dia 5", descricao: "Caná da Galileia → Monte da Tentação → Mar Morto → Pousada do Bom Samaritano → Entrada Triunfal em Jerusalém." },
      { dia: "Dia 6", descricao: "Cenáculo → Monte das Oliveiras → Vale do Juízo Final (Cedrom) → Getsêmani → Casa de Caifás → Cidade de Davi." },
      { dia: "Dia 7", descricao: "Monte do Templo → Portão das Ovelhas → Tanque de Betesda → Via Dolorosa → Gólgota → Jardim do Túmulo → Belém (Campo dos Pastores) → Betânia." },
      { dia: "Dia 8", descricao: "Partida para Roma e tour panorâmico — Piazza Navona, Fontana di Trevi e Panteão." },
      { dia: "Dia 9", descricao: "Cidade do Vaticano (Basílica de São Pedro) → Coliseu (externo) → Fórum Romano." },
      { dia: "Dia 10", descricao: "Despedida de Roma e retorno para casa." },
    ],
    includes: [
      "Passagem aérea em classe econômica",
      "Hospedagem com meia pensão (em Roma, apenas café da manhã)",
      "Receptivo e assistência na chegada e partida",
      "Entradas em todos os locais conforme itinerário",
      "Ônibus de luxo com Wi-Fi e ar-condicionado",
      "Guias locais falando português",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Gorjetas para guia e motorista",
      "Seguro viagem",
    ],
    price: "U$ 3.435,00",
    departureDate: null,
    heroImage: "/images/card-israel.jpg",
    gallery: [],
    featured: false,
  },
  {
    slug: "caminhos-de-paulo-ilhas-gregas",
    category: "viagens-biblicas",
    title: "Caminhos de Paulo & Ilhas Gregas",
    subtitle: "Nos passos do Apóstolo Paulo, com cruzeiro pelas Ilhas Gregas",
    description:
      "A Grécia, berço da democracia e da filosofia ocidental, une espiritualidade, história e beleza em cada passo dos caminhos do Apóstolo Paulo. A viagem inclui um cruzeiro pelas Ilhas Gregas, com Santorini, Mykonos e Milos. Saídas a partir de Miami ou do Rio de Janeiro.",
    highlights: [
      "Corinto Antiga (Templo de Apolo e o Bema, onde Paulo compareceu)",
      "Ágora e Areópago de Atenas — discurso de Paulo sobre o Deus desconhecido",
      "Cruzeiro de 7 noites pelas Ilhas Gregas (navio Celestyal Journey)",
      "Tessalônica — importante na pregação de Paulo",
      "Kusadasi e Éfeso — ministério de Paulo",
      "Heraklion, Creta — ligada às instruções de Paulo a Tito",
      "Dias livres em Santorini, Mykonos e Milos",
    ],
    duration: "12 dias",
    destinations: ["Grécia", "Turquia", "Ilhas Gregas"],
    itinerary: [
      { dia: "Dia 1", descricao: "Voo de partida (Miami ou Rio de Janeiro) → Atenas. Pernoite a bordo." },
      { dia: "Dia 2", descricao: "Atenas — chegada, recepção, transfer ao hotel e descanso." },
      { dia: "Dia 3", descricao: "Corinto Antiga (Templo de Apolo, Bema) → tarde livre no bairro de Plaka." },
      { dia: "Dia 4", descricao: "Ágora → Areópago de Atenas → embarque no Celestyal (jantar a bordo)." },
      { dia: "Dia 5", descricao: "Tessalônica (navio)." },
      { dia: "Dia 6", descricao: "Kusadasi / Éfeso (navio)." },
      { dia: "Dia 7", descricao: "Heraklion, Creta (dia livre)." },
      { dia: "Dia 8", descricao: "Santorini (dia livre)." },
      { dia: "Dia 9", descricao: "Mykonos (dia livre)." },
      { dia: "Dia 10", descricao: "Milos (dia livre)." },
      { dia: "Dia 11", descricao: "Atenas → desembarque e transfer ao aeroporto." },
      { dia: "Dia 12", descricao: "Retorno e fim dos serviços." },
    ],
    includes: [
      "Passagem aérea (saída de Miami ou Rio de Janeiro) x Atenas",
      "7 noites no navio Celestyal Journey com pensão completa",
      "2 noites em Atenas com café da manhã e jantar",
      "Taxa de turismo",
      "Transfers aeroporto x porto x aeroporto",
      "Tours em Atenas (Areópago e Ágora) e Corinto Antigo",
      "Assessoria completa do Brasil até o fim da viagem",
      "Entradas em todos os locais conforme itinerário",
    ],
    notIncludes: [
      "Gastos pessoais, extras e taxas nos hotéis, documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Seguro viagem",
    ],
    price: "U$ 3.790,00",
    departureDate: null,
    leader: "Pastor Lécio Dornas",
    heroImage: "/images/card-greece.jpg",
    gallery: [],
    featured: true,
    badge: "Grécia + Cruzeiro",
    pdfUrl: "https://carmeltour.com/wp-content/uploads/2025/05/10-Pr-lecio-Caminhos-de-paulo-Mia.pdf",
  },
  // =========== 7 IGREJAS & EXPERIÊNCIAS ===========
  {
    slug: "sete-igrejas-roma-ilhas-gregas",
    category: "7-igrejas",
    title: "Sete Igrejas do Apocalipse, Roma & Ilhas Gregas",
    subtitle: "As Sete Igrejas do Apocalipse, com Roma e cruzeiro pelas Ilhas Gregas",
    description:
      "Uma jornada fascinante às Sete Igrejas do Apocalipse, na atual Turquia, onde os primeiros cristãos receberam as mensagens proféticas do último livro da Bíblia. Caminhe por Éfeso, Pérgamo e Laodicéia, explore Roma — a cidade eterna do Cristianismo — e navegue pela Grécia em um cruzeiro inesquecível.",
    highlights: [
      "As Sete Igrejas do Apocalipse na Turquia (Éfeso, Pérgamo, Laodicéia, Tiatira, Esmirna, Sardes e Filadélfia)",
      "Roma: Coliseu, Foro Romano, Vaticano, Piazza Navona, Panteão e a Prisão de Paulo",
      "Cruzeiro pelas Ilhas Gregas (Patmos, Rodes, Heraklion, Santorini, Atenas e Mykonos)",
      "Istambul: Mesquita Azul, Santa Sofia, Grande Bazar e passeio de barco pelo Bósforo",
      "Pamukkale e a Casa de Maria em Éfeso",
    ],
    duration: "14 dias",
    destinations: ["Turquia", "Grécia", "Ilhas Gregas", "Roma"],
    itinerary: [
      { dia: "Dias 1 e 2", descricao: "São Paulo → Istambul (voo). Chegada, recepção, transfer ao hotel e descanso." },
      { dia: "Dia 3", descricao: "Istambul — Hipódromo Romano, Mesquita Azul, Santa Sofia (por fora), Grande Bazar e passeio de barco pelo Bósforo." },
      { dia: "Dia 4", descricao: "Istambul → Tiatira → Pérgamo → Esmirna → Izmir." },
      { dia: "Dias 5 a 9", descricao: "Cruzeiro pelas Ilhas Gregas: Patmos (Gruta do Apocalipse), Rodes, Heraklion (Creta), Santorini, Atenas (Areópago) e Mykonos." },
      { dia: "Dia 9", descricao: "Éfeso → Casa de Maria → Laodicéia → Pamukkale." },
      { dia: "Dia 10", descricao: "Sardes → Filadélfia → Istambul. Check-in no hotel e descanso." },
      { dia: "Dia 11", descricao: "Istambul → Roma (voo). Tour panorâmico — Coliseu, Foro Romano e praças." },
      { dia: "Dia 12", descricao: "Roma — Museus do Vaticano, Piazza Navona, Panteão e Coliseu." },
      { dia: "Dia 13", descricao: "Roma — Foro Romano e Prisão de Paulo." },
      { dia: "Dia 14", descricao: "Roma → Brasil. Fim dos serviços." },
    ],
    includes: [
      "Passagem aérea em classe econômica: São Paulo x Istambul x Roma x São Paulo",
      "5 noites de hospedagem com meia pensão",
      "3 noites em Roma com café da manhã",
      "4 noites no navio Celestyal com pensão completa",
      "Receptivo e assistência na chegada e partida",
      "Entradas em todos os locais conforme itinerário",
      "Ônibus de luxo com Wi-Fi e ar-condicionado",
      "Seguro viagem (maiores de 64 anos podem ter taxa extra)",
      "Guias locais falando português",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Gorjetas para os guias",
    ],
    price: "U$ 4.449,00",
    departureDate: null,
    leader: "Paula Garcia",
    heroImage: "/images/card-turkey.jpg",
    gallery: [],
    featured: true,
    badge: "7 Igrejas",
    pdfUrl: "https://carmeltour.com/wp-content/uploads/2025/05/1-7-Igrejas-do-Apocalipse-Paula-Garcia.pdf",
  },
  {
    slug: "sete-igrejas-ilhas-gregas-capadocia",
    category: "7-igrejas",
    title: "Sete Igrejas do Apocalipse, Ilhas Gregas & Capadócia",
    subtitle: "As 7 Igrejas do Apocalipse, a Capadócia e um cruzeiro pelas Ilhas Gregas",
    description:
      "Descubra as 7 Igrejas do Apocalipse — Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia e Laodicéia — e navegue pelas maravilhas da Grécia. Acrescente a deslumbrante Capadócia, com suas cidades subterrâneas e chaminés de fadas, e Istambul, a cidade entre dois continentes.",
    highlights: [
      "As Igrejas do Apocalipse: Laodicéia, Sardes, Filadélfia, Pérgamo, Tiatira e Éfeso",
      "Cruzeiro pelas Ilhas Gregas: Patmos, Rodes, Heraklion, Santorini e Mykonos",
      "Capadócia: cidade subterrânea, Museu ao Ar Livre de Göreme, Chaminés de Fadas e Vale dos Pombos",
      "Istambul: Mercado de Especiarias, Ponte de Gálata e Mesquita Suleymaniye",
      "Pamukkale (Castelo de Algodão) e Antioquia da Pisídia",
      "Éfeso: ruínas e Basílica de São João",
    ],
    duration: "15 dias / 13 noites",
    destinations: ["Turquia", "Ilhas Gregas", "Grécia"],
    itinerary: [
      { dia: "Dia 1", descricao: "São Paulo → Istambul (voo). Chegada, recepção, transfer ao hotel e descanso." },
      { dia: "Dia 2", descricao: "Istambul — Mercado de Especiarias, Ponte de Gálata e Mesquita Suleymaniye." },
      { dia: "Dia 3", descricao: "Capadócia (voo) — cidade subterrânea, centro de tapetes e centro de joias." },
      { dia: "Dia 4", descricao: "Capadócia → Konya — Museu ao Ar Livre de Göreme, Chaminés de Fadas e Vale dos Pombos." },
      { dia: "Dia 5", descricao: "Antioquia da Pisídia → Pamukkale — Castelo de Algodão." },
      { dia: "Dia 6", descricao: "Laodicéia → Sardes → Filadélfia → Izmir." },
      { dia: "Dia 7", descricao: "Pérgamo → Tiatira — Acrópole, templos e teatro. Hospedagem em Kusadasi." },
      { dia: "Dias 8 a 12", descricao: "Cruzeiro pelas Ilhas Gregas — Patmos (Caverna do Apocalipse, Mosteiro de São João), Rodes, Heraklion (Creta), Santorini e Mykonos." },
      { dia: "Dia 13", descricao: "Kusadasi → Éfeso → Basílica de São João → Istambul. Hospedagem e jantar." },
      { dia: "Dia 14", descricao: "Istambul → voo de retorno a São Paulo." },
      { dia: "Dia 15", descricao: "Chegada a São Paulo e fim dos serviços." },
    ],
    includes: [
      "Passagem aérea em classe econômica",
      "4 noites no cruzeiro (todas as refeições e entretenimento incluídos)",
      "Tarifas portuárias",
      "7 noites na Turquia com meia pensão",
      "Receptivo e assistência na chegada e partida",
      "Entradas em todos os locais conforme itinerário",
      "Ônibus de luxo com ar-condicionado",
      "Guias falando português",
      "Assessoria 24h",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais e serviços não mencionados",
      "Refeições não mencionadas e bebidas",
      "Taxa de turismo",
      "Gorjetas para guias e motoristas",
      "Seguro viagem",
    ],
    price: "Consulte",
    departureDate: null,
    heroImage: "/images/card-ephesus.jpg",
    gallery: [],
    featured: true,
    badge: "7 Igrejas",
    pdfUrl: "https://carmeltour.com/wp-content/uploads/2025/05/2-7igrejas-Ap-Andre_compressed.pdf",
  },
  // =========== CARMEL CASAIS ===========
  {
    slug: "cruzeiro-casais-europa",
    category: "casais",
    title: "Cruzeiro para Casais na Europa",
    subtitle: "Cruzeiro especial para casais por Portugal, Espanha, França e Itália",
    description:
      "Cruzeiro especial para casais, com palestras e workshops sobre relacionamento durante os dias no mar. Navegue pelas costas encantadoras de Portugal, Espanha, França e Itália, unindo lazer, espiritualidade e o fortalecimento da vida a dois.",
    highlights: [
      "Cruzeiro pela Europa (Itália, França, Espanha e Portugal)",
      "Evento especial para casais com palestras e workshops sobre relacionamento",
      "Marselha: Vieux-Port e Notre-Dame de la Garde",
      "Málaga: centro histórico, Catedral e Museu Picasso",
      "Cádiz: Catedral, bairro histórico e Parque Genovés",
      "Desembarque em Lisboa",
    ],
    duration: "6 dias / 5 noites",
    destinations: ["Portugal", "Espanha", "França", "Itália"],
    itinerary: [
      { dia: "Dia 1", descricao: "Lisboa → Milão (voo) → Gênova (embarque às 18h). Sessão inaugural — boas-vindas e programa do evento." },
      { dia: "Dia 2", descricao: "Marselha, França (09h-17h) — Vieux-Port e Basílica Notre-Dame de la Garde; opcional: Aix-en-Provence." },
      { dia: "Dia 3", descricao: "Dia no mar — palestras e workshops para casais (comunicação, intimidade, planejamento a dois) e atividades a bordo." },
      { dia: "Dia 4", descricao: "Málaga, Espanha (08h-18h) — centro histórico, Catedral e Museu Picasso; opcional: Granada/Alhambra." },
      { dia: "Dia 5", descricao: "Cádiz, Espanha (07h-17h) — Catedral, bairro histórico e Parque Genovés; opcional: Sevilha." },
      { dia: "Dia 6", descricao: "Lisboa, Portugal (chegada às 09h). Fim do evento." },
    ],
    includes: [
      "Passagem aérea Lisboa x Milão",
      "5 noites no navio em cabine interna com pensão completa",
      "Receptivo e assistência",
      "Transfer Milão → Gênova",
      "Guias locais e assistência",
      "Espaço para a conferência de casais",
    ],
    notIncludes: [
      "Gastos pessoais, extras nos hotéis e documentos",
      "Passeios opcionais",
      "Bebidas não incluídas na pensão completa",
      "Gorjetas para guias",
      "Seguro viagem",
    ],
    price: "€ 899,00",
    departureDate: null,
    leader: "Pra. Elisabete e Pr. Ezio",
    heroImage: "/images/card-amalfi.jpg",
    gallery: [],
    featured: true,
    badge: "Para Casais",
    pdfUrl: "https://carmeltour.com/wp-content/uploads/2025/05/12-Pra-Elisabete-lisboa.pdf",
  },
];

const startOfToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

/** Um roteiro está ativo se não tem data (evergreen) ou se a saída ainda não passou. */
export function isActive(pkg: Package, today: Date = startOfToday()): boolean {
  if (!pkg.departureDate) return true;
  return new Date(pkg.departureDate) >= today;
}

/** Ordena: saídas com data confirmada primeiro (mais próximas antes), evergreen depois. */
function byDeparture(a: Package, b: Package): number {
  if (a.departureDate && b.departureDate) {
    return a.departureDate.localeCompare(b.departureDate);
  }
  if (a.departureDate) return -1;
  if (b.departureDate) return 1;
  return 0;
}

/** Todos os roteiros visíveis (sem os vencidos), ordenados por data. */
export function getActivePackages(): Package[] {
  return packages.filter((p) => isActive(p)).sort(byDeparture);
}

export function getFeaturedPackages(): Package[] {
  return getActivePackages().filter((p) => p.featured);
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: PackageCategory): Package[] {
  return getActivePackages().filter((p) => p.category === category);
}

/** Categorias que têm ao menos um roteiro ativo (para não exibir seções vazias). */
export function getActiveCategories(): PackageCategory[] {
  const order: PackageCategory[] = ["viagens-biblicas", "7-igrejas", "educacao", "casais"];
  return order.filter((cat) => getPackagesByCategory(cat).length > 0);
}
