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
  introVideo: "InfEfS2kx5k", //InfEfS2kx5k
  endVideo: "DmtFT_ktZeg",
};

const data = {
  casa: {
    name: "casa",
    title: "Casa",
    introVideo: "Om6PZAPpLAg",
    finalVideo: "UPeWwJoUlFk",
    talents: ["Conocimiento propio", "Autoaceptación", "Construir autoestima", "Identificar los límites"],
    panos: {
      1: {
        instructions:
          "<p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p><p><b>Introducción:</b> Aprende sobre la historia del arte.</p><p>Descubre las maravillas del Renacimiento y cómo impactaron al mundo.</p>",
        points: 2,
        aptitudes: ["creatividad", "adaptabilidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        video: "efHOIAOjHCM",
        instructions:
          "<p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p>",
        points: 12,
        aptitudes: ["análisis", "colaboración"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      3: {
        instructions:
          "<p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p><p><b>Capítulo 2:</b> La música y su evolución.</p><br><p>Del clasicismo al rock, un viaje emocionante.</p>",
        points: 15,
        aptitudes: ["escucha activa", "comunicación"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      4: {
        video: "RpLm69FLs74",
        instructions: "<p><b>Capítulo 3:</b> Arquitectura del siglo XX.</p><br><p>Los edificios que definieron una era.</p>",
        points: 20,
        aptitudes: ["liderazgo", "visión espacial"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        video: "BOUlQUAen-c",
        instructions: "<p><b>Conclusión:</b> La influencia del arte en la sociedad.</p><br><p>Una retrospectiva del impacto cultural.</p>",
        points: 25,
        aptitudes: ["empatía", "innovación"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      6: {
        instructions: "<p><b>Bonus:</b> Entrevistas con expertos.</p><br><p>Conversaciones enriquecedoras con figuras clave.</p>",
        points: 30,
        aptitudes: ["perseverancia", "resiliencia"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },

        skill: "autoconocimiento",
      },
    },
  },
  polideportivo: {
    name: "polideportivo",
    title: "Polideportivo",
    introVideo: "XCp_4VHVheY",
    finalVideo: "c0yntmtLIxM",
    talents: ["Identificar emociones", "Desarrollar empatía", "Tolerar la frustración", "Asumir responsabilidades"],
    panos: {
      1: {
        instructions: "<p><b>Introducción:</b></p> Aprende sobre los secretos de la cocina mediterránea. <br> Experimenta los sabores y técnicas de antaño.",
        points: 10,
        aptitudes: ["dedicación", "pasión"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        instructions: "<p><b>Lección 1:</b></p> El arte de la paella valenciana. <br> Desde el arroz hasta el azafrán, cada detalle cuenta.",
        points: 12,
        aptitudes: ["atención al detalle", "paciencia"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      3: {
        video: "iu2b6jHhvbw",
        instructions: "<p><b>Lección 2:</b></p> Tapas, el corazón del compartir español. <br> Pequeños bocados, grandes sabores.",
        points: 15,
        aptitudes: ["creatividad", "colaboración"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      4: {
        video: "kvLgJgL1w5A",
        instructions: "<p><b>Lección 3:</b></p> Postres que endulzan el alma. <br> Desde el flan hasta la crema catalana.",
        points: 20,
        aptitudes: ["meticulosidad", "innovación"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        instructions: "<p><b>Conclusión:</b></p> Maridaje, vinos y comidas. <br> La perfecta armonía entre bebida y comida.",
        points: 25,
        aptitudes: ["apreciación", "experimentación"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      6: {
        video: "ovAdw2uq6fM",
        instructions: "<p><b>Bonus:</b></p> Cocina fusión: España se encuentra con Asia. <br> Un giro innovador en platos clásicos.",
        points: 30,
        aptitudes: ["valentía", "adaptabilidad"],
        skill: "gestión emocional",
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
    },
  },
  centro: {
    name: "centro",
    title: "Centro cívico",
    introVideo: "W3u2_haS8DM",
    finalVideo: "HqipozfMXmo",
    talents: ["Mejorar vínculos personales", "Tomar decisiones", "Resolver problemas", "Escuchar activamente"],
    panos: {
      1: {
        instructions: "<p><b>Instrucción Uno:</b></p> Comienza con los fundamentos básicos. <br> La base de cualquier habilidad.",
        points: 1,
        aptitudes: ["dedicación", "compromiso"],
        extra: {
          link1: "mami.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        video: "W_QZucbALkw",
        instructions: "<p><b>Instrucción Dos:</b></p> No temas a los errores. <br> Son parte del proceso de aprendizaje.",
        points: 1,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1: "caqui.com",
        },
      },
      3: {
        video: "IRBuE6LMLWE",
        instructions: "<p><b>Instrucción Tres:</b></p> La práctica hace al maestro. <br> Dedica tiempo diariamente.",
        points: 1,
        aptitudes: ["paciencia", "disciplina"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      4: {
        video: "c_mH63i9A0k",
        instructions: "<p><b>Instrucción Cuatro:</b></p> Busca inspiración en otros. <br> Pero encuentra tu propio estilo.",
        points: 1,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        instructions: "<p><b>Instrucción Cinco:</b></p> El feedback es una herramienta, no una crítica. <br> Úsalo para crecer.",
        points: 1,
        aptitudes: ["apertura", "auto-mejora"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      6: {
        video: "WoxvjJdq7DY",
        instructions: "<p><b>Instrucción Seis:</b></p> Celebra tus logros, no importa cuán pequeños. <br> Cada paso cuenta.",
        points: 1,
        aptitudes: ["positividad", "auto-reconocimiento"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      7: {
        video: "ZiY7btz8LJM",
        instructions: "<p><b>Instrucción Final:</b></p> Nunca dejes de aprender. <br> El camino del conocimiento no tiene fin.",
        points: 1,
        aptitudes: ["curiosidad", "hambre de conocimiento"],

        skill: "sociabilidad",
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
    },
  },
  instituto: {
    name: "instituto",
    title: "Instituto",
    introVideo: "fmGNk6aybi8",
    finalVideo: "ivKPOr47SRs",
    talents: ["Identificar las violencias", "Identificar los roles", "Respetar a los demás", "Luchar contra el acoso"],
    panos: {
      1: {
        video: "lOpH4MHlMWc",
        instructions: "<p><b>Instrucción Uno:</b></p> Comienza con los fundamentos básicos. <br> La base de cualquier habilidad.",
        points: 10,
        aptitudes: ["dedicación", "compromiso"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        video: "2udfbSXOZTs",
        instructions: "<p><b>Instrucción Dos:</b></p> No temas a los errores. <br> Son parte del proceso de aprendizaje.",
        points: 12,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      3: {
        video: "TDIr4yTrl1o",
        instructions: "<p><b>Instrucción Tres:</b></p> La práctica hace al maestro. <br> Dedica tiempo diariamente.",
        points: 15,
        aptitudes: ["paciencia", "disciplina"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      4: {
        video: "00TBnXamWQg",
        instructions: "<p><b>Instrucción Cuatro:</b></p> Busca inspiración en otros. <br> Pero encuentra tu propio estilo.",
        points: 20,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        instructions: "<p><b>Instrucción Cinco:</b></p> El feedback es una herramienta, no una crítica. <br> Úsalo para crecer.",
        points: 25,
        aptitudes: ["apertura", "auto-mejora"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      6: {
        instructions: "<p><b>Instrucción Seis:</b></p> Celebra tus logros, no importa cuán pequeños. <br> Cada paso cuenta.",
        points: 30,
        aptitudes: ["positividad", "auto-reconocimiento"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      7: {
        instructions: "<p><b>Instrucción Siete:</b></p> No subestimes el poder del descanso. <br> Recargar energías es esencial.",
        points: 35,
        aptitudes: ["descanso", "regeneración"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      8: {
        video: "igxxG6Qy-tI",
        instructions: "<p><b>Instrucción Final:</b></p> Nunca dejes de aprender. <br> El camino del conocimiento no tiene fin.",
        points: 40,
        aptitudes: ["curiosidad", "hambre de conocimiento"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },

        skill: "empatía",
      },
    },
  },
  parque: {
    name: "parque",
    title: "Parque",
    introVideo: "_HuJ5lPj21A",
    finalVideo: "a7KYHRiIJbQ",
    talents: ["Comunicar asertivamente", "Información sobre drogas", "Identificar presión de grupo", "Romper mitos"],
    panos: {
      1: {
        instructions:
          "<p><b>Preparativos:</b></p> Antes de iniciar, asegúrate de estar en un lugar cómodo. <br> La empatía y el amor son esenciales para este ejercicio.",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        instructions: "<p><b>Paso 1:</b></p> Respira hondo y relaja tu mente. <br> Concéntrate en el presente y en cómo te sientes.",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      3: {
        video: "DO3zz6a2MPM",
        instructions: "<p><b>Paso 2:</b></p> Piensa en una persona que ames. <br> Visualiza un momento feliz que hayan compartido juntos.",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      4: {
        video: "RvqsSlcsLmg",
        instructions: "<p><b>Paso 3:</b></p> Ahora, ponerte en los zapatos de otra persona. <br> Intenta sentir lo que sienten y entender su perspectiva.",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        video: "O93jmZv57Sw",
        instructions:
          "<p><b>Paso 4:</b></p> Reflexiona sobre cómo te sientes ahora. <br> La empatía y el amor son habilidades que se pueden desarrollar con práctica.",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      6: {
        instructions: "<p><b>Conclusión:</b></p> Felicitaciones por completar este ejercicio. <br> Recuerda practicar la empatía y el amor en tu vida diaria.",
        points: 10,
        aptitudes: ["love", "empathy"],
        skill: "criterio própio",
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
    },
  },
};
