/**
 * Catálogo de páginas de servicio (SEO long-tail).
 *
 * Una página por oficio, no una por cada combinación de zona: cientos de URLs
 * casi idénticas son "doorway pages" y Google las trata como spam. Cada entrada
 * tiene contenido propio y menciona las zonas de cobertura dentro del texto.
 */

export type Locale = 'es' | 'en' | 'pt';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  includes: string[];
  priceRange: string;
  priceNote: string;
  questions: string[];
  faqs: ServiceFaq[];
  image: string;
}

export interface ServiceEntry {
  id: string;
  content: Record<Locale, ServiceContent>;
}

export const SERVICE_LOCALES: Locale[] = ['es', 'en', 'pt'];

export const ZONES: Record<Locale, string[]> = {
  es: [
    'Equipetrol',
    'Plan 3000',
    'Villa 1ro de Mayo',
    'Pampa de la Isla',
    'Las Palmas',
    'Av. Banzer',
    'Santos Dumont',
    'Doble Vía a La Guardia',
    'Centro',
    'Montero',
    'Warnes',
    'Cotoca',
  ],
  en: [
    'Equipetrol',
    'Plan 3000',
    'Villa 1ro de Mayo',
    'Pampa de la Isla',
    'Las Palmas',
    'Av. Banzer',
    'Santos Dumont',
    'Doble Vía a La Guardia',
    'Downtown',
    'Montero',
    'Warnes',
    'Cotoca',
  ],
  pt: [
    'Equipetrol',
    'Plan 3000',
    'Villa 1ro de Mayo',
    'Pampa de la Isla',
    'Las Palmas',
    'Av. Banzer',
    'Santos Dumont',
    'Doble Vía a La Guardia',
    'Centro',
    'Montero',
    'Warnes',
    'Cotoca',
  ],
};

const IMG = {
  plomeria: '/images/categories/plomeria.jpg',
  electricidad: '/images/categories/electricidad.jpg',
  construccion: '/images/categories/construccion.jpg',
  pintura: '/images/categories/pintura.jpg',
  limpieza: '/images/categories/limpieza.jpg',
  carpinteria: '/images/categories/carpinteria.jpg',
  transporte: '/images/categories/transporte.jpg',
  mecanica: '/images/categories/mecanica.jpg',
  jardineria: '/images/categories/jardineria.jpg',
  general: '/images/categories/general.jpg',
};

