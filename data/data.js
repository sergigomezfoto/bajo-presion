
///////////////////////////////////////////////////////////////////////////VIDEOS
// faciilitador d'estats
const vstate = {
  buffering: 3,
  cued: 5,
  ended: 0,
  paused: 2,
  playing: 1,
  unstarted: -1,
};

const videoList = {
  introVideo: "InfEfS2kx5k",//InfEfS2kx5k
  endVideo: "keyJeG2lMwk",
  smallTest: "RpLm69FLs74",
};



const data = {
  casa: {
    name:"casa",
    title: "Casa",
    introVideo: "Om6PZAPpLAg",
    finalVideo: "UPeWwJoUlFk",
    panos: {
      1: {
        instructions:
          "<p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p>",
        points: 3,
        aptitudes: ["creatividad", "adaptabilidad"],
      },
      2: {
        video: "efHOIAOjHCM",
        instructions: "<p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p>",
        points: 12,
        aptitudes: ["análisis", "colaboración"],
      },
      3: {
        instructions: "<p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p>",
        points: 15,
        aptitudes: ["escucha activa", "comunicación"],
      },
      4: {
        video: "RpLm69FLs74",
        instructions: "<p><b>Capítulo 3:</b> Arquitectura del siglo XX.</p><br><p>Los edificios que definieron una era.</p>",
        points: 20,
        aptitudes: ["liderazgo", "visión espacial"],
      },
      5: {
        video: "BOUlQUAen-c",
        instructions: "<p><b>Conclusión:</b> La influencia del arte en la sociedad.</p><br><p>Una retrospectiva del impacto cultural.</p>",
        points: 25,
        aptitudes: ["empatía", "innovación"],
      },
      6: {
        instructions: "<p><b>Bonus:</b> Entrevistas con expertos.</p><br><p>Conversaciones enriquecedoras con figuras clave.</p>",
        points: 30,
        aptitudes: ["perseverancia", "resiliencia"],

        skill: "especialización",
      },
    },
  },
  polideportivo: {
    name:"polideportivo",
    title: "Polideportivo",
    introVideo: "XCp_4VHVheY",
    finalVideo: "c0yntmtLIxM",
    panos: {
      1: {
        instructions: "<p><b>Introducción:</b></p> Aprende sobre los secretos de la cocina mediterránea. <br> Experimenta los sabores y técnicas de antaño.",
        points: 10,
        aptitudes: ["dedicación", "pasión"],
      },
      2: {
        instructions: "<p><b>Lección 1:</b></p> El arte de la paella valenciana. <br> Desde el arroz hasta el azafrán, cada detalle cuenta.",
        points: 12,
        aptitudes: ["atención al detalle", "paciencia"],
      },
      3: {
        video: "iu2b6jHhvbw",
        instructions: "<p><b>Lección 2:</b></p> Tapas, el corazón del compartir español. <br> Pequeños bocados, grandes sabores.",
        points: 15,
        aptitudes: ["creatividad", "colaboración"],
      },
      4: {
        video: "kvLgJgL1w5A",
        instructions: "<p><b>Lección 3:</b></p> Postres que endulzan el alma. <br> Desde el flan hasta la crema catalana.",
        points: 20,
        aptitudes: ["meticulosidad", "innovación"],
      },
      5: {
        instructions: "<p><b>Conclusión:</b></p> Maridaje, vinos y comidas. <br> La perfecta armonía entre bebida y comida.",
        points: 25,
        aptitudes: ["apreciación", "experimentación"],
      },
      6: {
        video: "ovAdw2uq6fM",
        instructions: "<p><b>Bonus:</b></p> Cocina fusión: España se encuentra con Asia. <br> Un giro innovador en platos clásicos.",
        points: 30,
        aptitudes: ["valentía", "adaptabilidad"],
        skill: "maestría culinaria",
      },
    },
  },
  centro: {
    name:"centro",
    title: "Centro cívico",
    introVideo: "W3u2_haS8DM",
    finalVideo: "HqipozfMXmo",
    panos: {
      1: {
        instructions: "<p><b>Instrucción Uno:</b></p> Comienza con los fundamentos básicos. <br> La base de cualquier habilidad.",
        points: 10,
        aptitudes: ["dedicación", "compromiso"],
      },
      2: {
        video: "W_QZucbALkw",
        instructions: "<p><b>Instrucción Dos:</b></p> No temas a los errores. <br> Son parte del proceso de aprendizaje.",
        points: 12,
        aptitudes: ["perseverancia", "adaptabilidad"],
      },
      3: {
        video: "IRBuE6LMLWE",
        instructions: "<p><b>Instrucción Tres:</b></p> La práctica hace al maestro. <br> Dedica tiempo diariamente.",
        points: 15,
        aptitudes: ["paciencia", "disciplina"],
      },
      4: {
        video: "c_mH63i9A0k",
        instructions: "<p><b>Instrucción Cuatro:</b></p> Busca inspiración en otros. <br> Pero encuentra tu propio estilo.",
        points: 20,
        aptitudes: ["creatividad", "individualidad"],
      },
      5: {
        instructions: "<p><b>Instrucción Cinco:</b></p> El feedback es una herramienta, no una crítica. <br> Úsalo para crecer.",
        points: 25,
        aptitudes: ["apertura", "auto-mejora"],
      },
      6: {
        video: "WoxvjJdq7DY",
        instructions: "<p><b>Instrucción Seis:</b></p> Celebra tus logros, no importa cuán pequeños. <br> Cada paso cuenta.",
        points: 30,
        aptitudes: ["positividad", "auto-reconocimiento"],
      },
      7: {
        video: "ZiY7btz8LJM",
        instructions: "<p><b>Instrucción Final:</b></p> Nunca dejes de aprender. <br> El camino del conocimiento no tiene fin.",
        points: 35,
        aptitudes: ["curiosidad", "hambre de conocimiento"],

        skill: "maestría en aprendizaje",
      },
    },
  },
  instituto: {
    name:"instituto",
    title: "Instituto",
    introVideo: "fmGNk6aybi8",
    finalVideo: "ivKPOr47SRs",
    panos: {
      1: {
        video: "lOpH4MHlMWc",
        instructions: "<p><b>Instrucción Uno:</b></p> Comienza con los fundamentos básicos. <br> La base de cualquier habilidad.",
        points: 10,
        aptitudes: ["dedicación", "compromiso"],
      },
      2: {
        video: "2udfbSXOZTs",
        instructions: "<p><b>Instrucción Dos:</b></p> No temas a los errores. <br> Son parte del proceso de aprendizaje.",
        points: 12,
        aptitudes: ["perseverancia", "adaptabilidad"],
      },
      3: {
        video: "TDIr4yTrl1o",
        instructions: "<p><b>Instrucción Tres:</b></p> La práctica hace al maestro. <br> Dedica tiempo diariamente.",
        points: 15,
        aptitudes: ["paciencia", "disciplina"],
      },
      4: {
        video: "00TBnXamWQg",
        instructions: "<p><b>Instrucción Cuatro:</b></p> Busca inspiración en otros. <br> Pero encuentra tu propio estilo.",
        points: 20,
        aptitudes: ["creatividad", "individualidad"],
      },
      5: {
        instructions: "<p><b>Instrucción Cinco:</b></p> El feedback es una herramienta, no una crítica. <br> Úsalo para crecer.",
        points: 25,
        aptitudes: ["apertura", "auto-mejora"],
      },
      6: {
        instructions: "<p><b>Instrucción Seis:</b></p> Celebra tus logros, no importa cuán pequeños. <br> Cada paso cuenta.",
        points: 30,
        aptitudes: ["positividad", "auto-reconocimiento"],
      },
      7: {
        instructions: "<p><b>Instrucción Siete:</b></p> No subestimes el poder del descanso. <br> Recargar energías es esencial.",
        points: 35,
        aptitudes: ["descanso", "regeneración"],
      },
      8: {
        video: "igxxG6Qy-tI",
        instructions: "<p><b>Instrucción Final:</b></p> Nunca dejes de aprender. <br> El camino del conocimiento no tiene fin.",
        points: 40,
        aptitudes: ["curiosidad", "hambre de conocimiento"],

        skill: "maestría en aprendizaje",
      },
    },
  },
  parque: {
    name:"parque",
    title: "Parque",
    introVideo: "_HuJ5lPj21A",
    finalVideo: "a7KYHRiIJbQ",
    panos: {
      1: {
        instructions:
          "<p><b>Preparativos:</b></p> Antes de iniciar, asegúrate de estar en un lugar cómodo. <br> La empatía y el amor son esenciales para este ejercicio.",
        points: 10,
        aptitudes: ["love", "empathy"],
      },
      2: {
        instructions: "<p><b>Paso 1:</b></p> Respira hondo y relaja tu mente. <br> Concéntrate en el presente y en cómo te sientes.",
        points: 10,
        aptitudes: ["love", "empathy"],
      },
      3: {
        video: "DO3zz6a2MPM",
        instructions: "<p><b>Paso 2:</b></p> Piensa en una persona que ames. <br> Visualiza un momento feliz que hayan compartido juntos.",
        points: 10,
        aptitudes: ["love", "empathy"],
      },
      4: {
        video: "RvqsSlcsLmg",
        instructions: "<p><b>Paso 3:</b></p> Ahora, ponerte en los zapatos de otra persona. <br> Intenta sentir lo que sienten y entender su perspectiva.",
        points: 10,
        aptitudes: ["love", "empathy"],
      },
      5: {
        video: "O93jmZv57Sw",
        instructions:
          "<p><b>Paso 4:</b></p> Reflexiona sobre cómo te sientes ahora. <br> La empatía y el amor son habilidades que se pueden desarrollar con práctica.",
        points: 10,
        aptitudes: ["love", "empathy"],
      },
      6: {
        instructions: "<p><b>Conclusión:</b></p> Felicitaciones por completar este ejercicio. <br> Recuerda practicar la empatía y el amor en tu vida diaria.",
        points: 10,
        aptitudes: ["love", "empathy"],
        skill: "habilidad de empatía y amor",
      },
    },
  },
};
