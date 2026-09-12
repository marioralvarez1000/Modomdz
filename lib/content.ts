export type ContentType = "lugar" | "evento" | "guia" | "itinerario";

export type ContentItem = {
  type: ContentType;
  slug: string;
  title: string;
  summary: string;
  category: string;
  zone: string;
  free: boolean;
  cost: string;
  duration: string;
  eyebrow: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageSource?: string;
  address?: string;
  mapUrl?: string;
  startsAt?: string;
  endsAt?: string;
  body: string[];
  tips: string[];
  sourceName: string;
  sourceUrl: string;
  verified: string;
  featured?: boolean;
  editorial?: boolean;
  ageRestricted?: boolean;
};

const cityImage = "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Downtown_Mendoza.jpg/1280px-Downtown_Mendoza.jpg";
const mountainImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dique_Potrerillos.jpg/1280px-Dique_Potrerillos.jpg";
const monumentImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Army_of_the_Andes_Monument%2C_Mendoza_01.jpg/1280px-Army_of_the_Andes_Monument%2C_Mendoza_01.jpg";
const wineryImage = "/assets/mendoza-bodegas.webp";
const foodImage = "/assets/mendoza-gastronomia.webp";
const nightlifeImage = "/assets/mendoza-noche.webp";

export const content: ContentItem[] = [
  {
    type: "lugar", slug: "plaza-independencia", title: "Plaza Independencia", eyebrow: "El corazón de la Ciudad",
    summary: "Un gran punto de partida para caminar el centro, descansar bajo los árboles y conectar con las cuatro plazas satélite.",
    category: "Ciudad", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre", duration: "45–90 min", featured: true,
    image: cityImage, imageAlt: "Vista aérea del centro de Mendoza", imageCredit: "David · CC BY 2.0", imageSource: "https://commons.wikimedia.org/wiki/File:Downtown_Mendoza.jpg",
    address: "Chile y Espejo, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Independencia+Mendoza",
    body: ["Es la plaza principal de Mendoza y el centro del trazado de cinco plazas que caracteriza a la ciudad. Su explanada, sus senderos arbolados y la cercanía con la Peatonal Sarmiento la convierten en una primera parada simple y útil.", "Desde acá podés armar una caminata corta hacia Plaza España, Plaza Chile, Plaza Italia o Plaza San Martín. La actividad de la plaza cambia según el día: consultá siempre la agenda oficial antes de ir si buscás ferias o espectáculos."],
    tips: ["Ideal para comenzar un recorrido a pie por el microcentro.", "De noche, mantené las precauciones habituales de una zona urbana.", "Las actividades puntuales pueden cambiar por clima o programación."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "parque-general-san-martin", title: "Parque General San Martín", eyebrow: "Bosque urbano",
    summary: "Senderos, lago, rosedal y grandes arboledas para caminar, pedalear o bajar un cambio sin salir de la ciudad.",
    category: "Naturaleza", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre", duration: "2–4 h", featured: true,
    image: monumentImage, imageAlt: "Monumento del Ejército de los Andes en el Cerro de la Gloria", imageCredit: "Bernard Gagnon · CC BY-SA 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:Army_of_the_Andes_Monument,_Mendoza_01.jpg",
    address: "Av. Emilio Civit, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parque+General+San+Martin+Mendoza",
    body: ["Es uno de los espacios verdes más importantes de Mendoza. La entrada por los Portones del Parque abre un circuito amplio que incluye lago, rosedal, fuentes, clubes y senderos.", "No hace falta consumir ni contratar una excursión para disfrutarlo. Por su tamaño conviene elegir uno o dos sectores y llevar agua; el Cerro de la Gloria está dentro del área general, pero requiere un tramo adicional."],
    tips: ["Entrá por los Portones si es tu primera visita.", "Llevá agua y protección solar incluso en días frescos.", "Respetá ciclovías y sectores de circulación vehicular."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "cerro-de-la-gloria", title: "Cerro de la Gloria", eyebrow: "Historia con vista",
    summary: "El monumento al Ejército de los Andes y una panorámica abierta sobre la ciudad y el piedemonte.",
    category: "Historia", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre al espacio público", duration: "60–90 min",
    image: monumentImage, imageAlt: "Monumento del Ejército de los Andes", imageCredit: "Bernard Gagnon · CC BY-SA 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:Army_of_the_Andes_Monument,_Mendoza_01.jpg",
    address: "Cerro de la Gloria, Parque General San Martín", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cerro+de+la+Gloria+Mendoza",
    body: ["En la cima se encuentra el gran monumento dedicado a la gesta sanmartiniana. El recorrido permite leer la obra escultórica por partes y entender su relación con el cruce de los Andes.", "Se puede llegar en vehículo, transporte público o combinando caminata con el parque. La subida y el calor cambian mucho la experiencia, por eso es mejor evitar el mediodía en jornadas cálidas."],
    tips: ["Elegí mañana o última hora para una luz más amable.", "Confirmá accesos y transporte el mismo día.", "No subestimes el sol ni la pendiente."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "area-fundacional", title: "Área Fundacional", eyebrow: "Donde empezó Mendoza",
    summary: "Plaza Pedro del Castillo, ruinas de San Francisco y el entorno histórico de la primera ciudad.",
    category: "Historia", zone: "Ciudad de Mendoza", free: true, cost: "Espacio público libre; museos pueden cobrar", duration: "60–120 min",
    address: "Plaza Pedro del Castillo, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Area+Fundacional+Mendoza",
    body: ["El sector reúne los rastros urbanos de la Mendoza anterior al terremoto de 1861. La plaza y el exterior de las ruinas permiten una visita autoguiada, mientras que los espacios museísticos cercanos suman contexto.", "La gratuidad indicada corresponde al paseo por el espacio público. Verificá tarifas y horarios en la fuente oficial si querés entrar al Museo del Área Fundacional."],
    tips: ["Combiná la plaza con las ruinas de San Francisco.", "El museo tiene condiciones propias: revisalas antes de salir.", "Es un buen complemento para entender el diseño de la ciudad nueva."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "plaza-espana", title: "Plaza España", eyebrow: "Azulejos y sombra",
    summary: "Una de las plazas más singulares del centro, con mayólicas, bancos y escenas inspiradas en la cultura española.",
    category: "Ciudad", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre", duration: "30–45 min",
    address: "España y Montevideo, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Espana+Mendoza",
    body: ["Forma parte del sistema de plazas que rodea Plaza Independencia. Su identidad está marcada por las fuentes, los bancos y los paños de azulejos decorativos.", "Funciona mejor como parte de una caminata por el centro que como visita aislada. Según el calendario puede albergar actividades; chequeá la agenda municipal."],
    tips: ["Sumala al circuito Plaza Independencia–Peatonal.", "La mañana suele ser más tranquila para observar detalles.", "No damos por confirmadas ferias sin publicación oficial vigente."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "peatonal-sarmiento", title: "Peatonal Sarmiento", eyebrow: "Paseo central",
    summary: "Tres cuadras peatonales para unir Plaza Independencia con avenida San Martín bajo la arboleda urbana.",
    category: "Ciudad", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre", duration: "20–45 min",
    address: "Sarmiento, entre Chile y San Martín", mapUrl: "https://www.google.com/maps/search/?api=1&query=Peatonal+Sarmiento+Mendoza",
    body: ["Es uno de los corredores más transitados del microcentro y una conexión natural entre la plaza principal y la avenida San Martín. La gracia está en caminarla y mirar la vida cotidiana de la ciudad.", "Los consumos de cafés y comercios son opcionales: el paseo en sí es público y gratuito."],
    tips: ["Usala como eje para orientarte en el centro.", "En horarios comerciales tiene más movimiento.", "Cuidá tus pertenencias como en cualquier corredor concurrido."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "parque-central", title: "Parque Central y Nave Cultural", eyebrow: "Ciudad contemporánea",
    summary: "Un parque abierto para caminar y descansar junto a uno de los polos culturales más activos de la capital.",
    category: "Cultura", zone: "Ciudad de Mendoza", free: true, cost: "Parque libre; cada actividad informa su entrada", duration: "45–120 min",
    address: "Av. España y Maza, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Central+Nave+Cultural+Mendoza",
    body: ["El Parque Central ofrece una gran superficie verde, lago, senderos y espacios de descanso. En uno de sus bordes funciona la Nave Cultural, con programación de artes escénicas, música, cine y ferias.", "El parque es de acceso libre. Para eventos de la Nave consultá cada ficha oficial: algunos son gratuitos y otros requieren entrada."],
    tips: ["Revisá la cartelera de la Nave antes de ir.", "El parque es un buen plan aun sin evento.", "No confundas acceso libre al parque con gratuidad de toda la programación."],
    sourceName: "Nave Cultural · Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/nave-cultural.html", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "parque-civico", title: "Parque Cívico", eyebrow: "Arquitectura y memoria",
    summary: "Un paseo abierto entre edificios públicos, jardines y el Memorial de la Bandera de los Andes.",
    category: "Historia", zone: "Ciudad de Mendoza", free: true, cost: "Parque de acceso libre", duration: "45–75 min",
    address: "Peltier y Virgen del Carmen de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Civico+Mendoza",
    body: ["El conjunto cívico reúne la Casa de Gobierno y amplios jardines, a pocas cuadras del centro. El paseo exterior permite leer otra etapa de la arquitectura mendocina.", "El Memorial de la Bandera tiene horarios propios. Verificá la información oficial si tu objetivo principal es ingresar."],
    tips: ["Funciona bien como desvío desde Plaza España.", "Consultá horarios del Memorial antes de planificar la visita.", "El paseo exterior es breve y completamente caminable."],
    sourceName: "Gobierno de Mendoza", sourceUrl: "https://www.mendoza.gov.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "potrerillos", title: "Potrerillos", eyebrow: "Montaña y agua",
    summary: "Paisaje de cordillera alrededor del embalse: miradores, aire abierto y una salida que cambia con el clima.",
    category: "Montaña", zone: "Luján de Cuyo", free: true, cost: "Miradores públicos sin entrada; traslado y actividades aparte", duration: "Medio día", featured: true,
    image: mountainImage, imageAlt: "Embalse Potrerillos y cordillera", imageCredit: "Uliaparicio · CC BY-SA 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Dique_Potrerillos.jpg",
    address: "Embalse Potrerillos, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Dique+Potrerillos+Mendoza",
    body: ["El embalse y su entorno forman una de las postales más accesibles de la precordillera. Es posible disfrutar miradores y sectores públicos sin contratar una actividad.", "El traslado, estacionamiento privado, gastronomía o deportes de aventura pueden tener costo. En montaña el viento y la temperatura cambian rápido: revisá el pronóstico y el estado de rutas."],
    tips: ["No ingreses al agua en sectores no habilitados.", "Llevá abrigo incluso con sol en la ciudad.", "Regresá con tus residuos y respetá señalización local."],
    sourceName: "Turismo Mendoza", sourceUrl: "https://www.mendoza.gov.ar/turismo/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "plaza-de-chacras-de-coria", title: "Plaza de Chacras de Coria", eyebrow: "Ritmo de pueblo",
    summary: "Una pausa arbolada en el centro de Chacras para caminar sus calles y conocer otra escala del Gran Mendoza.",
    category: "Barrios", zone: "Luján de Cuyo", free: true, cost: "Acceso libre", duration: "60–120 min",
    address: "Italia y Mazzolari, Chacras de Coria", mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+General+Espejo+Chacras+de+Coria",
    body: ["La plaza General Espejo organiza el pequeño centro de Chacras de Coria. El plan gratuito es caminar el entorno, observar la arboleda y recorrer las calles cercanas sin necesidad de reservar nada.", "Ferias y actividades varían: solo las consideramos confirmadas cuando existe una publicación oficial vigente."],
    tips: ["Combiná transporte público o vehículo y verificá frecuencias de regreso.", "La visita se disfruta más sin apuro.", "Los consumos y visitas privadas del entorno son opcionales."],
    sourceName: "Turismo Luján de Cuyo", sourceUrl: "https://lujandecuyo.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "lugar", slug: "catena-zapata", title: "Catena Zapata", eyebrow: "Vino y arquitectura",
    summary: "Una visita en Agrelo para conocer una de las bodegas mendocinas de mayor reconocimiento internacional.",
    category: "Bodegas", zone: "Agrelo · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva previa", duration: "2–3 h", featured: true, editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodega Catena Zapata, Agrelo, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Catena+Zapata+Agrelo+Mendoza",
    body: ["La bodega de Agrelo combina una propuesta enológica con un edificio de fuerte identidad visual. Es una alternativa especialmente atractiva para quienes quieren concentrar vino, paisaje y arquitectura en una misma salida.", "Las modalidades de visita, disponibilidad y valores pueden cambiar. Modo MZA no vende esta experiencia: consultá y reservá únicamente desde los canales oficiales."],
    tips: ["Reservá antes de viajar a Agrelo.", "Verificá qué incluye cada experiencia.", "Si vas a degustar, coordiná un traslado y no conduzcas."],
    sourceName: "Catena Zapata · sitio oficial", sourceUrl: "https://catenazapata.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "zuccardi-valle-de-uco", title: "Zuccardi Valle de Uco", eyebrow: "Valle, piedra y vino",
    summary: "Arquitectura integrada al paisaje de Paraje Altamira y experiencias centradas en el vino de montaña.",
    category: "Bodegas", zone: "Paraje Altamira · San Carlos", free: false, cost: "Experiencias pagas · reserva previa", duration: "Medio día", featured: true, editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Zuccardi Valle de Uco, Paraje Altamira, San Carlos", mapUrl: "https://www.google.com/maps/search/?api=1&query=Zuccardi+Valle+de+Uco+Paraje+Altamira",
    body: ["En Paraje Altamira, esta bodega propone una lectura del Valle de Uco desde el paisaje, los materiales y los vinos de origen. Por la distancia desde la capital conviene pensarla como salida de medio día o combinarla con otra parada cercana.", "Las visitas y la propuesta gastronómica funcionan con cupos. Confirmá disponibilidad, duración y condiciones directamente con la bodega."],
    tips: ["Calculá los tiempos de traslado hasta San Carlos.", "No des por disponible el restaurante sin reserva.", "Evitá conducir después de una degustación."],
    sourceName: "Familia Zuccardi · sitio oficial", sourceUrl: "https://zuccardiwines.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodegas-salentein-killka", title: "Bodegas Salentein y Killka", eyebrow: "Vino + arte",
    summary: "Una experiencia de Valle de Uco que suma bodega, paisaje y un espacio cultural dedicado al arte.",
    category: "Bodegas", zone: "Los Árboles · Tunuyán", free: false, cost: "Actividades pagas · consultar acceso a Killka", duration: "3–5 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodegas Salentein, Los Árboles, Tunuyán", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodegas+Salentein+Los+Arboles+Tunuyan",
    body: ["Salentein permite combinar en un mismo destino el universo del vino con Killka, su espacio cultural. Es una buena elección para grupos con intereses distintos o para dedicar varias horas a una sola parada del Valle de Uco.", "La programación, los tipos de visita y las condiciones de ingreso se actualizan en los canales de la bodega. Revisalos antes de salir."],
    tips: ["Reservá la experiencia de bodega con anticipación.", "Consultá si Killka requiere entrada o reserva el día elegido.", "Planificá un conductor designado o traslado contratado."],
    sourceName: "Bodegas Salentein · sitio oficial", sourceUrl: "https://www.bodegassalentein.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodega-norton", title: "Bodega Norton", eyebrow: "Historia en Perdriel",
    summary: "Viñedos, jardines, cava histórica y distintas experiencias enológicas a pocos kilómetros de la ciudad.",
    category: "Bodegas", zone: "Perdriel · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva online", duration: "2–4 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Ruta Provincial 15 km 23,5, Perdriel", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Norton+Perdriel+Mendoza",
    body: ["Norton reúne recorridos por viñedos, instalaciones y cava histórica, además de propuestas gastronómicas. La variedad de formatos permite elegir entre una visita breve o una experiencia más extensa.", "La propia bodega informa que las reservas turísticas se gestionan online. Revisá inclusiones, horarios y disponibilidad antes de trasladarte."],
    tips: ["La reserva se gestiona desde el canal oficial.", "El restaurante tiene horarios y cupos propios.", "No conduzcas si vas a consumir alcohol."],
    sourceName: "Bodega Norton · turismo oficial", sourceUrl: "https://www.norton.com.ar/turismo/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodega-trapiche", title: "Bodega Trapiche", eyebrow: "Tradición en Maipú",
    summary: "Una bodega histórica de Maipú con propuestas de visita y gastronomía vinculadas al vino.",
    category: "Bodegas", zone: "Coquimbito · Maipú", free: false, cost: "Experiencias pagas · reserva previa", duration: "2–4 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodega Trapiche, Nueva Mayorga, Maipú", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Trapiche+Maipu+Mendoza",
    body: ["La visita propone acercarse a la tradición vitivinícola de Maipú dentro de un conjunto histórico restaurado. Puede combinarse con otros atractivos del departamento si organizás el día por zonas.", "Modo MZA no reproduce tarifas ni horarios porque pueden modificarse. Confirmalos en el sitio oficial y asegurá tu lugar antes de ir."],
    tips: ["Organizá el recorrido por Maipú para reducir traslados.", "Confirmá si tu reserva incluye degustación o comida.", "Usá transporte seguro si vas a beber."],
    sourceName: "Trapiche · sitio oficial", sourceUrl: "https://trapiche.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodega-lagarde", title: "Bodega Lagarde", eyebrow: "Jardines y viñedos",
    summary: "Una bodega de Luján de Cuyo donde la visita enológica puede combinarse con gastronomía entre jardines.",
    category: "Bodegas", zone: "Mayor Drummond · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva previa", duration: "2–4 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodega Lagarde, Mayor Drummond, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Lagarde+Mayor+Drummond+Mendoza",
    body: ["Lagarde es una alternativa próxima a la ciudad para combinar patrimonio bodeguero, viñedos y una propuesta gastronómica dentro de la finca. La experiencia cambia según el formato contratado.", "Consultá disponibilidad y condiciones en los canales oficiales. La inclusión en Modo MZA es editorial y no implica un acuerdo comercial."],
    tips: ["Reservá visita y restaurante por separado si corresponde.", "Confirmá el punto exacto de ingreso.", "Coordiná traslado si elegís degustación."],
    sourceName: "Bodega Lagarde · sitio oficial", sourceUrl: "https://www.lagarde.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "susana-balbo-wines", title: "Susana Balbo Wines", eyebrow: "Enología contemporánea",
    summary: "Experiencias de vino y cocina en Agrelo, dentro de una bodega argentina liderada por una referente de la enología.",
    category: "Bodegas", zone: "Agrelo · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva previa", duration: "2–4 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Susana Balbo Wines, Agrelo, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Susana+Balbo+Wines+Agrelo+Mendoza",
    body: ["La propuesta turística de Susana Balbo Wines se desarrolla en Agrelo y combina conocimiento enológico con experiencias de gastronomía y degustación. Es una parada sencilla de integrar a un circuito por Luján de Cuyo.", "Revisá en la fuente oficial qué opciones están disponibles para tu fecha y cuáles requieren reserva anticipada."],
    tips: ["Elegí la experiencia antes de coordinar el traslado.", "Avisá restricciones alimentarias al reservar.", "No conduzcas después de beber alcohol."],
    sourceName: "Susana Balbo Wines · sitio oficial", sourceUrl: "https://www.susanabalbowines.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "casa-del-visitante-santa-julia", title: "Casa del Visitante · Santa Julia", eyebrow: "Cocina de familia",
    summary: "Una experiencia en Maipú que acerca vino, finca y cocina regional en un entorno rural.",
    category: "Bodegas", zone: "Maipú", free: false, cost: "Experiencias pagas · reserva previa", duration: "3–5 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Casa del Visitante Santa Julia, Maipú, Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+del+Visitante+Santa+Julia+Maipu",
    body: ["Casa del Visitante es una opción para quienes quieren sumar cocina regional a un recorrido por el mundo del vino en Maipú. Por la duración de las propuestas, conviene dejar suficiente margen en el itinerario.", "Las actividades, menús y cupos se confirman directamente con la organización. No publicamos precios sin vigencia garantizada."],
    tips: ["Informá restricciones alimentarias al reservar.", "Confirmá duración antes de sumar otra bodega.", "Elegí un traslado seguro para el regreso."],
    sourceName: "Santa Julia · sitio oficial", sourceUrl: "https://www.santajulia.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodega-ruca-malen", title: "Bodega Ruca Malen", eyebrow: "Vino y cocina de finca",
    summary: "Una parada de Agrelo orientada a experiencias de degustación y gastronomía con vista al paisaje vitivinícola.",
    category: "Bodegas", zone: "Agrelo · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva previa", duration: "3–5 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodega Ruca Malen, Agrelo, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Ruca+Malen+Agrelo+Mendoza",
    body: ["Ruca Malen propone una experiencia de finca en Agrelo donde el vino y la cocina ocupan el centro. Funciona especialmente bien como parada principal de una jornada por Luján de Cuyo.", "Los formatos disponibles pueden variar según la temporada. Confirmá reserva, menú y condiciones desde el sitio oficial."],
    tips: ["No planifiques otra comida importante el mismo día.", "Consultá adaptaciones del menú antes de reservar.", "Contratá traslado si vas a degustar."],
    sourceName: "Ruca Malen · sitio oficial", sourceUrl: "https://www.rucamalen.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "bodega-chandon", title: "Bodega Chandon", eyebrow: "Espumosos en Agrelo",
    summary: "Una visita centrada en el mundo de los espumosos, con experiencias y gastronomía en Luján de Cuyo.",
    category: "Bodegas", zone: "Agrelo · Luján de Cuyo", free: false, cost: "Experiencias pagas · reserva previa", duration: "2–4 h", editorial: true, ageRestricted: true,
    image: wineryImage, imageAlt: "Viñedos mendocinos frente a la Cordillera de los Andes",
    address: "Bodega Chandon, Agrelo, Luján de Cuyo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bodega+Chandon+Agrelo+Mendoza",
    body: ["La propuesta de Chandon permite enfocar una visita en la elaboración y degustación de espumosos. Su ubicación en Agrelo facilita combinarla con otras paradas de Luján de Cuyo.", "Verificá las experiencias habilitadas, edades admitidas y disponibilidad en el sitio oficial antes de organizar el traslado."],
    tips: ["Reservá con anticipación.", "Confirmá si la experiencia elegida incluye gastronomía.", "No conduzcas después de consumir alcohol."],
    sourceName: "Chandon Argentina · sitio oficial", sourceUrl: "https://www.chandon.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "casa-vigil-el-enemigo", title: "Casa Vigil · El Enemigo", eyebrow: "Vino, arte y cocina",
    summary: "Una experiencia gastronómica entre viñedos en Chachingo, pensada para dedicarle varias horas.",
    category: "Restaurantes", zone: "Chachingo · Maipú", free: false, cost: "Menús y experiencias pagas · reserva previa", duration: "3–5 h", featured: true, editorial: true, ageRestricted: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Casa Vigil El Enemigo, Chachingo, Maipú", mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Vigil+El+Enemigo+Chachingo+Mendoza",
    body: ["Casa Vigil integra gastronomía, vino y una puesta artística dentro de un entorno de finca. Es una salida en sí misma, más que una parada rápida, por lo que conviene reservarle buena parte del día.", "Los menús, horarios y modalidades se consultan en los canales oficiales. Esta ficha es una selección editorial sin relación comercial."],
    tips: ["Reservá con anticipación.", "Avisá alergias o restricciones alimentarias.", "Organizá un traslado si vas a tomar vino."],
    sourceName: "Casa Vigil · sitio oficial", sourceUrl: "https://casavigil.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "abrasado", title: "Abrasado", eyebrow: "Cocina en una bodega urbana",
    summary: "El restaurante de Bodega Los Toneles combina cocina argentina contemporánea con un edificio patrimonial.",
    category: "Restaurantes", zone: "Godoy Cruz", free: false, cost: "Consumo pago · reserva recomendada", duration: "2–3 h", editorial: true, ageRestricted: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Abrasado, Bodega Los Toneles, Godoy Cruz", mapUrl: "https://www.google.com/maps/search/?api=1&query=Abrasado+Bodega+Los+Toneles+Godoy+Cruz",
    body: ["Abrasado funciona dentro de Bodega Los Toneles y ofrece una alternativa enoturística muy cercana al centro. Es útil para quienes buscan cocina y vino sin dedicar una jornada completa a zonas más alejadas.", "Consultá horarios, carta y disponibilidad en el canal oficial del establecimiento."],
    tips: ["La reserva es especialmente conveniente para almuerzos de fin de semana.", "Confirmá si querés sumar una actividad de bodega.", "No conduzcas después de consumir alcohol."],
    sourceName: "Bodega Los Toneles · sitio oficial", sourceUrl: "https://www.lostoneles.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "azafran-resto", title: "Azafrán", eyebrow: "Cocina mendocina en el centro",
    summary: "Un restaurante de Ciudad para probar una mirada contemporánea sobre productos y vinos de Mendoza.",
    category: "Restaurantes", zone: "Ciudad de Mendoza", free: false, cost: "Consumo pago · reserva recomendada", duration: "2–3 h", editorial: true, ageRestricted: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Azafrán, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Azafran+Restaurante+Mendoza",
    body: ["Azafrán es una alternativa céntrica para una comida enfocada en productos regionales y vinos mendocinos. Su ubicación permite integrarlo con un paseo por Plaza Independencia y la avenida Sarmiento.", "Carta, formato de servicio y disponibilidad pueden cambiar. Confirmalos en sus canales oficiales."],
    tips: ["Reservá si buscás un horario específico.", "Consultá opciones para restricciones alimentarias.", "Combiná la salida con un recorrido a pie por el centro."],
    sourceName: "Azafrán · canal oficial", sourceUrl: "https://www.instagram.com/azafranresto/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "fuente-y-fonda", title: "Fuente y Fonda", eyebrow: "Comida para compartir",
    summary: "Una propuesta céntrica inspirada en la mesa familiar y en platos argentinos de porciones generosas.",
    category: "Restaurantes", zone: "Ciudad de Mendoza", free: false, cost: "Consumo pago · reserva recomendada", duration: "90–150 min", editorial: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Fuente y Fonda, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Fuente+y+Fonda+Mendoza",
    body: ["Fuente y Fonda propone una experiencia informal, de platos argentinos y espíritu de mesa compartida. Es una opción práctica para comer en la ciudad sin salir del circuito céntrico.", "Consultá carta, horarios y reservas directamente con el restaurante. Modo MZA no reproduce promociones sin confirmación vigente."],
    tips: ["Preguntá el tamaño de los platos si van a compartir.", "Reservá para grupos.", "Verificá el horario del día antes de ir."],
    sourceName: "Fuente y Fonda · canal oficial", sourceUrl: "https://www.instagram.com/fuenteyfondamendoza/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "anna-bistro", title: "Anna Bistró", eyebrow: "Patio entre árboles",
    summary: "Un bistró urbano con jardín, apropiado para una comida tranquila dentro de la Ciudad de Mendoza.",
    category: "Restaurantes", zone: "Ciudad de Mendoza", free: false, cost: "Consumo pago · reserva recomendada", duration: "90–150 min", editorial: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Anna Bistró, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Anna+Bistro+Mendoza",
    body: ["Anna Bistró se distingue por su ambiente de jardín dentro de la ciudad. Puede funcionar para almuerzo, café o cena según la programación y el horario vigente.", "Confirmá servicio, carta y disponibilidad desde el canal oficial, especialmente si tu interés principal es ocupar una mesa exterior."],
    tips: ["Pedí mesa exterior al reservar si es tu prioridad.", "Revisá el horario vigente.", "La experiencia puede variar con el clima."],
    sourceName: "Anna Bistró · canal oficial", sourceUrl: "https://www.instagram.com/annabistromendoza/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "la-marchigiana", title: "La Marchigiana", eyebrow: "Tradición italiana mendocina",
    summary: "Un clásico familiar de cocina italiana ligado a la historia gastronómica de Mendoza.",
    category: "Restaurantes", zone: "Ciudad de Mendoza", free: false, cost: "Consumo pago · reserva recomendada", duration: "90–150 min", editorial: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "La Marchigiana, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Marchigiana+Mendoza",
    body: ["La Marchigiana representa una parte de la tradición italiana incorporada a la identidad culinaria mendocina. Es una opción para quienes priorizan pastas y recetas familiares dentro de la ciudad.", "Consultá la sucursal, horarios y reservas en la fuente oficial antes de trasladarte."],
    tips: ["Verificá la sucursal elegida al reservar.", "Consultá alternativas para necesidades alimentarias.", "En horarios de alta demanda conviene reservar."],
    sourceName: "La Marchigiana · sitio oficial", sourceUrl: "https://lamarchigiana.com.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "1884-restaurante", title: "1884 Restaurante", eyebrow: "Fuego y cocina argentina",
    summary: "Una propuesta gastronómica de Godoy Cruz asociada a la cocina argentina y la identidad del vino mendocino.",
    category: "Restaurantes", zone: "Godoy Cruz", free: false, cost: "Consumo pago · reserva previa", duration: "2–3 h", editorial: true, ageRestricted: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "1884 Restaurante, Godoy Cruz, Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=1884+Restaurante+Mendoza",
    body: ["1884 es una referencia de cocina argentina contemporánea en Godoy Cruz, con protagonismo del fuego y una carta vinculada al vino. Por su formato conviene planificarla como comida principal del día.", "Verificá apertura, disponibilidad y condiciones de reserva en sus canales oficiales antes de organizar la visita."],
    tips: ["Reservá con anticipación.", "Informá restricciones alimentarias.", "Coordiná transporte si vas a consumir vino."],
    sourceName: "1884 Restaurante · canal oficial", sourceUrl: "https://www.instagram.com/1884restaurante/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "brod-bakery", title: "Bröd", eyebrow: "Café y panadería",
    summary: "Una opción urbana para desayunar, merendar o hacer una pausa durante un recorrido por la ciudad.",
    category: "Cafés", zone: "Ciudad de Mendoza", free: false, cost: "Consumo pago", duration: "45–90 min", editorial: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Bröd, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Brod+Bakery+Mendoza",
    body: ["Bröd suma una parada de café y panadería al recorrido urbano. Es útil para una pausa breve entre plazas, compras o actividades del centro.", "Como puede haber más de una ubicación o cambios de servicio, revisá la sede y el horario vigente en su canal oficial."],
    tips: ["Confirmá qué sede te queda más cerca.", "Revisá horarios antes de ir temprano.", "Consultá ingredientes si tenés alergias."],
    sourceName: "Bröd · canal oficial", sourceUrl: "https://www.instagram.com/brodbakery/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "chachingo-craft-beer", title: "Chachingo Craft Beer", eyebrow: "Cerveza mendocina",
    summary: "Una cervecería para sumar una salida informal de noche, con presencia en el corredor gastronómico urbano.",
    category: "Bares y cervecerías", zone: "Gran Mendoza", free: false, cost: "Consumo pago", duration: "1–3 h", editorial: true, ageRestricted: true,
    image: nightlifeImage, imageAlt: "Corredor gastronómico nocturno de inspiración mendocina",
    address: "Chachingo Craft Beer, Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Chachingo+Craft+Beer+Mendoza",
    body: ["Chachingo es una alternativa para una salida relajada alrededor de la cerveza artesanal y la gastronomía de bar. Antes de ir, elegí la ubicación que mejor encaje con tu recorrido.", "Consultá sedes, horarios, reservas y programación en el canal oficial. La ficha no implica patrocinio."],
    tips: ["Verificá la sede exacta.", "No conduzcas después de consumir alcohol.", "Para grupos, consultá disponibilidad previamente."],
    sourceName: "Chachingo Craft Beer · sitio oficial", sourceUrl: "https://chachingobeer.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "antares-aristides", title: "Antares Arístides", eyebrow: "Noche en la Quinta Sección",
    summary: "Una cervecería ubicada en uno de los principales corredores de bares y restaurantes de Mendoza.",
    category: "Bares y cervecerías", zone: "Arístides · Ciudad de Mendoza", free: false, cost: "Consumo pago", duration: "1–3 h", editorial: true, ageRestricted: true,
    image: nightlifeImage, imageAlt: "Corredor gastronómico nocturno de inspiración mendocina",
    address: "Antares, avenida Arístides Villanueva, Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Antares+Aristides+Mendoza",
    body: ["Esta sede se encuentra sobre Arístides Villanueva, un corredor muy utilizado para salir de noche y recorrer distintas propuestas a pie. Es una referencia simple para ubicarte en la zona.", "La carta, promociones y horarios dependen del local. Verificá la información actual antes de ir."],
    tips: ["La zona tiene alta demanda durante fines de semana.", "Evitá conducir si vas a beber.", "Confirmá reservas para grupos."],
    sourceName: "Cervecería Antares · sitio oficial", sourceUrl: "https://www.cervezaantares.com/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "mercado-central-mendoza", title: "Mercado Central", eyebrow: "Sabores cotidianos",
    summary: "Un mercado tradicional del centro para observar productos, comprar alimentos y comer algo al paso.",
    category: "Mercados", zone: "Ciudad de Mendoza", free: true, cost: "Entrada libre · compras y consumos pagos", duration: "45–90 min", editorial: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Mercado Central, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+Central+Mendoza",
    body: ["El Mercado Central permite acercarse a la vida cotidiana de la ciudad a través de puestos de alimentos, productos regionales y opciones para comer. La entrada al edificio no exige compra.", "Los horarios pueden variar entre puestos y días. Confirmá la apertura antes de organizar una visita específica."],
    tips: ["La experiencia es mejor durante el horario de actividad comercial.", "Cada puesto maneja sus propios precios y medios de pago.", "Cuidá tus pertenencias en sectores concurridos."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "11 sep 2026"
  },
  {
    type: "lugar", slug: "mercado-del-este", title: "Mercado del Este", eyebrow: "Productos regionales",
    summary: "Una galería céntrica para buscar vinos, delicatessen y productos mendocinos bajo un mismo techo.",
    category: "Mercados", zone: "Ciudad de Mendoza", free: true, cost: "Entrada libre · compras y consumos pagos", duration: "45–90 min", editorial: true, ageRestricted: true,
    image: foodImage, imageAlt: "Mesa mendocina al aire libre con cocina regional",
    address: "Mercado del Este, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+del+Este+Mendoza",
    body: ["El Mercado del Este reúne comercios especializados en vinos, alimentos y productos regionales en pleno centro. Es una parada práctica si querés comparar opciones sin trasladarte a distintas zonas.", "La entrada es libre, pero cada local define sus horarios, precios y condiciones de venta."],
    tips: ["Compará antes de comprar.", "Consultá condiciones de traslado de botellas si viajás en avión.", "El expendio de alcohol es sólo para mayores de 18 años."],
    sourceName: "Turismo Ciudad de Mendoza", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "aguas-danzantes-plaza-independencia", title: "Aguas Danzantes", eyebrow: "Plan nocturno gratuito",
    summary: "Luz, música y movimiento en la fuente de Plaza Independencia, de martes a domingo y feriados.",
    category: "Agenda", zone: "Ciudad de Mendoza", free: true, cost: "Gratis", duration: "30–60 min", startsAt: "2026-09-11T20:00:00-03:00", endsAt: "2026-12-31T21:30:00-03:00",
    address: "Plaza Independencia, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Independencia+Mendoza",
    body: ["La fuente de Plaza Independencia presenta su espectáculo de aguas danzantes entre las 20:00 y las 21:30, de martes a domingo y feriados, según la comunicación municipal vigente al momento de verificar esta ficha.", "Es una actividad al aire libre y puede modificarse por clima, mantenimiento o agenda. Confirmá en la fuente oficial el mismo día."],
    tips: ["Llegá algunos minutos antes.", "El funcionamiento puede suspenderse sin aviso por razones técnicas o meteorológicas.", "Combiná el paseo con la Peatonal Sarmiento."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/03/las-aguas-danzantes-renuevan-sus-horarios-y-este-martes-se-iluminaran-por-el-dia-del-linfoma-y-la-independencia-de-mexico/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "tramas-politica-cultural-mmamm", title: "Conversatorio abierto en el MMAMM", eyebrow: "Hoy viernes 11 · 18 h",
    summary: "Una conversación abierta sobre cultura, Estado y territorio a partir del libro Tramas de la política cultural en Argentina.",
    category: "Cultura", zone: "Ciudad de Mendoza", free: true, cost: "Entrada sin costo", duration: "18 a 19:30 h", startsAt: "2026-09-11T18:00:00-03:00", endsAt: "2026-09-11T19:30:00-03:00",
    address: "MMAMM, Espacio Cultural Plaza Independencia", mapUrl: "https://www.google.com/maps/search/?api=1&query=MMAMM+Plaza+Independencia+Mendoza",
    body: ["El Museo Municipal de Arte Moderno de Mendoza recibe la presentación de Tramas de la política cultural en Argentina: miradas desde Mendoza. Participan Mariano Martín Zamorano y Paula Pino Villar.", "La actividad propone un diálogo sobre políticas culturales públicas, territorio y comunidad. El encuentro es abierto al público y no tiene costo de entrada."],
    tips: ["La actividad comienza a las 18.", "El acceso es por el Espacio Cultural Plaza Independencia.", "Confirmá cualquier cambio de último momento en la fuente municipal."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/08/la-ciudad-de-mendoza-abre-un-espacio-para-debatir-sobre-las-politicas-culturales-publicas/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "luz-gaggi-teatro-mendoza", title: "Luz Gaggi en el Teatro Mendoza", eyebrow: "Hoy viernes 11 · 21:30 h",
    summary: "La cantante presenta Mientras busco la gloria y recorre canciones de su etapa anterior en el Teatro Mendoza.",
    category: "Música", zone: "Ciudad de Mendoza", free: false, cost: "$25.000 a $50.000", duration: "Desde las 21:30 h", startsAt: "2026-09-11T21:30:00-03:00", endsAt: "2026-09-11T23:30:00-03:00",
    address: "Teatro Mendoza, San Juan 1427", mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Mendoza+San+Juan+1427",
    body: ["Luz Gaggi presenta en vivo su nuevo álbum Mientras busco la gloria, producido por Cachorro López, junto con canciones de Altar.", "Las entradas se comercializan por ubicación. Consultá disponibilidad y condiciones en el enlace publicado por la organización."],
    tips: ["La función comienza a las 21:30.", "Revisá disponibilidad antes de trasladarte.", "Comprá únicamente desde el canal enlazado por la fuente oficial."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/08/luz-gaggi-llega-al-teatro-mendoza-para-presentar-su-nuevo-album-mientras-busco-la-gloria/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "bicitour-caminos-del-agua", title: "Bicitour por los Caminos del Agua", eyebrow: "Sábado 12 de septiembre",
    summary: "Pedaleada gratuita entre Ciudad y Luján de Cuyo con inscripción previa y cupos limitados.",
    category: "Agenda", zone: "Ciudad + Luján", free: true, cost: "Gratis con inscripción", duration: "Mañana", startsAt: "2026-09-12T08:00:00-03:00", endsAt: "2026-09-12T12:30:00-03:00",
    address: "Salida informada por la organización", mapUrl: "https://www.google.com/maps/search/?api=1&query=Mendoza+Argentina",
    body: ["La Ciudad de Mendoza y Luján de Cuyo invitan a un recorrido en bicicleta enfocado en los caminos del agua. La salida está anunciada para el sábado 12 de septiembre a las 8:00.", "La actividad es gratuita, requiere inscripción, tiene cupos y exige casco. Abrí la fuente oficial para confirmar el punto de encuentro, disponibilidad y condiciones actualizadas."],
    tips: ["Inscribite antes: gratuito no significa sin cupo.", "El casco es obligatorio.", "Revisá clima y estado de tu bicicleta."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/03/la-ciudad-en-conjunto-con-lujan-de-cuyo-invita-al-bicitour-por-los-caminos-del-agua/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "cementerio-nocturno-mujeres-cuyanas", title: "Cementerio nocturno: Mujeres Cuyanas", eyebrow: "Martes 22 de septiembre",
    summary: "Visita guiada nocturna y gratuita por historias de mujeres cuyanas; el ticket se habilita el día anterior.",
    category: "Agenda", zone: "Ciudad de Mendoza", free: true, cost: "Gratis con ticket", duration: "Aprox. 90 min", startsAt: "2026-09-22T19:00:00-03:00", endsAt: "2026-09-22T20:30:00-03:00",
    address: "Cementerio de la Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cementerio+de+la+Capital+Mendoza",
    body: ["El recorrido nocturno propone recuperar historias de mujeres cuyanas dentro del patrimonio del Cementerio de la Ciudad. La edición está anunciada para el martes 22 de septiembre a las 19:00.", "La entrada es gratuita, pero el ticket debe gestionarse el día anterior según la publicación oficial. Revisá la fuente para acceder al enlace correcto y confirmar cualquier cambio."],
    tips: ["Agendá el recordatorio para obtener el ticket el 21 de septiembre.", "Usá calzado cómodo y abrigo.", "La actividad puede tener cupo reducido."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/03/visita-el-cementerio-de-la-ciudad-en-un-recorrido-nocturno/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "yann-tiersen-en-piano", title: "Yann Tiersen en Piano", eyebrow: "Sábado 12 · 19 y 21 h",
    summary: "Dos funciones homenaje a las melodías de Yann Tiersen, con Leonardo Pittella y músicos invitados.",
    category: "Música", zone: "Ciudad de Mendoza", free: false, cost: "$20.000", duration: "60 min", startsAt: "2026-09-12T19:00:00-03:00", endsAt: "2026-09-12T22:00:00-03:00",
    address: "Fundación Pianoforte, Luzuriaga 558", mapUrl: "https://www.google.com/maps/search/?api=1&query=Fundacion+Pianoforte+Luzuriaga+558+Mendoza",
    body: ["Leonardo Pittella, músicos invitados y estudiantes avanzados presentan un recorrido por composiciones de Yann Tiersen. Hay funciones a las 19 y a las 21.", "La actividad tiene fin benéfico y forma parte del ciclo Viví Francia. La galería abre desde las 18 con una propuesta gastronómica opcional."],
    tips: ["Elegí la función de las 19 o de las 21 al comprar.", "La copa de vino no está incluida en la entrada.", "Confirmá disponibilidad en EntradaWeb desde la publicación oficial."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/08/un-emotivo-concierto-en-homenaje-a-yann-tiersen-se-suma-a-vivi-francia-en-la-ciudad/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "ella-tambien-spinetta-360", title: "Spinetta acústico en 360°", eyebrow: "Sábado 12 · 21 h",
    summary: "La banda mendocina Ella También recorre la obra de Spinetta con el público alrededor del escenario.",
    category: "Música", zone: "Ciudad de Mendoza", free: false, cost: "$20.000 · beneficio 2×1", duration: "90 min", startsAt: "2026-09-12T21:00:00-03:00", endsAt: "2026-09-12T22:30:00-03:00",
    address: "Nave Cultural, Av. España y Maza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Nave+Cultural+Mendoza",
    body: ["Ella También propone un homenaje acústico a Luis Alberto Spinetta dentro del ciclo Nave Acústico 360. El público se ubica alrededor de los músicos para una experiencia cercana.", "La apertura está a cargo de Salvea. En el lugar habrá patio de comidas y cervezas artesanales, con consumos opcionales."],
    tips: ["La función comienza a las 21.", "La fuente oficial informa un beneficio 2×1 en EntradaWeb.", "Verificá disponibilidad y condiciones antes de comprar."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/09/ella-tambien-revive-la-obra-de-spinetta-en-una-experiencia-acustica-360-en-la-nave/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "mateo-sujatovich-solista", title: "Mateo Sujatovich en formato solista", eyebrow: "Sábado 12 · 21 h",
    summary: "El líder de Conociendo Rusia revisita sus canciones con voz, guitarra y piano; abre Magnolia Monti.",
    category: "Música", zone: "Ciudad de Mendoza", free: false, cost: "Entrada paga", duration: "Desde las 21 h", startsAt: "2026-09-12T21:00:00-03:00", endsAt: "2026-09-12T23:00:00-03:00",
    address: "Teatro Mendoza, San Juan 1427", mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Mendoza+San+Juan+1427",
    body: ["Mateo Sujatovich llega con una gira íntima en la que recorre canciones de los cuatro discos de Conociendo Rusia acompañado por sus instrumentos.", "La artista mendocina Magnolia Monti será la encargada de abrir la noche. La organización informa venta online y presencial."],
    tips: ["La función comienza a las 21.", "Consultá el valor y la disponibilidad actualizados desde la fuente.", "Usá únicamente los canales de venta enlazados por la organización."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/09/mateo-sujatovich-llega-a-la-ciudad-de-mendoza-con-un-show-en-formato-solista/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "trio-aquarela-tres-son-martinu", title: "Trío Aquarela: Tres son Martinů", eyebrow: "Sábado 12 · 20:30 h",
    summary: "Concierto de cámara para flauta, violonchelo y piano con obras de César Franck y Bohuslav Martinů.",
    category: "Música clásica", zone: "Godoy Cruz", free: false, cost: "$15.000 · promociones", duration: "Desde las 20:30 h", startsAt: "2026-09-12T20:30:00-03:00", endsAt: "2026-09-12T22:00:00-03:00",
    address: "Cristoforo Colombo, A. Tomba 246, Godoy Cruz", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cristoforo+Colombo+A.+Tomba+246+Godoy+Cruz",
    body: ["El Trío Aquarela, integrado por Irina Gruzska, José Luis Di Marco y Ruy Facó Naranjo, ofrece un programa con obras de César Franck y Bohuslav Martinů.", "La entrada general es paga y la organización informa precios promocionales para jubilados y estudiantes."],
    tips: ["La función comienza a las 20:30.", "Consultá la promoción aplicable antes de pagar.", "Verificá los datos de transferencia en la fuente municipal."],
    sourceName: "Municipalidad de Godoy Cruz", sourceUrl: "https://www.godoycruz.gob.ar/trio-aquarela-sonara-cristoforo-colombo-tres-martinu/", verified: "11 sep 2026"
  },
  {
    type: "evento", slug: "jueves-de-orquesta-teatro-mendoza", title: "Jueves de Orquesta", eyebrow: "10 y 17 de septiembre",
    summary: "Dos conciertos gratuitos con la Orquesta Municipal y los ballets Folclórico y Contemporáneo.",
    category: "Música y danza", zone: "Ciudad de Mendoza", free: true, cost: "Gratis, por orden de llegada", duration: "Desde las 21 h", startsAt: "2026-09-17T21:00:00-03:00", endsAt: "2026-09-17T23:00:00-03:00",
    address: "Teatro Mendoza, San Juan 1427", mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Mendoza+San+Juan+1427",
    body: ["La Orquesta Municipal vuelve al Teatro Mendoza con dos programas diferentes. El jueves 10 presenta Tango y Jazz; el jueves 17, Sonidos de Nuestra Raíz. En ambas fechas participan el Ballet Contemporáneo y el Ballet Folclórico municipales.", "Las funciones comienzan a las 21 y el ingreso es sin costo, por orden de llegada, hasta completar la capacidad de la sala."],
    tips: ["Llegá con anticipación: no hay reserva de localidad.", "La función del 17 tiene un programa diferente a la del 10.", "Confirmá cualquier cambio en la publicación municipal."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/03/la-orquesta-municipal-vuelve-al-teatro-mendoza-con-dos-noches-de-musica-y-danza/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "talleres-artesanos-plaza-independencia", title: "Talleres con artesanos en Plaza Independencia", eyebrow: "Sábados de septiembre",
    summary: "Macramé, repujado en metal y cuero, gratis y por orden de llegada en el Paseo de las Artes.",
    category: "Taller", zone: "Ciudad de Mendoza", free: true, cost: "Gratis, cupos limitados", duration: "15 a 17 h", startsAt: "2026-09-12T15:00:00-03:00", endsAt: "2026-09-26T17:00:00-03:00",
    address: "Plaza Independencia, Ciudad de Mendoza", mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Independencia+Mendoza",
    body: ["El Paseo de las Artes propone una técnica diferente cada sábado: macramé el 12, repujado en metal el 19 y trabajo en cuero el 26 de septiembre.", "Todos los encuentros se realizan de 15 a 17, son gratuitos y no requieren compra, pero los cupos se asignan por orden de llegada."],
    tips: ["Llegá antes de las 15 porque los cupos son limitados.", "Cada sábado cambia la técnica.", "Al ser al aire libre, revisá clima y novedades oficiales."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/02/artesanos-de-la-ciudad-brindaran-un-ciclo-de-talleres-gratuitos-en-la-plaza-independencia-durante-septiembre/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "ciclo-agnes-varda-microcine", title: "Ciclo Agnès Varda", eyebrow: "Jueves de septiembre",
    summary: "Cine de autor gratuito: Los espigadores y la espigadora y Caras y lugares en pantalla grande.",
    category: "Cine", zone: "Ciudad de Mendoza", free: true, cost: "Gratis, por orden de llegada", duration: "Desde las 21 h", startsAt: "2026-09-17T21:00:00-03:00", endsAt: "2026-09-24T23:00:00-03:00",
    address: "Microcine Municipal David Eisenchlas, 9 de Julio 500, subsuelo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Municipalidad+de+la+Ciudad+de+Mendoza+9+de+Julio+500",
    body: ["Cineclub Stocco dedica los jueves de septiembre a la directora francesa Agnès Varda. Tras las primeras funciones, la programación continúa el 17 con Los espigadores y la espigadora y el 24 con Caras y lugares.", "Las proyecciones comienzan a las 21 en el Microcine Municipal David Eisenchlas. La entrada es gratuita y el ingreso se organiza por orden de llegada."],
    tips: ["No requiere compra de entrada, pero la capacidad es limitada.", "El acceso al microcine está en el subsuelo del edificio municipal.", "Verificá la función del día en la fuente oficial."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/10/el-microcine-municipal-homenajea-a-agnes-varda-con-un-ciclo-sobre-la-mirada-femenina-en-el-cine/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "charla-guion-de-los-museos", title: "Charla: El Guión de los Museos", eyebrow: "Miércoles 16 de septiembre",
    summary: "Una conferencia gratuita e interactiva sobre patrimonio, educación y museos, con inscripción previa.",
    category: "Cultura", zone: "Ciudad de Mendoza", free: true, cost: "Gratis con inscripción", duration: "Desde las 19 h", startsAt: "2026-09-16T19:00:00-03:00", endsAt: "2026-09-16T21:00:00-03:00",
    address: "Terraza Jardín Mirador Arq. Gerardo Andía, 9 de Julio 500", mapUrl: "https://www.google.com/maps/search/?api=1&query=Terraza+Jardin+Mirador+Mendoza",
    body: ["El profesor Francisco García presenta una charla expositiva e interactiva sobre el guion museológico y su adaptación al sistema educativo. La actividad toma como caso al Museo del Pasado Cuyano.", "Está dirigida a gestores culturales, personal de turismo y patrimonio, comunidad educativa y público general. El acceso es gratuito, con inscripción previa desde el enlace incluido en la fuente municipal."],
    tips: ["Completá la inscripción oficial antes de asistir.", "La actividad comienza a las 19.", "Consultá la fuente para verificar disponibilidad."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/09/la-ciudad-de-mendoza-invita-a-la-charla-el-guion-de-los-museos-y-su-adaptacion-al-sistema-educativo/", verified: "10 sep 2026"
  },
  {
    type: "evento", slug: "sobremesa-club-juegos", title: "Sobremesa: Club de Juegos de Mesa", eyebrow: "Miércoles de septiembre",
    summary: "Encuentro abierto para descubrir y compartir juegos de mesa en el coworking municipal.",
    category: "Juegos", zone: "Ciudad de Mendoza", free: true, cost: "Acceso libre y gratuito", duration: "Desde las 17 h", startsAt: "2026-09-16T17:00:00-03:00", endsAt: "2026-09-30T20:00:00-03:00",
    address: "Coworking Casa Central, 9 de Julio 500", mapUrl: "https://www.google.com/maps/search/?api=1&query=Municipalidad+de+la+Ciudad+de+Mendoza+9+de+Julio+500",
    body: ["Sobremesa es un club de aficionados a los juegos de mesa abierto a personas de distintas edades. Se reúne los miércoles desde las 17 en el Coworking Casa Central.", "La participación es libre y gratuita. La agenda municipal informa un contacto de la organización para consultar la dinámica antes de ir."],
    tips: ["La actividad aparece programada los miércoles.", "Consultá la fuente oficial si necesitás confirmar la fecha puntual.", "El acceso es libre y no exige consumo."],
    sourceName: "Prensa Ciudad de Mendoza", sourceUrl: "https://prensa.ciudaddemendoza.gob.ar/2026/09/09/agenda-primaveral-de-talleres-en-los-coworkings-de-la-ciudad/", verified: "10 sep 2026"
  },
  {
    type: "guia", slug: "como-usar-sube-en-mendoza", title: "Cómo moverte con SUBE", eyebrow: "Guía práctica",
    summary: "La referencia oficial para conseguir, cargar y usar la tarjeta SUBE en el transporte público.",
    category: "Moverse", zone: "Gran Mendoza", free: true, cost: "La información es gratuita; viajes y tarjeta tienen costo", duration: "5 min de lectura",
    body: ["Mendoza utiliza el sistema SUBE en el transporte público. La web oficial explica cómo obtener la tarjeta, registrarla, acreditar cargas y consultar puntos de atención.", "Las tarifas, beneficios y puntos disponibles pueden cambiar. Por eso esta guía enlaza a la fuente nacional en lugar de copiar valores que quedarían desactualizados."],
    tips: ["Revisá saldo y acreditá cargas antes de viajar.", "Usá el mapa oficial para ubicar puntos SUBE.", "No compartas datos de tu tarjeta en sitios no oficiales."],
    sourceName: "SUBE · Argentina.gob.ar", sourceUrl: "https://www.argentina.gob.ar/sube", verified: "10 sep 2026"
  },
  {
    type: "guia", slug: "aeropuerto-mendoza-como-llegar", title: "Aeropuerto de Mendoza: cómo llegar", eyebrow: "Llegadas y salidas",
    summary: "Opciones oficiales de acceso al aeropuerto El Plumerillo y datos para planificar el traslado.",
    category: "Moverse", zone: "Las Heras", free: true, cost: "Información gratuita; cada traslado tiene su tarifa", duration: "4 min de lectura",
    body: ["El Aeropuerto Internacional Gobernador Francisco Gabrielli —El Plumerillo— está al norte de la ciudad. Aeropuertos Argentina publica las alternativas habilitadas para llegar y salir.", "Consultá la página oficial cerca del viaje: recorridos, paradas, prestadores y condiciones pueden modificarse. Para vuelos, verificá también el estado con tu aerolínea."],
    tips: ["Planificá margen extra en horas pico.", "Confirmá precio antes de subir a un servicio pago.", "Usá únicamente prestadores habilitados."],
    sourceName: "Aeropuertos Argentina", sourceUrl: "https://www.aeropuertosargentina.com/es/MDZ/servicios/como-llego", verified: "10 sep 2026"
  },
  {
    type: "guia", slug: "paso-cristo-redentor-estado", title: "Paso a Chile: estado oficial", eyebrow: "Antes de salir",
    summary: "Dónde consultar en tiempo real el estado del Sistema Cristo Redentor y las alertas fronterizas.",
    category: "Ruta", zone: "Alta Montaña", free: true, cost: "Consulta gratuita", duration: "3 min de lectura",
    body: ["El paso internacional puede cerrar o aplicar horarios especiales por nieve, viento, trabajos o coordinación binacional. La ficha oficial del Sistema Cristo Redentor es la referencia prioritaria.", "Consultá también las alertas de pasos internacionales y volvé a verificar inmediatamente antes de viajar. Una captura vieja o una publicación reenviada no reemplaza el estado oficial."],
    tips: ["Chequeá la fuente el mismo día y antes de ingresar a alta montaña.", "Llevá documentación migratoria y vehicular vigente.", "No continúes ante un cierre o alerta oficial."],
    sourceName: "Pasos Internacionales · Argentina.gob.ar", sourceUrl: "https://www.argentina.gob.ar/seguridad/pasosinternacionales/detalle/ruta/29/Sistema-Cristo-Redentor", verified: "10 sep 2026"
  },
  {
    type: "guia", slug: "emergencias-y-policia-turistica", title: "Emergencias y Policía Turística", eyebrow: "Guardalo antes de salir",
    summary: "Números y canales oficiales para pedir ayuda durante una visita en Mendoza.",
    category: "Esencial", zone: "Provincia de Mendoza", free: true, cost: "Información gratuita", duration: "2 min de lectura",
    body: ["Ante una emergencia, llamá al 911. La Policía Turística de Mendoza informa el teléfono +54 261 413-2135 y el correo policiaturistica@mendoza.gov.ar para asistencia específica.", "La conectividad puede ser limitada fuera de zonas urbanas. Avisá tu recorrido a otra persona cuando salgas a montaña y seguí siempre las indicaciones de autoridades locales."],
    tips: ["Emergencias: 911.", "Policía Turística: +54 261 413-2135.", "Guardá los números sin depender de conexión móvil."],
    sourceName: "Prensa Gobierno de Mendoza", sourceUrl: "https://www.mendoza.gov.ar/prensa/vacaciones-de-invierno-recomendaciones-para-alquilar-consejos-para-una-conduccion-segura-en-alta-montana-y-controles-a-proveedores/", verified: "10 sep 2026"
  },
  {
    type: "guia", slug: "clima-de-mendoza-y-alta-montana", title: "Clima y alta montaña", eyebrow: "Pronóstico primero",
    summary: "Cómo leer el pronóstico oficial y por qué el tiempo de la ciudad no alcanza para decidir una salida a montaña.",
    category: "Esencial", zone: "Provincia de Mendoza", free: true, cost: "Consulta gratuita", duration: "4 min de lectura",
    body: ["Mendoza tiene grandes diferencias de altura y exposición. Un día templado en la capital puede coexistir con viento, nieve o frío intenso en cordillera.", "Usá el Servicio Meteorológico Nacional como fuente de pronóstico y alertas. Para rutas de alta montaña, combinalo con el estado oficial del paso y las comunicaciones de autoridades provinciales."],
    tips: ["Revisá alertas además de la temperatura.", "Llevá capas, agua y protección UV.", "Si la autoridad desaconseja el viaje, cambiá el plan."],
    sourceName: "Servicio Meteorológico Nacional", sourceUrl: "https://www.argentina.gob.ar/smn", verified: "10 sep 2026"
  },
  {
    type: "itinerario", slug: "mendoza-centro-en-3-horas", title: "Mendoza centro en 3 horas", eyebrow: "Itinerario a pie",
    summary: "Plaza Independencia, Peatonal Sarmiento, Plaza España y Parque Cívico en un circuito simple.",
    category: "Paseo a pie", zone: "Ciudad de Mendoza", free: true, cost: "Gratis, sin consumos", duration: "3 h",
    body: ["Empezá en Plaza Independencia y caminá la Peatonal Sarmiento hasta avenida San Martín. Volvé por calles del microcentro hacia Plaza España y terminá en los jardines del Parque Cívico.", "El recorrido prioriza espacios públicos y distancias razonables. Adaptalo al clima, a tu movilidad y al horario del día; no depende de entrar a ningún comercio."],
    tips: ["Inicio: Plaza Independencia.", "Parada media: Plaza España.", "Final: Parque Cívico y regreso por avenida España."],
    sourceName: "Recorrido editorial Modo MZA basado en cartografía pública", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026", featured: true
  },
  {
    type: "itinerario", slug: "parque-y-cerro-en-medio-dia", title: "Parque y Cerro en medio día", eyebrow: "Verde + historia",
    summary: "Un recorrido flexible por los Portones, el lago y el Cerro de la Gloria.",
    category: "Naturaleza", zone: "Ciudad de Mendoza", free: true, cost: "Gratis; traslado opcional aparte", duration: "4 h",
    body: ["Entrá al Parque General San Martín por los Portones, seguí hacia el lago y elegí un sector de sombra para una pausa. Después continuá al Cerro de la Gloria según tu movilidad y el tiempo disponible.", "Las distancias internas son amplias. Si no querés caminar todo, verificá transporte público o combiná con un traslado habilitado."],
    tips: ["Evitá el mediodía en jornadas calurosas.", "Llevá agua desde el inicio.", "No fuerces la subida si hay alerta meteorológica."],
    sourceName: "Recorrido editorial Modo MZA basado en información oficial", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  },
  {
    type: "itinerario", slug: "historia-de-mendoza-en-una-manana", title: "Historia de Mendoza en una mañana", eyebrow: "Dos ciudades en un recorrido",
    summary: "Área Fundacional, ruinas de San Francisco y plazas del centro para entender la ciudad antes y después de 1861.",
    category: "Historia", zone: "Ciudad de Mendoza", free: true, cost: "Paseo exterior gratis; entradas opcionales aparte", duration: "3–4 h",
    body: ["Comenzá en Plaza Pedro del Castillo y observá las ruinas de San Francisco. Después trasladate al trazado de la ciudad nueva y cerrá en Plaza Independencia, centro del diseño posterior al terremoto.", "El hilo del recorrido es urbano e histórico. Los exteriores son públicos; si sumás museos, verificá horarios y tarifas antes de ir."],
    tips: ["Leé primero la ficha del Área Fundacional.", "Usá transporte público entre los dos sectores si querés ahorrar energía.", "Terminá comparando las escalas de ambas plazas."],
    sourceName: "Recorrido editorial Modo MZA basado en información oficial", sourceUrl: "https://turismo.ciudaddemendoza.gob.ar/", verified: "10 sep 2026"
  }
];

export const typePath: Record<ContentType, string> = {
  lugar: "lugares", evento: "agenda", guia: "guias", itinerario: "itinerarios"
};

export function hrefFor(item: ContentItem) {
  return `/${typePath[item.type]}/${item.slug}`;
}

export function visualFor(item: ContentItem): {src:string;alt:string;credit?:string;source?:string} {
  if(item.image)return {src:item.image,alt:item.imageAlt||item.title,credit:item.imageCredit,source:item.imageSource};
  if(item.type==="evento")return {src:"/assets/mendoza-eventos.webp",alt:"Encuentro cultural al aire libre en Mendoza"};
  if(item.type==="guia"||item.type==="itinerario")return {src:"/assets/mendoza-rutas.webp",alt:"Una persona planificando un recorrido por Mendoza"};
  return {src:"/assets/mendoza-hero.webp",alt:"Vista urbana arbolada de Mendoza con la cordillera al fondo"};
}

export function findContent(type: ContentType, slug: string) {
  return content.find((item) => item.type === type && item.slug === slug);
}

export function relatedTo(item: ContentItem, limit = 3) {
  return content
    .filter((candidate) => candidate.slug !== item.slug)
    .sort((a, b) => Number(b.category === item.category) + Number(b.zone === item.zone) - Number(a.category === item.category) - Number(a.zone === item.zone))
    .slice(0, limit);
}