export const SERVICES: ServiceEntry[] = [
  {
    id: 'plomero',
    content: {
      es: {
        slug: 'plomero-santa-cruz',
        name: 'Plomero',
        title: 'Plomero en Santa Cruz de la Sierra: precios y cómo contratar',
        description:
          'Contrata un plomero en Santa Cruz de la Sierra para fugas, destranques, bombas de agua y sanitarios. Precios de referencia en Bs y trabajadores verificados.',
        h1: 'Plomero en Santa Cruz de la Sierra',
        intro: [
          'Una fuga que gotea toda la noche o un desagüe tapado en la cocina se convierten rápido en humedad en la pared y en un problema de convivencia. Un plomero con experiencia resuelve la mayoría de estos casos en una sola visita, sin romper más de lo necesario.',
          'En Chamba publicas lo que necesitas, indicas cuánto quieres pagar en bolivianos y recibes ofertas de plomeros de tu zona. Tú eliges con quién trabajar y le pagas directo al trabajador.',
        ],
        includes: [
          'Detección y reparación de fugas en cañerías y griferías',
          'Destranque de desagües, lavaderos, baños y cámaras',
          'Instalación y cambio de bombas de agua y tanques',
          'Colocación de sanitarios, lavamanos, duchas y llaves de paso',
        ],
        priceRange: 'Desde Bs 60 por una reparación puntual; entre Bs 150 y Bs 400 por instalaciones de media jornada.',
        priceNote:
          'El precio final depende del material, de qué tan accesible esté la cañería y de si es una emergencia de noche o fin de semana.',
        questions: [
          '¿La visita de diagnóstico tiene costo o se descuenta del trabajo?',
          '¿El material está incluido o lo compro yo aparte?',
          '¿Qué garantía das sobre la reparación?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta un plomero en Santa Cruz de la Sierra?',
            a: 'Una reparación puntual de fuga o grifería suele costar entre Bs 60 y Bs 150. Un destranque con máquina va de Bs 100 a Bs 250, y una instalación completa se cotiza por trabajo según los metros de tubería.',
          },
          {
            q: '¿Atienden emergencias los fines de semana?',
            a: 'Muchos plomeros de Chamba atienden sábados, domingos y feriados con un recargo que se acuerda antes de empezar, para que no haya sorpresas al final.',
          },
          {
            q: '¿Cómo sé que el plomero es confiable?',
            a: 'En la app ves el perfil, los trabajos realizados y la calificación de cada trabajador. Además la identidad se verifica con carnet de identidad antes de que pueda aceptar trabajos.',
          },
        ],
        image: IMG.plomeria,
      },
      en: {
        slug: 'plumber-santa-cruz',
        name: 'Plumber',
        title: 'Plumber in Santa Cruz de la Sierra: prices and how to hire',
        description:
          'Hire a plumber in Santa Cruz de la Sierra for leaks, clogged drains, water pumps and bathroom fixtures. Reference prices in Bs and verified local workers.',
        h1: 'Plumber in Santa Cruz de la Sierra',
        intro: [
          'A leak that drips all night or a blocked kitchen drain quickly turns into damp walls and a strained household. An experienced plumber usually solves most of these cases in a single visit, without tearing up more than necessary.',
          'With Chamba you post what you need, set the price you want to pay in bolivianos, and receive offers from plumbers in your area. You choose who to hire and pay the worker directly.',
        ],
        includes: [
          'Leak detection and repair in pipes and faucets',
          'Unclogging drains, sinks, bathrooms and inspection chambers',
          'Water pump and water tank installation or replacement',
          'Fitting toilets, sinks, showers and shut-off valves',
        ],
        priceRange: 'From Bs 60 for a small repair; Bs 150 to Bs 400 for half-day installations.',
        priceNote:
          'The final price depends on materials, how accessible the pipework is, and whether it is an emergency at night or on a weekend.',
        questions: [
          'Is there a call-out fee, or is it deducted from the job?',
          'Are materials included or do I buy them separately?',
          'What guarantee do you give on the repair?',
        ],
        faqs: [
          {
            q: 'How much does a plumber cost in Santa Cruz de la Sierra?',
            a: 'A single leak or faucet repair usually costs between Bs 60 and Bs 150. Machine unclogging runs from Bs 100 to Bs 250, and a full installation is quoted per job based on the length of pipework.',
          },
          {
            q: 'Do plumbers work on weekends?',
            a: 'Many Chamba plumbers work Saturdays, Sundays and public holidays with a surcharge agreed before the job starts, so there are no surprises at the end.',
          },
          {
            q: 'How do I know the plumber is trustworthy?',
            a: 'The app shows each worker profile, completed jobs and rating. Identity is verified with a national ID card before a worker can accept jobs.',
          },
        ],
        image: IMG.plomeria,
      },
      pt: {
        slug: 'encanador-santa-cruz',
        name: 'Encanador',
        title: 'Encanador em Santa Cruz de la Sierra: preços e como contratar',
        description:
          'Contrate um encanador em Santa Cruz de la Sierra para vazamentos, desentupimentos, bombas de água e louças sanitárias. Preços de referência em Bs e profissionais verificados.',
        h1: 'Encanador em Santa Cruz de la Sierra',
        intro: [
          'Um vazamento que pinga a noite toda ou um ralo entupido na cozinha vira rapidamente umidade na parede e conflito em casa. Um encanador experiente resolve a maioria desses casos em uma única visita, sem quebrar mais do que o necessário.',
          'Na Chamba você publica o que precisa, define quanto quer pagar em bolivianos e recebe propostas de encanadores da sua região. Você escolhe com quem trabalhar e paga direto ao profissional.',
        ],
        includes: [
          'Detecção e reparo de vazamentos em tubulações e torneiras',
          'Desentupimento de ralos, pias, banheiros e caixas de inspeção',
          'Instalação e troca de bombas de água e caixas d’água',
          'Instalação de vasos sanitários, lavatórios, chuveiros e registros',
        ],
        priceRange: 'A partir de Bs 60 por um reparo pontual; entre Bs 150 e Bs 400 por instalações de meio período.',
        priceNote:
          'O preço final depende do material, do acesso à tubulação e de ser uma emergência à noite ou no fim de semana.',
        questions: [
          'A visita de diagnóstico é cobrada ou descontada do serviço?',
          'O material está incluído ou eu compro à parte?',
          'Qual garantia você dá para o serviço?',
        ],
        faqs: [
          {
            q: 'Quanto custa um encanador em Santa Cruz de la Sierra?',
            a: 'Um reparo pontual de vazamento ou torneira costuma custar entre Bs 60 e Bs 150. Um desentupimento com máquina vai de Bs 100 a Bs 250, e uma instalação completa é orçada por serviço conforme os metros de tubulação.',
          },
          {
            q: 'Os encanadores atendem nos fins de semana?',
            a: 'Muitos encanadores da Chamba atendem sábados, domingos e feriados com uma taxa acordada antes do início do serviço.',
          },
          {
            q: 'Como sei que o encanador é confiável?',
            a: 'No aplicativo você vê o perfil, os serviços realizados e a avaliação de cada profissional. A identidade é verificada com documento oficial antes de ele aceitar trabalhos.',
          },
        ],
        image: IMG.plomeria,
      },
    },
  },
  {
    id: 'electricista',
    content: {
      es: {
        slug: 'electricista-santa-cruz',
        name: 'Electricista',
        title: 'Electricista en Santa Cruz de la Sierra: precios y servicios',
        description:
          'Electricistas a domicilio en Santa Cruz de la Sierra para cortocircuitos, tableros, luminarias LED y cableado. Precios de referencia en Bs y trabajadores verificados.',
        h1: 'Electricista en Santa Cruz de la Sierra',
        intro: [
          'Un disyuntor que salta cada vez que enciendes el aire acondicionado no es una molestia menor: es la señal de una instalación que está trabajando al límite. Manipular el tablero sin conocimiento es la causa más común de incendios domésticos en Bolivia.',
          'En Chamba encuentras electricistas de tu zona que revisan, diagnostican y reparan con las protecciones correctas. Publicas el problema, pones tu presupuesto en Bs y eliges entre las ofertas que recibes.',
        ],
        includes: [
          'Diagnóstico de cortocircuitos y reparación de cableado',
          'Instalación y cambio de tableros, disyuntores y puesta a tierra',
          'Colocación de luminarias LED, tomacorrientes e interruptores',
          'Cableado de ambientes nuevos y ampliaciones',
        ],
        priceRange: 'Desde Bs 70 por un punto o diagnóstico; entre Bs 150 y Bs 500 por tableros y cableados completos.',
        priceNote:
          'Un trabajo que exige abrir muros, subir a cielo raso o trabajar con líneas trifásicas se cotiza aparte, siempre después de una revisión en sitio.',
        questions: [
          '¿Vas a revisar la instalación completa o solo el punto con falla?',
          '¿El material eléctrico que usas está certificado?',
          '¿Dejas constancia de lo que cambiaste y por qué?',
        ],
        faqs: [
          {
            q: '¿Cuánto cobra un electricista en Santa Cruz?',
            a: 'Un diagnóstico o cambio de punto ronda los Bs 70 a Bs 150. Cambiar un tablero completo con disyuntores suele estar entre Bs 200 y Bs 500, según la cantidad de circuitos.',
          },
          {
            q: '¿Puedo contratar solo la revisión antes de decidir?',
            a: 'Sí. Puedes pedir un diagnóstico y decidir después si contratas la reparación; el costo de esa visita se acuerda por chat antes de que el electricista llegue.',
          },
          {
            q: '¿Trabajan con aires acondicionados?',
            a: 'La instalación eléctrica de un split corresponde al electricista: punto dedicado, disyuntor y cableado. La carga de gas y la instalación del equipo las hace un técnico en refrigeración.',
          },
        ],
        image: IMG.electricidad,
      },
      en: {
        slug: 'electrician-santa-cruz',
        name: 'Electrician',
        title: 'Electrician in Santa Cruz de la Sierra: prices and services',
        description:
          'Home electricians in Santa Cruz de la Sierra for short circuits, breaker panels, LED lighting and wiring. Reference prices in Bs and verified workers.',
        h1: 'Electrician in Santa Cruz de la Sierra',
        intro: [
          'A breaker that trips every time you turn on the air conditioning is not a minor annoyance: it means the installation is running at its limit. Touching a panel without the right knowledge is the most common cause of house fires in Bolivia.',
          'Chamba connects you with electricians in your area who inspect, diagnose and repair with proper protection. Post the problem, set your budget in Bs and choose among the offers you receive.',
        ],
        includes: [
          'Short-circuit diagnosis and wiring repair',
          'Breaker panel, fuse and grounding installation or replacement',
          'Fitting LED lights, sockets and switches',
          'Wiring for new rooms and extensions',
        ],
        priceRange: 'From Bs 70 per point or diagnosis; Bs 150 to Bs 500 for full panels and rewiring.',
        priceNote:
          'Jobs that require opening walls, working above a ceiling or handling three-phase lines are quoted separately, always after an on-site inspection.',
        questions: [
          'Will you check the whole installation or only the faulty point?',
          'Is the electrical material you use certified?',
          'Will you leave a record of what you changed and why?',
        ],
        faqs: [
          {
            q: 'How much does an electrician charge in Santa Cruz?',
            a: 'A diagnosis or single-point replacement is around Bs 70 to Bs 150. Replacing a full breaker panel usually costs between Bs 200 and Bs 500, depending on the number of circuits.',
          },
          {
            q: 'Can I hire just the inspection first?',
            a: 'Yes. You can request a diagnosis and decide later whether to hire the repair; the visit fee is agreed in chat before the electrician arrives.',
          },
          {
            q: 'Do they work on air conditioning?',
            a: 'The electrical side of a split unit belongs to the electrician: dedicated circuit, breaker and wiring. Gas charging and equipment installation are handled by a refrigeration technician.',
          },
        ],
        image: IMG.electricidad,
      },
      pt: {
        slug: 'eletricista-santa-cruz',
        name: 'Eletricista',
        title: 'Eletricista em Santa Cruz de la Sierra: preços e serviços',
        description:
          'Eletricistas a domicílio em Santa Cruz de la Sierra para curtos-circuitos, quadros de distribuição, iluminação LED e fiação. Preços em Bs e profissionais verificados.',
        h1: 'Eletricista em Santa Cruz de la Sierra',
        intro: [
          'Um disjuntor que desarma toda vez que você liga o ar-condicionado não é um incômodo pequeno: é o sinal de uma instalação trabalhando no limite. Mexer no quadro sem conhecimento é a causa mais comum de incêndios residenciais na Bolívia.',
          'Na Chamba você encontra eletricistas da sua região que inspecionam, diagnosticam e reparam com as proteções corretas. Publique o problema, defina seu orçamento em Bs e escolha entre as propostas recebidas.',
        ],
        includes: [
          'Diagnóstico de curtos-circuitos e reparo de fiação',
          'Instalação e troca de quadros, disjuntores e aterramento',
          'Instalação de luminárias LED, tomadas e interruptores',
          'Fiação de ambientes novos e ampliações',
        ],
        priceRange: 'A partir de Bs 70 por ponto ou diagnóstico; entre Bs 150 e Bs 500 por quadros e fiações completas.',
        priceNote:
          'Serviços que exigem abrir paredes, trabalhar em forro ou lidar com linhas trifásicas são orçados à parte, sempre após uma vistoria no local.',
        questions: [
          'Você vai revisar a instalação inteira ou só o ponto com defeito?',
          'O material elétrico que você usa é certificado?',
          'Você deixa registro do que trocou e por quê?',
        ],
        faqs: [
          {
            q: 'Quanto cobra um eletricista em Santa Cruz?',
            a: 'Um diagnóstico ou troca de ponto fica entre Bs 70 e Bs 150. Trocar um quadro completo com disjuntores costuma custar entre Bs 200 e Bs 500, conforme a quantidade de circuitos.',
          },
          {
            q: 'Posso contratar só a vistoria antes de decidir?',
            a: 'Sim. Você pode pedir um diagnóstico e decidir depois se contrata o reparo; o valor da visita é combinado pelo chat antes de o eletricista chegar.',
          },
          {
            q: 'Vocês trabalham com ar-condicionado?',
            a: 'A parte elétrica de um split é do eletricista: circuito dedicado, disjuntor e fiação. A carga de gás e a instalação do equipamento ficam com um técnico em refrigeração.',
          },
        ],
        image: IMG.electricidad,
      },
    },
  },
  {
    id: 'albanil',
    content: {
      es: {
        slug: 'albanil-santa-cruz',
        name: 'Albañil',
        title: 'Albañil en Santa Cruz de la Sierra: precios por día y por obra',
        description:
          'Contrata albañiles en Santa Cruz de la Sierra para revoques, muros, pisos, cerámica y refacciones. Precios de referencia en Bs por día y por metro cuadrado.',
        h1: 'Albañil en Santa Cruz de la Sierra',
        intro: [
          'Una refacción pequeña se convierte en obra cuando nadie define el alcance: cuántos metros, qué material, en cuántos días. Un albañil con experiencia trabaja más rápido y deja menos escombro, pero sobre todo te dice de entrada qué no se puede hacer.',
          'En Chamba publicas el trabajo con fotos y medidas, pones tu presupuesto en bolivianos y recibes ofertas de albañiles de tu zona. Acuerdas el alcance por chat antes de empezar.',
        ],
        includes: [
          'Revoque, empastado y resane de muros',
          'Colocado de cerámica, porcelanato y mayólica',
          'Levantado de muros, tabiques y ampliaciones',
          'Refacciones menores: baños, cocinas y patios',
        ],
        priceRange: 'Desde Bs 120 por día de trabajo; el colocado de piso se cotiza entre Bs 35 y Bs 70 por m².',
        priceNote:
          'El precio por m² varía según el formato de la cerámica, el estado de la base y si se trabaja en altura o con material pesado.',
        questions: [
          '¿Cobras por día, por metro cuadrado o por obra cerrada?',
          '¿Quién compra el material y quién lo traslada?',
          '¿Incluyes la limpieza y el retiro de escombro?',
        ],
        faqs: [
          {
            q: '¿Cuánto gana un albañil por día en Santa Cruz?',
            a: 'Un albañil con experiencia cobra entre Bs 120 y Bs 250 por día según el tipo de trabajo. Para obras cerradas conviene pedir cotización por metro cuadrado y no por jornada.',
          },
          {
            q: '¿Cómo se calcula el colocado de piso?',
            a: 'Se mide el área real a cubrir y se suman entre 8% y 10% de desperdicio de material. Un piso de formato grande requiere más tiempo y suele costar más por m².',
          },
          {
            q: '¿Puedo pedir un ayudante aparte?',
            a: 'Sí. En la app puedes indicar que necesitas ayudante por día; muchos trabajos de vaciado, carga o movimiento de material lo requieren.',
          },
        ],
        image: IMG.construccion,
      },
      en: {
        slug: 'mason-santa-cruz',
        name: 'Mason',
        title: 'Mason in Santa Cruz de la Sierra: daily and project rates',
        description:
          'Hire masons in Santa Cruz de la Sierra for plastering, walls, flooring, tiles and small renovations. Reference prices in Bs per day and per square metre.',
        h1: 'Mason in Santa Cruz de la Sierra',
        intro: [
          'A small renovation turns into a construction site when nobody defines the scope: how many square metres, which materials, how many days. An experienced mason works faster and leaves less debris behind, but above all tells you upfront what cannot be done.',
          'On Chamba you post the job with photos and measurements, set your budget in bolivianos and receive offers from masons in your area. You agree the scope in chat before work starts.',
        ],
        includes: [
          'Plastering, rendering and wall patching',
          'Laying ceramic, porcelain and wall tiles',
          'Building walls, partitions and extensions',
          'Small renovations: bathrooms, kitchens and patios',
        ],
        priceRange: 'From Bs 120 per working day; floor tiling is quoted between Bs 35 and Bs 70 per m².',
        priceNote:
          'The price per m² varies with tile size, the condition of the base surface, and whether work happens at height or with heavy materials.',
        questions: [
          'Do you charge per day, per square metre or per closed project?',
          'Who buys the materials and who transports them?',
          'Do you include cleaning and debris removal?',
        ],
        faqs: [
          {
            q: 'How much does a mason earn per day in Santa Cruz?',
            a: 'An experienced mason charges between Bs 120 and Bs 250 per day depending on the type of work. For closed projects it is better to ask for a quote per square metre rather than per day.',
          },
          {
            q: 'How is floor tiling calculated?',
            a: 'The actual area to cover is measured and 8% to 10% is added for material waste. Large-format tiles take longer and usually cost more per m².',
          },
          {
            q: 'Can I hire a helper separately?',
            a: 'Yes. In the app you can state that you need a helper per day; many pouring, loading or material-handling jobs require one.',
          },
        ],
        image: IMG.construccion,
      },
      pt: {
        slug: 'pedreiro-santa-cruz',
        name: 'Pedreiro',
        title: 'Pedreiro em Santa Cruz de la Sierra: preços por dia e por obra',
        description:
          'Contrate pedreiros em Santa Cruz de la Sierra para reboco, muros, pisos, cerâmica e reformas. Preços de referência em Bs por dia e por metro quadrado.',
        h1: 'Pedreiro em Santa Cruz de la Sierra',
        intro: [
          'Uma reforma pequena vira obra quando ninguém define o escopo: quantos metros, qual material, em quantos dias. Um pedreiro experiente trabalha mais rápido e deixa menos entulho, mas sobretudo diz de início o que não é possível fazer.',
          'Na Chamba você publica o serviço com fotos e medidas, define seu orçamento em bolivianos e recebe propostas de pedreiros da sua região. O escopo é combinado pelo chat antes de começar.',
        ],
        includes: [
          'Reboco, massa corrida e reparo de paredes',
          'Assentamento de cerâmica, porcelanato e azulejos',
          'Levantamento de muros, divisórias e ampliações',
          'Reformas menores: banheiros, cozinhas e quintais',
        ],
        priceRange: 'A partir de Bs 120 por dia de trabalho; o assentamento de piso é orçado entre Bs 35 e Bs 70 por m².',
        priceNote:
          'O preço por m² varia conforme o formato da cerâmica, o estado da base e se o trabalho é em altura ou com material pesado.',
        questions: [
          'Você cobra por dia, por metro quadrado ou por obra fechada?',
          'Quem compra o material e quem faz o transporte?',
          'A limpeza e a retirada de entulho estão incluídas?',
        ],
        faqs: [
          {
            q: 'Quanto ganha um pedreiro por dia em Santa Cruz?',
            a: 'Um pedreiro experiente cobra entre Bs 120 e Bs 250 por dia, conforme o tipo de serviço. Para obras fechadas vale pedir orçamento por metro quadrado em vez de por jornada.',
          },
          {
            q: 'Como é calculado o assentamento de piso?',
            a: 'Mede-se a área real a cobrir e somam-se de 8% a 10% de desperdício de material. Pisos de grande formato exigem mais tempo e costumam custar mais por m².',
          },
          {
            q: 'Posso contratar um ajudante à parte?',
            a: 'Sim. No aplicativo você pode indicar que precisa de ajudante por dia; muitos serviços de concretagem, carga e movimentação de material exigem um.',
          },
        ],
        image: IMG.construccion,
      },
    },
  },
  {
    id: 'pintor',
    content: {
      es: {
        slug: 'pintor-santa-cruz',
        name: 'Pintor',
        title: 'Pintor de casas en Santa Cruz de la Sierra: precios por ambiente',
        description:
          'Pintores de casas y departamentos en Santa Cruz de la Sierra. Precios por ambiente y por metro cuadrado, empastado, fachadas e impermeabilización en Bs.',
        h1: 'Pintor de casas en Santa Cruz de la Sierra',
        intro: [
          'Pintar parece sencillo hasta que la pared tiene humedad, grietas o capas viejas mal lijadas. Ahí es donde una pintura barata empieza a descascararse a los tres meses y hay que pagar dos veces.',
          'En Chamba publicas cuántos ambientes quieres pintar, si hay que empastar o reparar y tu presupuesto en Bs. Recibes ofertas de pintores de tu zona y eliges la que mejor se ajusta.',
        ],
        includes: [
          'Pintura interior de casas, departamentos y oficinas',
          'Empastado, lijado y sellado de paredes',
          'Pintura de fachadas y áreas exteriores',
          'Impermeabilización de techos y muros con humedad',
        ],
        priceRange: 'Desde Bs 50 por ambiente pequeño; entre Bs 25 y Bs 45 por m² en paredes con preparación incluida.',
        priceNote:
          'La pintura no está incluida salvo que se acuerde. Una pared con humedad necesita tratamiento previo; pintar encima solo esconde el problema unas semanas.',
        questions: [
          '¿El precio incluye la pintura o solo la mano de obra?',
          '¿Vas a empastar y lijar antes de pintar?',
          '¿Cuántas manos de pintura das y de qué marca?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta pintar un cuarto en Santa Cruz?',
            a: 'Un ambiente estándar de unos 12 m² cuesta entre Bs 150 y Bs 350 en mano de obra, según el estado de la pared y si incluye empastado. La pintura se suma aparte.',
          },
          {
            q: '¿Cuánto tarda pintar un departamento?',
            a: 'Un departamento de dos dormitorios, sala y comedor toma entre tres y cinco días de trabajo si hay que empastar. Sin preparación previa puede resolverse en dos días.',
          },
          {
            q: '¿Conviene pintar en temporada de lluvias?',
            a: 'En interiores no hay problema. En fachadas conviene esperar días secos: la humedad ambiental impide que la pintura cure bien y acelera el descascarado.',
          },
        ],
        image: IMG.pintura,
      },
      en: {
        slug: 'house-painter-santa-cruz',
        name: 'House painter',
        title: 'House painter in Santa Cruz de la Sierra: price per room',
        description:
          'House and apartment painters in Santa Cruz de la Sierra. Prices per room and per square metre, skim coating, facades and waterproofing in Bs.',
        h1: 'House painter in Santa Cruz de la Sierra',
        intro: [
          'Painting looks simple until the wall has damp patches, cracks or old layers that were never sanded properly. That is when cheap paint starts peeling three months later and you end up paying twice.',
          'On Chamba you post how many rooms you want painted, whether the walls need skim coating or repair, and your budget in Bs. You receive offers from painters in your area and pick the one that fits.',
        ],
        includes: [
          'Interior painting for houses, apartments and offices',
          'Skim coating, sanding and sealing of walls',
          'Facade and exterior painting',
          'Waterproofing of roofs and damp walls',
        ],
        priceRange: 'From Bs 50 for a small room; Bs 25 to Bs 45 per m² on walls with preparation included.',
        priceNote:
          'Paint is not included unless agreed. A damp wall needs treatment first; painting over it only hides the problem for a few weeks.',
        questions: [
          'Does the price include paint or only labour?',
          'Will you skim coat and sand before painting?',
          'How many coats do you apply and which brand?',
        ],
        faqs: [
          {
            q: 'How much does it cost to paint a room in Santa Cruz?',
            a: 'A standard 12 m² room costs between Bs 150 and Bs 350 in labour, depending on the condition of the walls and whether skim coating is included. Paint is charged separately.',
          },
          {
            q: 'How long does it take to paint an apartment?',
            a: 'A two-bedroom apartment with living and dining room takes three to five working days if skim coating is needed. Without preparation it can be done in two days.',
          },
          {
            q: 'Is it better to paint during the rainy season?',
            a: 'Indoors it makes no difference. For facades, wait for dry days: ambient humidity prevents the paint from curing properly and speeds up peeling.',
          },
        ],
        image: IMG.pintura,
      },
      pt: {
        slug: 'pintor-santa-cruz',
        name: 'Pintor',
        title: 'Pintor de casas em Santa Cruz de la Sierra: preço por ambiente',
        description:
          'Pintores de casas e apartamentos em Santa Cruz de la Sierra. Preços por ambiente e por metro quadrado, massa corrida, fachadas e impermeabilização em Bs.',
        h1: 'Pintor de casas em Santa Cruz de la Sierra',
        intro: [
          'Pintar parece simples até a parede ter umidade, trincas ou camadas antigas mal lixadas. É aí que a tinta barata começa a descascar em três meses e você acaba pagando duas vezes.',
          'Na Chamba você publica quantos ambientes quer pintar, se precisa de massa corrida ou reparo e seu orçamento em Bs. Recebe propostas de pintores da sua região e escolhe a que melhor se ajusta.',
        ],
        includes: [
          'Pintura interna de casas, apartamentos e escritórios',
          'Massa corrida, lixamento e selagem de paredes',
          'Pintura de fachadas e áreas externas',
          'Impermeabilização de telhados e paredes com umidade',
        ],
        priceRange: 'A partir de Bs 50 por ambiente pequeno; entre Bs 25 e Bs 45 por m² em paredes com preparação incluída.',
        priceNote:
          'A tinta não está incluída, salvo acordo. Parede com umidade exige tratamento prévio; pintar por cima apenas esconde o problema por algumas semanas.',
        questions: [
          'O preço inclui a tinta ou só a mão de obra?',
          'Você vai aplicar massa corrida e lixar antes de pintar?',
          'Quantas demãos você aplica e de qual marca?',
        ],
        faqs: [
          {
            q: 'Quanto custa pintar um quarto em Santa Cruz?',
            a: 'Um ambiente padrão de cerca de 12 m² custa entre Bs 150 e Bs 350 de mão de obra, conforme o estado da parede e se inclui massa corrida. A tinta é cobrada à parte.',
          },
          {
            q: 'Quanto tempo leva para pintar um apartamento?',
            a: 'Um apartamento de dois quartos, sala e cozinha leva de três a cinco dias úteis se houver massa corrida. Sem preparação prévia pode ser resolvido em dois dias.',
          },
          {
            q: 'Vale pintar na temporada de chuvas?',
            a: 'Em interiores não há problema. Em fachadas, espere dias secos: a umidade do ar impede a cura da tinta e acelera o descascamento.',
          },
        ],
        image: IMG.pintura,
      },
    },
  },
  {
    id: 'limpieza',
    content: {
      es: {
        slug: 'limpieza-santa-cruz',
        name: 'Limpieza',
        title: 'Servicio de limpieza en Santa Cruz de la Sierra: precios por jornada',
        description:
          'Personal de limpieza en Santa Cruz de la Sierra para casas, departamentos, oficinas y limpieza post-construcción. Precios por jornada en Bs.',
        h1: 'Servicio de limpieza en Santa Cruz de la Sierra',
        intro: [
          'Una limpieza profunda no es barrer y trapear: es mover muebles, desengrasar, desinfectar baños y sacar el polvo fino que se acumula detrás de los electrodomésticos. Por eso una casa que "parece limpia" puede tardar cinco horas en quedar realmente limpia.',
          'En Chamba publicas el tamaño de tu casa o el tipo de limpieza que necesitas, indicas cuánto quieres pagar y recibes ofertas de personal de limpieza de tu zona. Tú defines el día y pagas directo.',
        ],
        includes: [
          'Limpieza profunda de casas y departamentos',
          'Mantenimiento semanal o quincenal por horas',
          'Limpieza de oficinas y espacios comerciales',
          'Limpieza post-construcción y de mudanza',
        ],
        priceRange: 'Desde Bs 80 por media jornada; entre Bs 150 y Bs 300 por una limpieza profunda de casa completa.',
        priceNote:
          'El precio sube si la casa tiene muchos ambientes, mascotas, o si es una limpieza después de obra con escombro y polvo de cemento.',
        questions: [
          '¿Traes tus propios productos y utensilios?',
          '¿Cuántas horas calculas para el tamaño de mi casa?',
          '¿Incluye lavado de ventanas y balcones?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta una limpieza profunda en Santa Cruz?',
            a: 'Una casa de tres dormitorios suele costar entre Bs 200 y Bs 300 por una limpieza profunda inicial. El mantenimiento posterior por media jornada ronda los Bs 80 a Bs 120.',
          },
          {
            q: '¿Se puede contratar por horas?',
            a: 'Sí. Publica cuántas horas necesitas y para qué tareas; es la modalidad más común para mantenimiento semanal.',
          },
          {
            q: '¿Qué pasa si algo se rompe durante la limpieza?',
            a: 'Acuerda por chat antes de empezar cómo se manejan los objetos frágiles. Chamba permite reportar incidentes desde la app para que el caso quede registrado.',
          },
        ],
        image: IMG.limpieza,
      },
      en: {
        slug: 'cleaning-service-santa-cruz',
        name: 'Cleaning',
        title: 'Cleaning service in Santa Cruz de la Sierra: per-shift prices',
        description:
          'Cleaners in Santa Cruz de la Sierra for houses, apartments, offices and post-construction cleaning. Prices per shift in Bs, verified local workers.',
        h1: 'Cleaning service in Santa Cruz de la Sierra',
        intro: [
          'A deep clean is not sweeping and mopping: it means moving furniture, degreasing, disinfecting bathrooms and removing the fine dust that builds up behind appliances. That is why a house that "looks clean" can take five hours to actually become clean.',
          'On Chamba you post the size of your home or the type of cleaning you need, say how much you want to pay and receive offers from cleaners in your area. You set the day and pay directly.',
        ],
        includes: [
          'Deep cleaning of houses and apartments',
          'Weekly or fortnightly hourly maintenance',
          'Office and commercial space cleaning',
          'Post-construction and move-out cleaning',
        ],
        priceRange: 'From Bs 80 per half shift; Bs 150 to Bs 300 for a full deep clean of a house.',
        priceNote:
          'The price goes up with the number of rooms, pets, or for post-construction cleaning with rubble and cement dust.',
        questions: [
          'Do you bring your own products and equipment?',
          'How many hours do you estimate for my home size?',
          'Does it include windows and balconies?',
        ],
        faqs: [
          {
            q: 'How much does a deep clean cost in Santa Cruz?',
            a: 'A three-bedroom house usually costs between Bs 200 and Bs 300 for an initial deep clean. Ongoing maintenance per half shift is around Bs 80 to Bs 120.',
          },
          {
            q: 'Can I hire by the hour?',
            a: 'Yes. Post how many hours you need and for which tasks; it is the most common arrangement for weekly maintenance.',
          },
          {
            q: 'What happens if something breaks during cleaning?',
            a: 'Agree in chat before starting how fragile items will be handled. Chamba lets you report incidents from the app so the case is recorded.',
          },
        ],
        image: IMG.limpieza,
      },
      pt: {
        slug: 'diarista-santa-cruz',
        name: 'Diarista',
        title: 'Serviço de limpeza em Santa Cruz de la Sierra: preço por jornada',
        description:
          'Profissionais de limpeza em Santa Cruz de la Sierra para casas, apartamentos, escritórios e limpeza pós-obra. Preços por jornada em Bs.',
        h1: 'Serviço de limpeza em Santa Cruz de la Sierra',
        intro: [
          'Uma limpeza profunda não é varrer e passar pano: é mover móveis, desengordurar, desinfetar banheiros e retirar a poeira fina que se acumula atrás dos eletrodomésticos. Por isso uma casa que "parece limpa" pode levar cinco horas para ficar realmente limpa.',
          'Na Chamba você publica o tamanho da sua casa ou o tipo de limpeza que precisa, indica quanto quer pagar e recebe propostas de profissionais da sua região. Você define o dia e paga direto.',
        ],
        includes: [
          'Limpeza profunda de casas e apartamentos',
          'Manutenção semanal ou quinzenal por hora',
          'Limpeza de escritórios e espaços comerciais',
          'Limpeza pós-obra e de mudança',
        ],
        priceRange: 'A partir de Bs 80 por meio período; entre Bs 150 e Bs 300 por uma limpeza profunda de casa completa.',
        priceNote:
          'O preço sobe se a casa tem muitos ambientes, animais de estimação, ou se é limpeza pós-obra com entulho e poeira de cimento.',
        questions: [
          'Você traz seus próprios produtos e utensílios?',
          'Quantas horas você calcula para o tamanho da minha casa?',
          'Inclui lavagem de janelas e varandas?',
        ],
        faqs: [
          {
            q: 'Quanto custa uma limpeza profunda em Santa Cruz?',
            a: 'Uma casa de três quartos costuma custar entre Bs 200 e Bs 300 na primeira limpeza profunda. A manutenção posterior por meio período fica em torno de Bs 80 a Bs 120.',
          },
          {
            q: 'Dá para contratar por hora?',
            a: 'Sim. Publique quantas horas precisa e para quais tarefas; é o formato mais comum para manutenção semanal.',
          },
          {
            q: 'E se algo quebrar durante a limpeza?',
            a: 'Combine pelo chat antes de começar como os objetos frágeis serão tratados. A Chamba permite registrar incidentes pelo aplicativo para que o caso fique documentado.',
          },
        ],
        image: IMG.limpieza,
      },
    },
  },
  {
    id: 'carpintero',
    content: {
      es: {
        slug: 'carpintero-santa-cruz',
        name: 'Carpintero',
        title: 'Carpintero en Santa Cruz de la Sierra: muebles y reparaciones',
        description:
          'Carpinteros en Santa Cruz de la Sierra para muebles de melamina, puertas, closets y reparaciones en madera. Precios de referencia en Bs.',
        h1: 'Carpintero en Santa Cruz de la Sierra',
        intro: [
          'Un mueble de melamina mal medido no se arregla con más tornillos: queda torcido, la puerta roza y el cajón no cierra. La diferencia entre un mueble que dura años y uno que se desarma está en la medición y en los herrajes.',
          'En Chamba publicas medidas, fotos del espacio y el tipo de mueble que necesitas. Recibes ofertas de carpinteros de tu zona y acuerdas material y acabado antes de que compren nada.',
        ],
        includes: [
          'Armado e instalación de muebles de melamina',
          'Muebles a medida: closets, escritorios y reposteros',
          'Reparación de puertas, cerraduras y cajones',
          'Barnizado, laqueado y cambio de herrajes',
        ],
        priceRange: 'Desde Bs 70 por una reparación; un mueble a medida se cotiza desde Bs 800 según medidas y material.',
        priceNote:
          'El costo depende sobre todo del tablero, los herrajes y los metros lineales. Pedir cotización con plano o medidas exactas evita reprocesos.',
        questions: [
          '¿El precio incluye el tablero y los herrajes?',
          '¿Haces la instalación en mi casa o solo entregas el mueble?',
          '¿Qué tiempo de entrega manejas desde la medición?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta un closet a medida en Santa Cruz?',
            a: 'Un closet empotrado de dos metros lineales con puertas corredizas suele arrancar en Bs 1.500 en melamina estándar. El precio sube con herrajes importados o acabados especiales.',
          },
          {
            q: '¿Reparan muebles comprados en tienda?',
            a: 'Sí. Las reparaciones más comunes son bisagras vencidas, cajones descuadrados y puertas que rozan. Muchas se resuelven en una visita.',
          },
          {
            q: '¿Puedo comprar yo el material?',
            a: 'Se puede, pero conviene acordar antes el tipo exacto de tablero y el espesor para que el carpintero no trabaje con material que no soporta el diseño.',
          },
        ],
        image: IMG.carpinteria,
      },
      en: {
        slug: 'carpenter-santa-cruz',
        name: 'Carpenter',
        title: 'Carpenter in Santa Cruz de la Sierra: furniture and repairs',
        description:
          'Carpenters in Santa Cruz de la Sierra for melamine furniture, doors, closets and wood repairs. Reference prices in Bs and verified local workers.',
        h1: 'Carpenter in Santa Cruz de la Sierra',
        intro: [
          'Badly measured melamine furniture cannot be fixed with more screws: it ends up crooked, the door scrapes and the drawer will not close. The difference between furniture that lasts years and furniture that falls apart is in the measuring and the hinges.',
          'On Chamba you post measurements, photos of the space and the type of furniture you need. You receive offers from carpenters in your area and agree on material and finish before anything is bought.',
        ],
        includes: [
          'Assembly and installation of melamine furniture',
          'Custom furniture: closets, desks and kitchen cabinets',
          'Repair of doors, locks and drawers',
          'Varnishing, lacquering and hardware replacement',
        ],
        priceRange: 'From Bs 70 for a repair; custom furniture is quoted from Bs 800 depending on size and material.',
        priceNote:
          'Cost depends mainly on the board, the hardware and linear metres. Asking for a quote with exact measurements avoids rework.',
        questions: [
          'Does the price include board and hardware?',
          'Do you install at my home or only deliver the furniture?',
          'What lead time do you need from measuring?',
        ],
        faqs: [
          {
            q: 'How much does a custom closet cost in Santa Cruz?',
            a: 'A built-in closet of two linear metres with sliding doors usually starts at Bs 1,500 in standard melamine. The price rises with imported hardware or special finishes.',
          },
          {
            q: 'Do you repair store-bought furniture?',
            a: 'Yes. The most common repairs are worn hinges, misaligned drawers and doors that scrape. Many are solved in a single visit.',
          },
          {
            q: 'Can I buy the material myself?',
            a: 'You can, but agree on the exact board type and thickness first so the carpenter is not working with material that cannot support the design.',
          },
        ],
        image: IMG.carpinteria,
      },
      pt: {
        slug: 'marceneiro-santa-cruz',
        name: 'Marceneiro',
        title: 'Marceneiro em Santa Cruz de la Sierra: móveis e reparos',
        description:
          'Marceneiros em Santa Cruz de la Sierra para móveis de melamina, portas, closets e reparos em madeira. Preços de referência em Bs.',
        h1: 'Marceneiro em Santa Cruz de la Sierra',
        intro: [
          'Um móvel de melamina mal medido não se resolve com mais parafusos: fica torto, a porta raspa e a gaveta não fecha. A diferença entre um móvel que dura anos e um que se desmonta está na medição e nas ferragens.',
          'Na Chamba você publica medidas, fotos do espaço e o tipo de móvel que precisa. Recebe propostas de marceneiros da sua região e combina material e acabamento antes de qualquer compra.',
        ],
        includes: [
          'Montagem e instalação de móveis de melamina',
          'Móveis sob medida: closets, escrivaninhas e armários',
          'Reparo de portas, fechaduras e gavetas',
          'Envernizamento, laqueamento e troca de ferragens',
        ],
        priceRange: 'A partir de Bs 70 por um reparo; móvel sob medida é orçado a partir de Bs 800 conforme medidas e material.',
        priceNote:
          'O custo depende principalmente do painel, das ferragens e dos metros lineares. Pedir orçamento com medidas exatas evita retrabalho.',
        questions: [
          'O preço inclui o painel e as ferragens?',
          'Você faz a instalação na minha casa ou só entrega o móvel?',
          'Qual prazo você precisa desde a medição?',
        ],
        faqs: [
          {
            q: 'Quanto custa um closet sob medida em Santa Cruz?',
            a: 'Um closet embutido de dois metros lineares com portas de correr costuma começar em Bs 1.500 em melamina padrão. O preço sobe com ferragens importadas ou acabamentos especiais.',
          },
          {
            q: 'Vocês reparam móveis comprados em loja?',
            a: 'Sim. Os reparos mais comuns são dobradiças folgadas, gavetas desalinhadas e portas que raspam. Muitos se resolvem em uma visita.',
          },
          {
            q: 'Posso comprar o material eu mesmo?',
            a: 'Pode, mas combine antes o tipo exato de painel e a espessura para o marceneiro não trabalhar com material que não suporta o projeto.',
          },
        ],
        image: IMG.carpinteria,
      },
    },
  },
  {
    id: 'flete',
    content: {
      es: {
        slug: 'flete-mudanza-santa-cruz',
        name: 'Fletes y mudanzas',
        title: 'Fletes y mudanzas en Santa Cruz de la Sierra: precios por viaje',
        description:
          'Servicio de fletes y mudanzas en Santa Cruz de la Sierra con camioneta o camión. Precios por viaje en Bs, con ayudantes y embalaje.',
        h1: 'Fletes y mudanzas en Santa Cruz de la Sierra',
        intro: [
          'Mudarse dentro de la misma ciudad puede costar el doble de lo necesario si el vehículo es más chico de lo que parece o si nadie calculó el peso del refrigerador. La mayoría de los problemas aparecen por falta de ayudantes, no por falta de camión.',
          'En Chamba describes qué llevas, desde dónde y hacia dónde, y cuántos ayudantes necesitas. Recibes ofertas de transportistas de tu zona con precio cerrado por viaje.',
        ],
        includes: [
          'Mudanzas completas de casas y departamentos',
          'Fletes puntuales de muebles y electrodomésticos',
          'Transporte de material de construcción',
          'Carga y descarga con ayudantes',
        ],
        priceRange: 'Desde Bs 100 por un flete local; una mudanza de departamento suele estar entre Bs 250 y Bs 600.',
        priceNote:
          'Influyen la distancia, los pisos sin ascensor, el volumen real y si hay que desarmar muebles. Conviene enviar fotos antes de cerrar el precio.',
        questions: [
          '¿El precio incluye ayudantes o solo el chofer?',
          '¿Cuántos metros cúbicos o cuántos ambientes entran?',
          '¿Cubres daños si algo se golpea en el traslado?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta una mudanza en Santa Cruz?',
            a: 'Un flete pequeño dentro de la ciudad arranca en Bs 100. Una mudanza de un departamento de dos dormitorios con ayudantes suele costar entre Bs 250 y Bs 600 según la distancia y los pisos.',
          },
          {
            q: '¿Cobran por hora o por viaje?',
            a: 'Lo más común es precio cerrado por viaje cuando el volumen está claro. Si la carga es incierta, se acuerda por hora con un mínimo de dos horas.',
          },
          {
            q: '¿Desarman y arman los muebles?',
            a: 'Algunos transportistas lo incluyen y otros lo cobran aparte. Conviene preguntarlo antes y, si hace falta, contratar un carpintero para el armado.',
          },
        ],
        image: IMG.transporte,
      },
      en: {
        slug: 'moving-service-santa-cruz',
        name: 'Moving',
        title: 'Moving and delivery service in Santa Cruz de la Sierra',
        description:
          'Moving and delivery service in Santa Cruz de la Sierra with vans or trucks. Per-trip prices in Bs, helpers and packing available.',
        h1: 'Moving and delivery service in Santa Cruz de la Sierra',
        intro: [
          'Moving within the same city can cost twice what it should if the vehicle is smaller than it looks or nobody calculated the weight of the fridge. Most problems come from a lack of helpers, not a lack of trucks.',
          'On Chamba you describe what you are moving, from where to where, and how many helpers you need. You receive offers from local movers with a fixed price per trip.',
        ],
        includes: [
          'Full house and apartment moves',
          'Single-item delivery for furniture and appliances',
          'Construction material transport',
          'Loading and unloading with helpers',
        ],
        priceRange: 'From Bs 100 for a local delivery; an apartment move usually costs between Bs 250 and Bs 600.',
        priceNote:
          'Distance, floors without a lift, actual volume and whether furniture must be disassembled all affect the price. Send photos before agreeing.',
        questions: [
          'Does the price include helpers or only the driver?',
          'How many cubic metres or rooms will fit?',
          'Do you cover damage during transport?',
        ],
        faqs: [
          {
            q: 'How much does a move cost in Santa Cruz?',
            a: 'A small delivery within the city starts at Bs 100. Moving a two-bedroom apartment with helpers usually costs between Bs 250 and Bs 600 depending on distance and floors.',
          },
          {
            q: 'Do you charge by the hour or per trip?',
            a: 'A fixed price per trip is the norm when the volume is clear. If the load is uncertain, it is agreed hourly with a two-hour minimum.',
          },
          {
            q: 'Do you disassemble and reassemble furniture?',
            a: 'Some movers include it and others charge extra. Ask beforehand and, if needed, hire a carpenter for reassembly.',
          },
        ],
        image: IMG.transporte,
      },
      pt: {
        slug: 'frete-mudanca-santa-cruz',
        name: 'Fretes e mudanças',
        title: 'Fretes e mudanças em Santa Cruz de la Sierra: preço por viagem',
        description:
          'Serviço de fretes e mudanças em Santa Cruz de la Sierra com van ou caminhão. Preços por viagem em Bs, com ajudantes e embalagem.',
        h1: 'Fretes e mudanças em Santa Cruz de la Sierra',
        intro: [
          'Mudar dentro da mesma cidade pode custar o dobro do necessário se o veículo for menor do que parece ou se ninguém calculou o peso da geladeira. A maioria dos problemas aparece por falta de ajudantes, não por falta de caminhão.',
          'Na Chamba você descreve o que vai levar, de onde para onde e quantos ajudantes precisa. Recebe propostas de transportadores da sua região com preço fechado por viagem.',
        ],
        includes: [
          'Mudanças completas de casas e apartamentos',
          'Fretes pontuais de móveis e eletrodomésticos',
          'Transporte de material de construção',
          'Carga e descarga com ajudantes',
        ],
        priceRange: 'A partir de Bs 100 por um frete local; uma mudança de apartamento costuma ficar entre Bs 250 e Bs 600.',
        priceNote:
          'Influenciam a distância, andares sem elevador, o volume real e a necessidade de desmontar móveis. Envie fotos antes de fechar o preço.',
        questions: [
          'O preço inclui ajudantes ou somente o motorista?',
          'Quantos metros cúbicos ou quantos ambientes cabem?',
          'Vocês cobrem danos se algo for amassado no transporte?',
        ],
        faqs: [
          {
            q: 'Quanto custa uma mudança em Santa Cruz?',
            a: 'Um frete pequeno dentro da cidade começa em Bs 100. Uma mudança de apartamento de dois quartos com ajudantes costuma custar entre Bs 250 e Bs 600, conforme distância e andares.',
          },
          {
            q: 'Cobram por hora ou por viagem?',
            a: 'O mais comum é preço fechado por viagem quando o volume está claro. Se a carga é incerta, combina-se por hora com mínimo de duas horas.',
          },
          {
            q: 'Vocês desmontam e montam os móveis?',
            a: 'Alguns transportadores incluem e outros cobram à parte. Vale perguntar antes e, se precisar, contratar um marceneiro para a montagem.',
          },
        ],
        image: IMG.transporte,
      },
    },
  },
  {
    id: 'aire-acondicionado',
    content: {
      es: {
        slug: 'aire-acondicionado-santa-cruz',
        name: 'Aire acondicionado',
        title: 'Instalación y mantenimiento de aire acondicionado en Santa Cruz',
        description:
          'Técnicos en aire acondicionado en Santa Cruz de la Sierra: instalación de splits, limpieza, carga de gas y mantenimiento preventivo en Bs.',
        h1: 'Aire acondicionado en Santa Cruz de la Sierra',
        intro: [
          'En Santa Cruz el aire acondicionado deja de ser un lujo entre octubre y marzo. Un split que enfría poco casi nunca está "roto": suele tener el filtro saturado, el condensador sucio o una carga de gas mal hecha desde la instalación.',
          'En Chamba encuentras técnicos en refrigeración que instalan, limpian y recargan equipos. Publicas el modelo y el problema, y recibes ofertas con precio en Bs antes de que vengan.',
        ],
        includes: [
          'Instalación de splits y equipos de ventana',
          'Limpieza profunda de filtros, serpentín y bandeja',
          'Carga de gas refrigerante y detección de fugas',
          'Mantenimiento preventivo antes de temporada',
        ],
        priceRange: 'Desde Bs 120 por una limpieza; la instalación de un split de 12.000 BTU parte de Bs 400.',
        priceNote:
          'La instalación depende de los metros de tubería, la altura y si hay que perforar pared o usar bomba de desagüe. El gas se cobra según el tipo de refrigerante.',
        questions: [
          '¿La instalación incluye tubería y soportería?',
          '¿Cuántos BTU necesita el ambiente que quiero enfriar?',
          '¿Qué garantía das sobre la carga de gas?',
        ],
        faqs: [
          {
            q: '¿Cada cuánto se limpia un aire acondicionado en Santa Cruz?',
            a: 'Cada cuatro a seis meses en uso doméstico. En Santa Cruz, con mucho polvo en suspensión, un equipo que trabaja a diario puede necesitar limpieza cada tres meses.',
          },
          {
            q: '¿Cuánto cuesta instalar un split?',
            a: 'Un split de 12.000 BTU parte de Bs 400 con instalación estándar de hasta tres metros de tubería. Cada metro adicional y la soportería se cobran aparte.',
          },
          {
            q: '¿Por qué mi equipo pierde agua?',
            a: 'Casi siempre es el drenaje obstruido o la bandeja sucia. Es una de las fallas más comunes y se resuelve con una limpieza, sin cambiar piezas.',
          },
        ],
        image: IMG.general,
      },
      en: {
        slug: 'air-conditioning-santa-cruz',
        name: 'Air conditioning',
        title: 'Air conditioning installation and service in Santa Cruz',
        description:
          'Air conditioning technicians in Santa Cruz de la Sierra: split installation, cleaning, gas charging and preventive maintenance in Bs.',
        h1: 'Air conditioning in Santa Cruz de la Sierra',
        intro: [
          'In Santa Cruz, air conditioning stops being a luxury between October and March. A split unit that cools poorly is almost never "broken": it usually has a clogged filter, a dirty condenser or a gas charge done badly at installation.',
          'On Chamba you find refrigeration technicians who install, clean and recharge units. Post the model and the problem, and receive offers with a price in Bs before anyone visits.',
        ],
        includes: [
          'Split and window unit installation',
          'Deep cleaning of filters, coil and drain pan',
          'Refrigerant charging and leak detection',
          'Pre-season preventive maintenance',
        ],
        priceRange: 'From Bs 120 for a cleaning; installing a 12,000 BTU split starts at Bs 400.',
        priceNote:
          'Installation depends on pipe length, height, and whether a wall must be drilled or a drain pump used. Gas is charged according to refrigerant type.',
        questions: [
          'Does installation include piping and brackets?',
          'How many BTU does the room I want to cool need?',
          'What guarantee do you give on the gas charge?',
        ],
        faqs: [
          {
            q: 'How often should an air conditioner be cleaned in Santa Cruz?',
            a: 'Every four to six months for home use. With Santa Cruz dust levels, a unit running daily may need cleaning every three months.',
          },
          {
            q: 'How much does split installation cost?',
            a: 'A 12,000 BTU split starts at Bs 400 with standard installation up to three metres of piping. Each extra metre and the brackets are charged separately.',
          },
          {
            q: 'Why is my unit leaking water?',
            a: 'Almost always a blocked drain or a dirty pan. It is one of the most common faults and is solved with a cleaning, without replacing parts.',
          },
        ],
        image: IMG.general,
      },
      pt: {
        slug: 'ar-condicionado-santa-cruz',
        name: 'Ar-condicionado',
        title: 'Instalação e manutenção de ar-condicionado em Santa Cruz',
        description:
          'Técnicos em ar-condicionado em Santa Cruz de la Sierra: instalação de splits, limpeza, recarga de gás e manutenção preventiva em Bs.',
        h1: 'Ar-condicionado em Santa Cruz de la Sierra',
        intro: [
          'Em Santa Cruz o ar-condicionado deixa de ser luxo entre outubro e março. Um split que gela pouco quase nunca está "quebrado": costuma ter o filtro saturado, o condensador sujo ou uma carga de gás mal feita na instalação.',
          'Na Chamba você encontra técnicos em refrigeração que instalam, limpam e recarregam equipamentos. Publique o modelo e o problema, e receba propostas com preço em Bs antes da visita.',
        ],
        includes: [
          'Instalação de splits e aparelhos de janela',
          'Limpeza profunda de filtros, serpentina e bandeja',
          'Carga de gás refrigerante e detecção de vazamentos',
          'Manutenção preventiva antes da temporada',
        ],
        priceRange: 'A partir de Bs 120 por uma limpeza; a instalação de um split de 12.000 BTU começa em Bs 400.',
        priceNote:
          'A instalação depende dos metros de tubulação, da altura e se é preciso furar parede ou usar bomba de dreno. O gás é cobrado conforme o tipo de refrigerante.',
        questions: [
          'A instalação inclui tubulação e suportes?',
          'Quantos BTU o ambiente que quero climatizar precisa?',
          'Qual garantia você dá sobre a carga de gás?',
        ],
        faqs: [
          {
            q: 'De quanto em quanto tempo se limpa um ar-condicionado em Santa Cruz?',
            a: 'A cada quatro a seis meses no uso residencial. Em Santa Cruz, com muito pó em suspensão, um aparelho que funciona diariamente pode precisar de limpeza a cada três meses.',
          },
          {
            q: 'Quanto custa instalar um split?',
            a: 'Um split de 12.000 BTU começa em Bs 400 com instalação padrão de até três metros de tubulação. Cada metro adicional e os suportes são cobrados à parte.',
          },
          {
            q: 'Por que meu aparelho pinga água?',
            a: 'Quase sempre é o dreno obstruído ou a bandeja suja. É uma das falhas mais comuns e se resolve com uma limpeza, sem trocar peças.',
          },
        ],
        image: IMG.general,
      },
    },
  },
  {
    id: 'jardinero',
    content: {
      es: {
        slug: 'jardinero-santa-cruz',
        name: 'Jardinero',
        title: 'Jardinero en Santa Cruz de la Sierra: corte de césped y poda',
        description:
          'Jardineros en Santa Cruz de la Sierra para corte de césped, poda de árboles, sistemas de riego y mantenimiento de áreas verdes. Precios en Bs.',
        h1: 'Jardinero en Santa Cruz de la Sierra',
        intro: [
          'El césped de Santa Cruz crece rápido en temporada de lluvias y se quema en las semanas secas. Cortar sin ajustar la altura de corte es la razón más común de que un jardín se vea amarillo después de la visita.',
          'En Chamba publicas el tamaño del jardín y qué necesitas: corte, poda o mantenimiento mensual. Recibes ofertas de jardineros de tu zona con precio por visita.',
        ],
        includes: [
          'Corte de césped y perfilado de bordes',
          'Poda de árboles, arbustos y setos',
          'Instalación y reparación de sistemas de riego',
          'Mantenimiento mensual de jardines y condominios',
        ],
        priceRange: 'Desde Bs 50 por corte de césped de un patio pequeño; mantenimiento mensual desde Bs 150.',
        priceNote:
          'El precio depende de los metros de jardín, la altura del césped y si hay restos que retirar. La poda de árboles altos requiere equipo y se cotiza aparte.',
        questions: [
          '¿Te llevas los restos de poda o los dejo para el basurero?',
          '¿A qué altura cortas el césped en temporada de lluvias?',
          '¿Incluye fertilización o solo corte?',
        ],
        faqs: [
          {
            q: '¿Cada cuánto se corta el césped en Santa Cruz?',
            a: 'Cada 15 días en temporada de lluvias y cada tres o cuatro semanas en la seca. Cortar demasiado bajo en verano estresa el pasto y deja zonas amarillas.',
          },
          {
            q: '¿Cuánto cuesta el mantenimiento mensual?',
            a: 'Un jardín residencial de menos de 100 m² suele costar entre Bs 150 y Bs 300 al mes con dos visitas, incluyendo corte y limpieza de bordes.',
          },
          {
            q: '¿Pueden podar árboles grandes?',
            a: 'La poda en altura requiere equipo de escalada o motosierra y debe hacerla alguien con experiencia. Pídelo como trabajo aparte y revisa que el trabajador tenga el equipo adecuado.',
          },
        ],
        image: IMG.jardineria,
      },
      en: {
        slug: 'gardener-santa-cruz',
        name: 'Gardener',
        title: 'Gardener in Santa Cruz de la Sierra: lawn mowing and pruning',
        description:
          'Gardeners in Santa Cruz de la Sierra for lawn mowing, tree pruning, irrigation systems and green area maintenance. Prices in Bs.',
        h1: 'Gardener in Santa Cruz de la Sierra',
        intro: [
          'Santa Cruz lawns grow fast in the rainy season and burn in the dry weeks. Mowing without adjusting the cutting height is the most common reason a garden looks yellow after the visit.',
          'On Chamba you post the garden size and what you need: mowing, pruning or monthly maintenance. You receive offers from gardeners in your area with a price per visit.',
        ],
        includes: [
          'Lawn mowing and edge trimming',
          'Tree, shrub and hedge pruning',
          'Irrigation system installation and repair',
          'Monthly maintenance for gardens and condominiums',
        ],
        priceRange: 'From Bs 50 to mow a small yard; monthly maintenance from Bs 150.',
        priceNote:
          'The price depends on garden size, grass height and whether clippings must be removed. Pruning tall trees requires equipment and is quoted separately.',
        questions: [
          'Do you take the clippings away or leave them for me?',
          'At what height do you cut the lawn in the rainy season?',
          'Does it include fertilising or only mowing?',
        ],
        faqs: [
          {
            q: 'How often should a lawn be mowed in Santa Cruz?',
            a: 'Every 15 days in the rainy season and every three to four weeks in the dry season. Cutting too short in summer stresses the grass and leaves yellow patches.',
          },
          {
            q: 'How much does monthly maintenance cost?',
            a: 'A residential garden under 100 m² usually costs between Bs 150 and Bs 300 per month with two visits, including mowing and edge cleaning.',
          },
          {
            q: 'Can you prune large trees?',
            a: 'Pruning at height requires climbing gear or a chainsaw and should be done by someone experienced. Request it as a separate job and check the worker has the right equipment.',
          },
        ],
        image: IMG.jardineria,
      },
      pt: {
        slug: 'jardineiro-santa-cruz',
        name: 'Jardineiro',
        title: 'Jardineiro em Santa Cruz de la Sierra: corte de grama e poda',
        description:
          'Jardineiros em Santa Cruz de la Sierra para corte de grama, poda de árvores, sistemas de irrigação e manutenção de áreas verdes. Preços em Bs.',
        h1: 'Jardineiro em Santa Cruz de la Sierra',
        intro: [
          'A grama de Santa Cruz cresce rápido na temporada de chuvas e queima nas semanas secas. Cortar sem ajustar a altura de corte é o motivo mais comum de um jardim ficar amarelado depois da visita.',
          'Na Chamba você publica o tamanho do jardim e o que precisa: corte, poda ou manutenção mensal. Recebe propostas de jardineiros da sua região com preço por visita.',
        ],
        includes: [
          'Corte de grama e acabamento de bordas',
          'Poda de árvores, arbustos e cercas vivas',
          'Instalação e reparo de sistemas de irrigação',
          'Manutenção mensal de jardins e condomínios',
        ],
        priceRange: 'A partir de Bs 50 pelo corte de um quintal pequeno; manutenção mensal a partir de Bs 150.',
        priceNote:
          'O preço depende dos metros de jardim, da altura da grama e da necessidade de retirar restos. Poda de árvores altas exige equipamento e é orçada à parte.',
        questions: [
          'Você leva os restos de poda ou deixa para o lixo?',
          'A que altura você corta a grama na temporada de chuvas?',
          'Inclui adubação ou apenas o corte?',
        ],
        faqs: [
          {
            q: 'De quanto em quanto tempo se corta a grama em Santa Cruz?',
            a: 'A cada 15 dias na temporada de chuvas e a cada três ou quatro semanas na seca. Cortar baixo demais no verão estressa o gramado e deixa áreas amarelas.',
          },
          {
            q: 'Quanto custa a manutenção mensal?',
            a: 'Um jardim residencial de menos de 100 m² costuma custar entre Bs 150 e Bs 300 por mês com duas visitas, incluindo corte e limpeza de bordas.',
          },
          {
            q: 'Vocês podem podar árvores grandes?',
            a: 'Poda em altura exige equipamento de escalada ou motosserra e deve ser feita por alguém experiente. Peça como serviço separado e verifique se o profissional tem o equipamento adequado.',
          },
        ],
        image: IMG.jardineria,
      },
    },
  },
  {
    id: 'mecanico',
    content: {
      es: {
        slug: 'mecanico-santa-cruz',
        name: 'Mecánico',
        title: 'Auxilio mecánico a domicilio en Santa Cruz de la Sierra',
        description:
          'Mecánicos a domicilio en Santa Cruz de la Sierra para batería descargada, arranque, frenos y mantenimiento preventivo. Precios de referencia en Bs.',
        h1: 'Auxilio mecánico en Santa Cruz de la Sierra',
        intro: [
          'Quedarse sin batería en el estacionamiento de un supermercado o en la Doble Vía a La Guardia es una de las emergencias más comunes en la ciudad. La mayoría se resuelve en el lugar, sin grúa, si llega alguien con cables y un tester.',
          'En Chamba publicas qué pasó con tu vehículo, dónde estás y tu presupuesto en Bs. Recibes ofertas de mecánicos que pueden llegar a tu zona y te dicen si el problema se resuelve en el sitio.',
        ],
        includes: [
          'Auxilio de batería descargada y arranque con cables',
          'Diagnóstico de fallas eléctricas y de arranque',
          'Cambio de pastillas de freno y mantenimiento básico',
          'Revisión previa a viaje largo',
        ],
        priceRange: 'Desde Bs 80 por auxilio de batería; revisiones y mantenimiento desde Bs 150 según el vehículo.',
        priceNote:
          'El auxilio incluye la visita, no el repuesto. Si el problema requiere grúa o taller, el mecánico te lo dice antes de cobrar el diagnóstico.',
        questions: [
          '¿El precio incluye el repuesto o solo la mano de obra?',
          '¿Cuánto tardas en llegar a mi zona?',
          '¿Puedes decirme por teléfono si necesito grúa?',
        ],
        faqs: [
          {
            q: '¿Cuánto cuesta un auxilio de batería en Santa Cruz?',
            a: 'Entre Bs 80 y Bs 150 por la visita y el arranque, sin incluir la batería nueva si hay que cambiarla. El precio depende de la zona y la hora.',
          },
          {
            q: '¿Atienden de noche?',
            a: 'Muchos mecánicos de Chamba atienden emergencias nocturnas con un recargo acordado antes de salir. Conviene confirmar la zona por chat para calcular el traslado.',
          },
          {
            q: '¿Pueden revisar el auto antes de un viaje?',
            a: 'Sí. Una revisión previa suele cubrir niveles, batería, frenos, llantas y luces. Es más barato que resolver una falla en carretera.',
          },
        ],
        image: IMG.mecanica,
      },
      en: {
        slug: 'mobile-mechanic-santa-cruz',
        name: 'Mechanic',
        title: 'Mobile mechanic in Santa Cruz de la Sierra',
        description:
          'Mobile mechanics in Santa Cruz de la Sierra for flat batteries, jump starts, brakes and preventive maintenance. Reference prices in Bs.',
        h1: 'Mobile mechanic in Santa Cruz de la Sierra',
        intro: [
          'A dead battery in a supermarket car park or on the Doble Vía a La Guardia is one of the most common emergencies in the city. Most are solved on the spot, without a tow truck, if someone arrives with jump leads and a tester.',
          'On Chamba you post what happened to your vehicle, where you are and your budget in Bs. You receive offers from mechanics who can reach your area and tell you whether it can be fixed on site.',
        ],
        includes: [
          'Flat battery assistance and jump starts',
          'Electrical and starting fault diagnosis',
          'Brake pad replacement and basic maintenance',
          'Pre-trip inspection',
        ],
        priceRange: 'From Bs 80 for battery assistance; inspections and maintenance from Bs 150 depending on the vehicle.',
        priceNote:
          'The fee covers the visit, not the part. If the problem needs a tow or a workshop, the mechanic tells you before charging for the diagnosis.',
        questions: [
          'Does the price include the part or only labour?',
          'How long until you reach my area?',
          'Can you tell by phone whether I need a tow?',
        ],
        faqs: [
          {
            q: 'How much does battery assistance cost in Santa Cruz?',
            a: 'Between Bs 80 and Bs 150 for the visit and jump start, not including a new battery if one is needed. The price depends on the area and the time of day.',
          },
          {
            q: 'Do you work at night?',
            a: 'Many Chamba mechanics handle night emergencies with a surcharge agreed before they set off. Confirm your area in chat so travel time can be calculated.',
          },
          {
            q: 'Can you inspect my car before a long trip?',
            a: 'Yes. A pre-trip inspection usually covers fluids, battery, brakes, tyres and lights. It is cheaper than fixing a breakdown on the road.',
          },
        ],
        image: IMG.mecanica,
      },
      pt: {
        slug: 'mecanico-santa-cruz',
        name: 'Mecânico',
        title: 'Auxílio mecânico em domicílio em Santa Cruz de la Sierra',
        description:
          'Mecânicos em domicílio em Santa Cruz de la Sierra para bateria descarregada, partida, freios e manutenção preventiva. Preços de referência em Bs.',
        h1: 'Auxílio mecânico em Santa Cruz de la Sierra',
        intro: [
          'Ficar sem bateria no estacionamento de um supermercado ou na Doble Vía a La Guardia é uma das emergências mais comuns da cidade. A maioria se resolve no local, sem guincho, se chegar alguém com cabos e um testador.',
          'Na Chamba você publica o que aconteceu com seu veículo, onde está e seu orçamento em Bs. Recebe propostas de mecânicos que podem chegar à sua região e dizem se o problema se resolve no local.',
        ],
        includes: [
          'Auxílio de bateria descarregada e partida com cabos',
          'Diagnóstico de falhas elétricas e de partida',
          'Troca de pastilhas de freio e manutenção básica',
          'Revisão antes de viagem longa',
        ],
        priceRange: 'A partir de Bs 80 pelo auxílio de bateria; revisões e manutenção a partir de Bs 150 conforme o veículo.',
        priceNote:
          'O valor cobre a visita, não a peça. Se o problema exigir guincho ou oficina, o mecânico avisa antes de cobrar o diagnóstico.',
        questions: [
          'O preço inclui a peça ou só a mão de obra?',
          'Quanto tempo você leva para chegar à minha região?',
          'Você consegue dizer por telefone se preciso de guincho?',
        ],
        faqs: [
          {
            q: 'Quanto custa um auxílio de bateria em Santa Cruz?',
            a: 'Entre Bs 80 e Bs 150 pela visita e partida, sem incluir a bateria nova se for preciso trocar. O preço depende da região e do horário.',
          },
          {
            q: 'Vocês atendem à noite?',
            a: 'Muitos mecânicos da Chamba atendem emergências noturnas com uma taxa combinada antes de sair. Vale confirmar a região pelo chat para calcular o deslocamento.',
          },
          {
            q: 'Dá para revisar o carro antes de uma viagem?',
            a: 'Sim. Uma revisão prévia costuma cobrir níveis, bateria, freios, pneus e luzes. Sai mais barato do que resolver uma falha na estrada.',
          },
        ],
        image: IMG.mecanica,
      },
    },
  },
];

export const SERVICE_IDS = SERVICES.map((service) => service.id);

export function getService(id: string): ServiceEntry | undefined {
  return SERVICES.find((service) => service.id === id);
}

export function getServiceBySlug(locale: Locale, slug: string): ServiceEntry | undefined {
  return SERVICES.find((service) => service.content[locale].slug === slug);
}

const PREFIX: Record<Locale, string> = {
  es: 'trabajos',
  en: 'services',
  pt: 'servicos',
};

export function servicePath(locale: Locale, id: string): string {
  const service = getService(id);
  if (!service) return `/${locale}`;
  return `/${locale}/${PREFIX[locale]}/${service.content[locale].slug}`;
}

export function serviceIndexPath(locale: Locale): string {
  return `/${locale}/${PREFIX[locale]}`;
}

export function servicePrefix(locale: Locale): string {
  return PREFIX[locale];
}
