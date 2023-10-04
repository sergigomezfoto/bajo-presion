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
        "<p><b>¿Quién soy yo?</b></p><p> A continuación, deberás hacer una lista con todas aquellas características que creas relevantes sobre ti. Debes anotar aquellas que te gustan, aquellas que no te convencen y aquellas que te son indiferentes. Puedes incluir aspectos de personalidad, físicos, de intereses, de aficiones, de habilidades, etc. Si la hacéis en grupo, podéis elegir algunas características de cada persona.  </p><p>Si te ayuda, puedes: <br>1) Hacer una primera lluvia de ideas de todas las características que se te ocurran en un folio aparte. <br>2) Elegir las más significativas.<br>3) Clasificarlas en las tres columnas de la pizarra.   </p>",
        points: 1,
        aptitudes: ["creatividad", "adaptabilidad"],
        extra: {
          link2: "",

        },
      },
      2: {
        video: "efHOIAOjHCM",
        instructions:
          "<p><b>¿Cómo me veo?</b> </p><p>Una nariz, dos ojos... ¿y qué más? Para empezar, vamos a crear un avatar a nuestra imagen y semejanza. Si estáis en grupo, vais a elegir y mezclar varios rasgos y características que os identifiquen. También podéis pensar en qué cosas os identifican en conjunto. </p> <br> <p><b>¡Atención!</b></p><p>En esta actividad vamos a crear un avatar bla bla bla</p>",
        points: 1,
        aptitudes: ["análisis", "colaboración"],
        extra: {
          link1: "",

        },
      },
      3: {
        instructions:
          "<p><b>¿Admirar o envidiar?</b> </p><p>Visualiza el vídeo a continuación. Piensa en cómo se sienten los personajes. </p><p>¿Te es familiar? </p>",
        points: 1,
        aptitudes: ["escucha activa", "comunicación"],
        extra: {
          link1casa3: "https://www.youtube.com/embed/COxt8ktNlko?si=YewrRCb1JErfugFk",

        },
      },
      4: {
        video: "RpLm69FLs74",
        instructions: "<p><b>¡Soy portada!</b> </p><p>Ha llegado la hora de ver cómo llevas lo de promocionarte. Como eres nueva en el pueblo, la revista comarcal va a hacer una pequeña sección sobre ti.</p><p>Ahora es tu oportunidad para hablar sobre las cualidades que has identificado anteriormente. Escribe dos o tres frases para presentarte.</p><p>¡No te cortes, la gente del pueblo tiene ganas de conocerte de verdad y aparecerás en portada!   </p>",
        points: 1,
        aptitudes: ["liderazgo", "visión espacial"],
        extra: {
          link1: "",

        },
      },
      5: {
        video: "BOUlQUAen-c",
        instructions: "<p><b>¡No cruces ahora! </b> </p><p>A continuación, tendrás que reflexionar sobre tus límites. Aparecerán distintas situaciones y tendrás que seleccionar verde o rojo, dependiendo de si lo toleras o no, siendo verde que lo aceptas y rojo que por ahí no pasas.</p> <p> ¡Vamos a ello! </p>  ",
        points: 1,
        aptitudes: ["empatía", "innovación"],
        extra: {
          link1casa5: "https://view.genial.ly/65041d02e19b6a0011a3bf19",

        },
      },
      6: {
        instructions: "<p><b>¿Resumimos? </b></p><p> Y la última: ¿te han quedado claros lo conceptos trabajados? ¡Vamos a comprobarlo! </p><p>Mira primero los conceptos y las definiciones y aventúrate a completar el crucigrama después.</p>",
        points: 1,
        aptitudes: ["perseverancia", "resiliencia"],
        extra: {
          link1casa6: "https://puzzel.org/es/crossword/play?p=-NaGo1pSHfOppFQUMHSW",

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
        instructions: "<p><b>¿Qué sienten los personajes? </b></p> A continuación, presenciarás una bonita historia de amor. Durante esta historia verás cómo se viven distintas emociones por parte de distintos personajes, ¿sabrías identificar qué sienten los personajes que te iremos indicando?<p></p><p>Haz clic en el emoji que mejor represente la emoción del personaje que te indicamos en ese momento exacto.</p><br><p><b>¡Atención!</b></p><p>Normalmente, tendrás que clicar en los diálogos para acceder a las actividades.</p>",
        points: 1,
        aptitudes: ["dedicación", "pasión"],
        extra: {
          link1poli1: "https://www.youtube.com/embed/2REkk9SCRn0?si=1lAoEIQs_h8Zygme",
          link1poli1ok: "https://noupunt.com/test/pds/bajo-presion/outside/love/",
          

        },
      },
      2: {
        instructions: "<p><b>Entreno emocional</b></p> <p>Esta pizarra no es una pizarra clásica. Esta vez puedes experimentar sin ganar ni perder, puedes elegir dos emociones simples y al mezclarse aparecerá una emoción compleja. </p><p>¡Entrénate y practica!</p>",
        points: 2,
        aptitudes: ["atención al detalle", "paciencia"],
        extra: {
          link1poli2: "https://noupunt.com/test/pds/bajo-presion/outside/emotions/",

        },
      },
      3: {
        video: "iu2b6jHhvbw",
        instructions: "<p><b>¿Qué está pasando?</b></p> <p>En el partidillo del entreno, estamos trabajando la presión que podemos sufrir durante un partido con público... </p><p>¿Quien pone presión realmente? ¿Quieres averiguar quien hay realmente en las gradas juzgando cada movimiento?</p><p>Recuerda que llevas puestas las Gafas Chupi Flow de Etna, o sea, ves el mundo a través de sus ojos y por lo tanto, ves lo que ella ve y puedes sentir la presión que ella siente en un momento como este...</p><br><p><b>¡Atención!</b></p><p>No todos los choques entre jugadores y no todas las “faltas” ocurren durante el partido. Todo el tiempo, mientras estemos en relación con otras personas, se pueden dar situaciones más o menos conflictivas que tenemos que manejar lo mejor que podemos. ¡Vamos a poner la oreja en algunas cosas que están pasando entre el público y durante el entreno!</p>",
        points: 3,
        aptitudes: ["creatividad", "colaboración"],
        extra: {
          link1poli1enrique: "https://www.youtube.com/embed/Rw2SZueveOE?si=N4-h9xMH0xOFgpeu",
          link1poli2miki: "https://www.youtube.com/embed/65An6K-Ryl0?si=8MOTUB5JuzqTRcAB",
          link1poli3ibrahim: "https://www.youtube.com/embed/ZFe-XQMw1j4?si=SXkpvF547Onf85ax",
        },
      },
      4: {
        video: "kvLgJgL1w5A",
        instructions: "<p><b>¡Tiempo! Ponte en su lugar</b></p> <p>Vas a leer situaciones en la que alguien no se está sintiendo bien o tiene un problema. Es importante que no juzguemos a las otras personas por cómo resuelven las situaciones que les angustian, pero ¿cómo actuarías tú si te ocurriesen?</p><p>Puedes escribirlo o hablarlo en grupo. </p>",
        points: 13,
        aptitudes: ["meticulosidad", "innovación"],
        extra: {
          link1: "",

        },
      },
      5: {
        instructions: "<p><b>¡ENCESTA! </b></p> <p>Es el momento de la verdad del entreno. Hay que encestar sea como sea o tu equipo perderá. Puedes probar varias veces para meter la bola en la canasta. </p><p>¡El equipo depende de ti!</p>",
        points: 1,
        aptitudes: ["apreciación", "experimentación"],
        extra: {
          link1poli5: "https://noupunt.com/test/pds/bajo-presion/outside/joc_impossible_basket/",

        },
      },
      6: {
        video: "ovAdw2uq6fM",
        instructions: "<p><b>¿Qué harías tú? </b></p> <p>Al final:</p><p>¿Por qué hacemos cosas que no queremos?</p><p>¿Cómo podemos decir que no a algo asertivamente?</p><p>Si alguna vez has hecho algo que no querías, ¿cómo te has sentido después?</p>",
        points: 5,
        aptitudes: ["valentía", "adaptabilidad"],
        skill: "gestión emocional",
        extra: {
          link1poli6: "https://view.genial.ly/6502e47bbc15910013e6c86d",

        },
      },
    },
  },
  centro: {
    name: "centro",
    title: "Espacio joven",
    introVideo: "W3u2_haS8DM",
    finalVideo: "HqipozfMXmo",
    talents: ["Mejorar vínculos personales", "Tomar decisiones", "Resolver problemas", "Escuchar activamente"],
    panos: {
      1: {
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
        points: 2,
        aptitudes: ["dedicación", "compromiso"],
        extra: {
          linkmarc: "https://www.youtube.com/embed/99kixEMF0Sw?si=vHJyIiQHLNKtNADr",
        },
      },
      2: {
        video: "W_QZucbALkw",
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
        points: 2,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1: "caqui.com",
        },
      },
      3: {
        video: "IRBuE6LMLWE",
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
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
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
        points: 1,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
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
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
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
        instructions: "<p><b>Introducción:</b></p> <p></p><p></p>",
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
        instructions: "<p><b>Hay muchos tipos de violencia </b></p> <p>Hay más tipos de violencia aparte de la física, que es seguramente la más conocida y evidente. A continuación, deberás relacionar las distintas situaciones con el tipo de violencia que ejemplifican.</p><p>Arrastra cada viñeta con su definición.</p>",
        points: 1,
        aptitudes: ["dedicación", "compromiso"],
        extra: {
          link1insti1: "https://view.genial.ly/6509734821818c0010985f0b",

        },
      },
      2: {
        video: "2udfbSXOZTs",
        instructions: "<p><b>Vive un acoso escolar</b></p> <p>Vive una situación de acoso escolar en primera persona. </p><p>Escanea el código QR de la pizarra y ponte las gafas de realidad virtual. </p><p>¿Preparado para ponerte en los zapatos de cada uno de los personajes?</p><br><p><b>¡Atención!</b></p><p>Una vez escaneado el código QR con el móvio, necesitas usar la aplicación de YouTube en tu teléfono móvil para poder visualizar correctamente el vídeo en modo VR a mayor resolución posible.</p>",
        points: 1,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1insti2: "https://noupunt.com/test/pds/bajo-presion/tour/activities/instituto2/assets/insti2.html",
          link2insti2: "https://www.youtube.com/embed/vw-4TPiYmqE?si=8RmmJRlz-FQOGnC6",
          link3insti2: "https://noupunt.com/test/pds/bajo-presion/tour/activities/instituto2/assets/insti2ig.html",

        },
      },
      3: {
        video: "TDIr4yTrl1o",
        instructions: "<p><b>¿Quién es quién? </b></p> Después de ver la situación que se ha dado en clase, ¿sabrías decirme quién es quién? <p></p><p>En la siguiente actividad deberás adivinar desde dónde se vivió lo que pasó, es decir, qué roles o papeles tenía cada personaje en la situación.  </p>",
        points: 15,
        aptitudes: ["paciencia", "disciplina"],
        extra: {
          link1: "https://view.genial.ly/650971e96281ff00111c367a",
          link2: "https://view.genial.ly/650971e621818c001098595a",
          link3: "https://view.genial.ly/6509700750d05d001190c930",
        },
      },
      4: {
        video: "00TBnXamWQg",
        instructions: "<p><b>Esto no mola...</b></p> <p>Hay muchas cosas interesantes y divertidas en internet, pero a veces hay que ir con cuidado porque nuestro comportamiento podría dañar a los demás. Aprende qué tipos de ciberacoso existen y qué puedes hacer para respetar a tus compañeros y a la vez tener más “netiqueta”. </p><br><p><b>¡Atención!</b></p><p>La netiqueta o etiqueta net es el conjunto de normas que busca regular el comportamiento de los usuarios en internet para mantener una sana convivencia en los entornos digitales.  </p>",
        points: 20,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      5: {
        instructions: "<p><b>Atrapa al Bully</b></p> <p>En clase de tecnología habéis construido una nave espacial para viajar al espacio. Pero cuidado, ha habido un pequeño incidente que podría convertir vuestro viaje en una experiencia desagradable... </p>",
        points: 25,
        aptitudes: ["apertura", "auto-mejora"],
        extra: {
          link1: "https://view.genial.ly/6502e599d687f3001153bba6",

        },
      },
      6: {
        instructions: "<p><b>¿Y tú qué harías? </b></p> <p>Reflexiona ahora sobre cómo actuarías tú ante el acoso escolar de un compañero o compañera. Intenta también responder estas preguntas:</p><p>¿Por qué es importante que las personas observadoras actúen ante el acoso? </p><p>¿Qué emociones se pueden sentir en el rol de “persona observadora”?</p><p>¿Puede que a veces sintamos presión por no decir nada? </p><p>¿Cómo crees que podemos vencer esa presión? </p>",
        points: 30,
        aptitudes: ["positividad", "auto-reconocimiento"],
        extra: {
          link1: "https://forms.office.com/e/y9rFkk4GSm",

        },
      },
      7: {
        instructions: "<p><b>¡Stop Bullying! </b></p> <p>Vamos a ver si nuestros compañeros nos dan ideas para ayudar a alguien que está sufriendo acoso</p><p>¡Dales turno de palabra!</p>",
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
        instructions: "<p><b>¡Pasapalabra! </b></p> <p>Y para terminar... ¿cuántos conceptos relacionados con las violencias sociales conoces?</p>",
        points: 40,
        aptitudes: ["curiosidad", "hambre de conocimiento"],
        extra: {
          link1: "https://view.genial.ly/65041b5d5a6dc5001103da7c",

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
        instructions: "<p><b>Que tu influencia seas tú</b></p> <p>Ponte en el lugar de Etna y experimenta en su piel tres formas distintas de responder a un compañero que le pide que haga algo que ella no quiere hacer.</p><p>Trasládate con las gafas de RV al parque donde Etna y sus nuevos amigos están ahora pasando el rato. </p><p>¿Te suenan estos estilos comunicativos? ¿Con qué tipo de reacción te identificas más?</p><br><p><b>¡Atención!</b></p><p>Una vez escaneado el código QR con el móvio, necesitas usar la aplicación de YouTube en tu teléfono móvil para poder visualizar correctamente el vídeo en modo VR a mayor resolución posible.</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "sergigomez.com",
          link2: "sergigomez.com",
          link3: "sergigomez.com",
        },
      },
      2: {
        instructions: "<p><b>¿Y tú qué crees?</b></p> <p>A veces, lo que pensamos no es la realidad objetiva. Ahora tienes la oportunidad de conocer el consumo de las personas jóvenes de 14-18 años. ¡Vamos a jugar!</p><p> Greta, a quien le gusta saber la verdad de las cosas, ha revisado los últimos informes de datos extraídos de varias encuestas a jóvenes. </p><p> ¡Ponte a prueba, a ver si adivinas qué dato es el correcto!</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "",

        },
      },
      3: {
        video: "DO3zz6a2MPM",
        instructions: "<p><b>Bajo presión</b></p> <p>Quizás vosotras o alguien de vuestro entorno haya vivido una situación parecida a la que veréis a continuación. </p> <p>Prestad especial atención a cómo se ejerce la presión social sobre el protagonista.</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "https://www.youtube.com/embed/7xjcDmdTjyI?si=n5rDJu-kfDTbWYWK",
          link2: "https://forms.office.com/e/UiUJpvLCAj",
        },
      },
      4: {
        video: "RvqsSlcsLmg",
        instructions: "<p><b>Desmitifícate</b></p> <p>Ahora que ya tienes un poco más de información sobre las drogas, vamos a ver si te queda algún mito histórico por desmentir... </p><p>Hemos traído a alguien con una máquina del tiempo para que nos ayude a identificar algunos de ellos. </p><p>¡Saludad a Platón!</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "",

        },
      },
      5: {
        video: "O93jmZv57Sw",
        instructions: "<p><b>Diversión como antídoto</b></p> <p>Navega por el parque de skate y descubre el experimento de “El parque de las ratas”. </p><p>¿Crees que el entorno que nos rodea influye a la hora de tomar decisiones sobre nuestra salud?</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "https://www.youtube.com/embed/A5k_TC5ZuzM?si=mS2AMbzuOwfENs4O",
          link2: "https://www.stuartmcmillen.com/es/comic/el-parque-de-las-ratas/#page-1",
          link3: "https://forms.office.com/e/2hNXV49ECP",
        },
      },
      6: {
        instructions: "<p><b>Drogo-Quizz </b></p> <p>Y por último... ¿te has quedado con todo? Vamos a verlo...</p>",
        points: 10,
        aptitudes: ["love", "empathy"],
        skill: "criterio própio",
        extra: {
          link1: "https://view.genial.ly/650414dde19b6a0011a3973e",

        },
      },
    },
  },
};
