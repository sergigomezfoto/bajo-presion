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
          link1casa1: "outside/casa_ideas/index.html",

        },
      },
      2: {
        video: "efHOIAOjHCM",
        instructions:
          "<p><b>Las diferentes pieles de Mr. Potato</b> </p><p>Mr. Potato, como una cebolla, también tiene muchas capas o pieles, cada grupo al que pertenece le aporta una “piel” nueva a su identidad.</p><p> ¿Quieres descubrir cuál es tu identidad social?</p>",
        points: 1,
        aptitudes: ["análisis", "colaboración"],
        extra: {
          link1casa2: "outside/potato/index.html",

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
        instructions: "<p><b>¡Soy portada!</b> </p><p>Ha llegado la hora de ver cómo llevas lo de promocionarte. Como eres nueva en el pueblo, la revista comarcal va a hacer una pequeña sección sobre ti.</p><p>Ahora es tu oportunidad para hablar sobre las cualidades que has identificado anteriormente. Escribe dos o tres frases para presentarte.</p><p>¡No te cortes, la gente del pueblo tiene ganas de conocerte de verdad y aparecerás en portada!   </p>    <p>Primero: elije la revista en la que quieres aparecer (por ejemplo: Bravo, Cuore, Teen Vogue, Rolling Stone, Cosmopolitan, Sports Illustrated, Hola, etc.)</p>    <p>Segundo: elije un titular como frase principal que responda al motivo por el que estás apareciendo en portada. ¿Qué hay de relevante o a destacar en ti y de lo que estés orgullosa?</p>    <p>Tercero: hazte una fotografía (selfie) con el teléfono móvil; mírarla unos minutos y describe en detalle y profundidad a la persona a la qué ves ahí.  Fíjate en lo que transmites, qué cosas físicas ves y cómo te muestras emocionalmente.</p>    <p>Y si no sabes por donde empezar, ¡Etna te muestra un ejemplo!</p>",
        points: 1,
        aptitudes: ["liderazgo", "visión espacial"],
        extra: {
          link1casa4: "outside/soyportada/index.html",

        },
      },
      5: {
        video: "BOUlQUAen-c",
        instructions: "<p><b>¡No cruces ahora! </b> </p><p>A continuación, tendrás que reflexionar sobre tus límites. Aparecerán distintas situaciones y tendrás que seleccionar verde o rojo, dependiendo de si lo toleras o no, siendo verde que lo aceptas y rojo que por ahí no pasas.</p> <p> ¡Vamos a ello! </p>  ",
        points: 4,
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
        instructions: "<p><b>La complejidad de las emociones</b></p> <p>Identificar las emociones de las demás personas tiene su complejidad y aprender a gestionar las propias es un gran reto. </p><p>Mira este vídeo sobre un robot que está en pleno proceso de aprendizaje de estas habilidades. ¿Quieres jugar con R2D3 a identificarlas? </p>",
        points: 2,
        aptitudes: ["dedicación", "compromiso"],
        extra: {
          linkmarc: "https://www.youtube.com/embed/99kixEMF0Sw?si=vHJyIiQHLNKtNADr",
        },
      },
      2: {
        video: "W_QZucbALkw",
        instructions: "<p><b>¿Quién gana la jugada? </b></p> <p>En esta partida los goles están asegurados, pero... ¿en qué portería?</p><p>Van a aparecer ante ti distintas jugadas donde se sucumbe a la presión social o no. </p><p>Deberás clasificar cada situación según si está ganando lo que quiere hacer la persona individual o si está ganando lo que quiere hacer el grupo de amigos.</p>",
        points: 2,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1: "caqui.com",
        },
      },
      3: {
        video: "IRBuE6LMLWE",
        instructions: "<p><b>La historia de las mil y una decisiones de Nico</b></p> <p>Desde el momento en que nos levantamos hasta que nos acostamos, pasamos por infinitas situaciones en las que tenemos que decidir qué hacer a continuación. Muchas veces ni siquiera somos conscientes de ello. Por ejemplo, levantarse o no de la cama ya es una decisión. </p><p>Entra en la historieta sobre mi día de hoy. ¿Me ayudas a tomar algunas decisiones?</p>",
        points: 1,
        aptitudes: ["paciencia", "disciplina"],
        extra: {
          link1centro3: "https://view.genial.ly/650973e550d05d001190da24",
        },
      },
      4: {
        video: "c_mH63i9A0k",
        instructions: "<p><b>El problema como un reto</b></p> <p>Algunos problemas no tienen solución y, desafortunadamente, tenemos que aprender a convivir con ellos. Otros muchos, en cambio, pueden solucionarse y los podemos tomar como un juego de estrategia para resolver. </p><p>A continuación, aparecerán letras desordenadas. Deberás ordenarlas para averiguar los 5 pasos de la estrategia para solucionar un problema. </p><p>Aplícalos y juega tus cartas.</p>",
        points: 1,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1centro4: "sergigomez.com",
          link2centro4: "https://www.youtube.com/embed/f5yAvgI-o0M?si=V9jWAKleBIuEsgDM",

        },
      },
      5: {
        instructions: "<p><b>Es cosa de dos</b></p> <p>¿Eres de las que quiere tener siempre la razón o de las que suele ceder? En esta ocasión debéis poneros en parejas y debatir hasta poneros de acuerdo para elegir un lado: “de acuerdo” o “en desacuerdo”, con las frases que se os presentan.  </p><p>  Sea como sea, no os podéis separar e ir por vuestra cuenta; hablad, debatid, ceded... ¡o no! Pero manejad el conflicto.        </p>",
        points: 1,
        aptitudes: ["apertura", "auto-mejora"],
        extra: {
          link1centro5: "https://view.genial.ly/650973ea6281ff00111c3f2e",

        },
      },
      6: {
        video: "WoxvjJdq7DY",
        instructions: "<p><b>¿Qué le pasa? </b></p> <p>Llegó la hora de averiguar cómo de bien se os da comprender a las otras personas. ¿Eres capaz de adivinar qué emoción está sintiendo alguien sólo con su expresión? </p><p>¡Vamos a comprobar cuán hábil eres!</p>  <p>Sólo la persona que va a hacer mímica debe ver la pantalla; tenéis que representar la emoción que os aparezca de la mejor manera.</p><p> ¡Recordad que no podéis hablar, nada de nada! </p><br><p><b>¡Atención!</b></p><p>Hay varias cartas, ¡puedes ir sacando a ver qué emoción hay que representar!</p>",
        points: 1,
        aptitudes: ["positividad", "auto-reconocimiento"],
        extra: {
          link1: "",

        },
      },
      7: {
        video: "ZiY7btz8LJM",
        instructions: "<p><b>Activa tu memoria </b></p> <p>Y para terminar... ¿te han quedado claros los conceptos? </p><p>¡A ver si los aciertas todos a la primera!</p>",
        points: 7,
        aptitudes: ["curiosidad", "hambre de conocimiento"],

        skill: "sociabilidad",
        extra: {
          link1centro7: "https://view.genial.ly/650973ec21818c0010986137",

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
        instructions: "<p><b>Vive un acoso escolar</b></p> <p>Vive una situación de acoso escolar en primera persona. </p><p>Escanea el código QR de la pizarra y ponte las gafas de realidad virtual. </p><p>¿Preparado para ponerte en los zapatos de cada uno de los personajes?</p><br><p><b>¡Atención!</b></p><p>Una vez escaneado el código QR con el móvil, necesitas usar la aplicación de YouTube en tu teléfono móvil para poder visualizar correctamente el vídeo en modo VR. Recuerda poner la mayor resolución posible en los ajustes de la App.</p>",
        points: 2,
        aptitudes: ["perseverancia", "adaptabilidad"],
        extra: {
          link1insti2: "https://noupunt.com/test/pds/bajo-presion/tour/activities/instituto2/assets/insti2.html",
          link2insti2: "https://www.youtube.com/embed/vw-4TPiYmqE?si=8RmmJRlz-FQOGnC6",
          link3insti2: "https://noupunt.com/test/pds/bajo-presion/tour/activities/instituto2/assets/insti2ig.html",

        },
      },
      3: {
        video: "TDIr4yTrl1o",
        instructions: "<p><b>¿Quién es quién? </b></p> Después de ver la situación que se ha dado en clase, ¿sabrías decirme quién es quién? <p></p><p>En la siguiente actividad deberás adivinar desde dónde se vivió lo que pasó, es decir, qué roles o papeles tenía cada personaje en la situación.  </p><br><p><b>¡Atención!</b></p><p>Haz clic en los pósters para averiguar quién es quién...</p>",
        points: 3,
        aptitudes: ["paciencia", "disciplina"],
        extra: {
          link1insti3: "https://view.genial.ly/650971e96281ff00111c367a",
          link2insti3: "https://view.genial.ly/650971e621818c001098595a",
          link3insti3: "https://view.genial.ly/6509700750d05d001190c930",
        },
      },
      4: {
        video: "00TBnXamWQg",
        instructions: "<p><b>Esto no mola...</b></p> <p>Hay muchas cosas interesantes y divertidas en internet, pero a veces hay que ir con cuidado porque nuestro comportamiento podría dañar a los demás. </p><p>Aprende qué tipos de ciberacoso existen y qué puedes hacer para respetar a tus compañeros y a la vez tener más “netiqueta”. </p><br><p><b>¡Atención!</b></p><p>Aquí no hay diálogos, haz clic en el PLAY de los móviles para ver los vídeos y los enlaces informatiovs!   </p>",
        points: 6,
        aptitudes: ["creatividad", "individualidad"],
        extra: {
          link1insti4: "https://www.youtube.com/embed/ZHQ03fSn9J0?si=p-FQx50TlaUirtxb",
          link2insti4: "outside/sexting/index.html",
        },
      },
      5: {
        instructions: "<p><b>Atrapa al Bully</b></p> <p>En clase de tecnología habéis construido una nave espacial para viajar al espacio. Pero cuidado, ha habido un pequeño incidente que podría convertir vuestro viaje en una experiencia desagradable... </p><br><p><b>¡Atención!</b></p><p>Sigue la conversación y juega!</p>",
        points: 1,
        aptitudes: ["apertura", "auto-mejora"],
        extra: {
          link1insti5: "https://view.genial.ly/6502e599d687f3001153bba6",

        },
      },
      6: {
        instructions: "<p><b>¿Y tú qué harías? </b></p> <p>Reflexiona ahora sobre cómo actuarías tú ante el acoso escolar de un compañero o compañera. Intenta también responder estas preguntas:</p><p>¿Por qué es importante que las personas observadoras actúen ante el acoso? </p><p>¿Qué emociones se pueden sentir en el rol de “persona observadora”?</p><p>¿Puede que a veces sintamos presión por no decir nada? </p><p>¿Cómo crees que podemos vencer esa presión? </p>",
        points: 1,
        aptitudes: ["positividad", "auto-reconocimiento"],
        extra: {
          link1insti6: "https://forms.office.com/pages/responsepage.aspx?id=LFvYQ2IP1ESMd8itHKVUnjk-zYsXS0VKkniDWv_RcdhURTFIRVZPUVZPQkU1SEpRR0w5U0VKNUxESiQlQCN0PWcu",

        },
      },
      7: {
        instructions: "<p><b>¡Stop Bullying! </b></p> <p>Vamos a ver si nuestros compañeros nos dan ideas para ayudar a alguien que está sufriendo acoso</p><p>¡Dales turno de palabra!</p>",
        points: 10,
        aptitudes: ["descanso", "regeneración"],
        extra: {
          link1: "",

        },
      },
      8: {
        video: "igxxG6Qy-tI",
        instructions: "<p><b>¡Pasapalabra! </b></p> <p>Y para terminar... ¿cuántos conceptos relacionados con las violencias sociales conoces?</p>",
        points: 1,
        aptitudes: ["curiosidad", "hambre de conocimiento"],
        extra: {
          link1insti8: "https://view.genial.ly/65041b5d5a6dc5001103da7c",

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
        instructions: "<p><b>Que tu influencia seas tú</b></p> <p>Ponte en el lugar de Etna y experimenta en su piel tres formas distintas de responder a un compañero que le pide que haga algo que ella no quiere hacer.</p><p>Trasládate con las gafas de RV al parque donde Etna y sus nuevos amigos están ahora pasando el rato. </p><p>¿Te suenan estos estilos comunicativos? ¿Con qué tipo de reacción te identificas más?</p><br><p><b>¡Atención!</b></p><p>Una vez escaneado el código QR con el móvil, necesitas usar la aplicación de YouTube en tu teléfono móvil para poder visualizar correctamente el vídeo en modo VR. Recuerda poner la mayor resolución posible en los ajustes de la App.</p>",
        points: 1,
        aptitudes: ["love", "empathy"],
        extra: {
          link1parque1: "https://www.youtube.com/embed/HeNV2eB11KA?si=5W56TxaHTVZVd8sO",
        },
      },
      2: {
        instructions: "<p><b>¿Y tú qué crees?</b></p> <p>A veces, lo que pensamos no es la realidad objetiva. Ahora tienes la oportunidad de conocer el consumo de las personas jóvenes de 14-18 años. ¡Vamos a jugar!</p><p> Greta, a quien le gusta saber la verdad de las cosas, ha revisado los últimos informes de datos extraídos de varias encuestas a jóvenes. </p><p> ¡Ponte a prueba, a ver si adivinas qué dato es el correcto!</p>",
        points: 9,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "",

        },
      },
      3: {
        
        instructions: "<p><b>Bajo presión</b></p> <p>Quizás vosotras o alguien de vuestro entorno haya vivido una situación parecida a la que veréis a continuación. </p> <p>Prestad especial atención a cómo se ejerce la presión social sobre el protagonista.</p>",
        points: 2,
        aptitudes: ["love", "empathy"],
        extra: {
          link1parque3: "https://www.youtube.com/embed/7xjcDmdTjyI?si=n5rDJu-kfDTbWYWK",
          link2parque3: "https://forms.office.com/pages/responsepage.aspx?id=LFvYQ2IP1ESMd8itHKVUnjk-zYsXS0VKkniDWv_RcdhURDE3MFg5S1pUTFRJUE1DWjVUVU0xSkZFOSQlQCN0PWcu",
        },
      },
      4: {
        video: "DO3zz6a2MPM",
        instructions: "<p><b>Desmitifícate</b></p> <p>Ahora que ya tienes un poco más de información sobre las drogas, vamos a ver si te queda algún mito histórico por desmentir... </p><p>Hemos traído a alguien con una máquina del tiempo para que nos ayude a identificar algunos de ellos. </p><p>¡Saludad a Platón!</p>",
        points: 5,
        aptitudes: ["love", "empathy"],
        extra: {
          link1vomitar: "https://www.youtube.com/embed/v_95L-wlMHY?si=NFMunNPapZ-A7UGP",
          link2tabaco: "https://www.youtube.com/embed/qa7DikIYWak?si=il1_5ztEc5_pk_8X",
          link3bebidaenergetica: "https://www.youtube.com/embed/082vIKv2mvY?si=NOnvbZDh_NlGBoqS",
          link4esquisofrenia: "https://www.youtube.com/embed/pFKKQUExq9M?si=NV_NMZ66fN-h2L14",
          link5cannabis: "https://www.youtube.com/embed/mUmuN5F0qOo?si=9QVIvsSN5158tPyv",

        },
      },
      5: {
        video: "O93jmZv57Sw",
        instructions: "<p><b>Diversión como antídoto</b></p> <p>Navega por el parque de skate y descubre el experimento de “El parque de las ratas”. </p><p>¿Crees que el entorno que nos rodea influye a la hora de tomar decisiones sobre nuestra salud?</p>",
        points: 1,
        aptitudes: ["love", "empathy"],
        extra: {
          link1: "https://www.youtube.com/embed/A5k_TC5ZuzM?si=mS2AMbzuOwfENs4O",
          link2: "https://www.stuartmcmillen.com/es/comic/el-parque-de-las-ratas/#page-1",
          link3: "https://forms.office.com/e/2hNXV49ECP",
        },
      },
      6: {
        video: "RvqsSlcsLmg",
        instructions: "<p><b>Drogo-Quizz </b></p> <p>Y por último... ¿te has quedado con todo? Vamos a verlo...</p>",
        points: 1,
        aptitudes: ["love", "empathy"],
        skill: "criterio própio",
        extra: {
          link1: "https://view.genial.ly/650414dde19b6a0011a3973e",

        },
      },
    },
  },
};
