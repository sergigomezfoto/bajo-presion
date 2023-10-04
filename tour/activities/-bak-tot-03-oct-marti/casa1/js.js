/**
 * ***************************************************************************************************************************
 *                                        NETEJA TAGS HTML
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció esborra tots els tags HTML d'una cadena excepte <br>. Transforma <br> o <br/> en salts de línia.
 *
 * @param {string} text - El text amb tags HTML per netejar.
 * @returns {string} - El text netejat.
 */
krpano.actions.netejaTagsHtml = (text) => {
  // Transforma <br> o <br/> en salts de línia
  let textSenseTags = text.replace(/<br\s*\/?>/gi, "\n");

  // Elimina tots els tags HTML
  textSenseTags = textSenseTags.replace(/<\/?[^>]+(>|$)/g, "");

  return textSenseTags;
};

/**
 * ***************************************************************************************************************************
 *                                        CREA DIV AMB TRES COLUMNES
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció crea un div posicionat al centre amb position absolute. Aquest div conté un títol predefinit
 * alineat horitzontalment a dalt, i tres columnes alineades horitzontalment. Cada columna té un títol predefinit
 * i un contingut que ve donat per un dels 3 arguments proporcionats.
 *
 * @param {string} content1 - Contingut per la primera columna.
 * @param {string} content2 - Contingut per la segona columna.
 * @param {string} content3 - Contingut per la tercera columna.
 * @param {string} action - L'acció a realitzar després de capturar la imatge ('save', 'whatsapp', 'email').
 * @returns {void}
 */
krpano.actions.creaDivAmbTresColumnes = (content1, content2, content3, action) => {
  const div = document.createElement("div");
  div.style.border = "10px solid #A67C52"; // color marró pàlid
  div.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)"; // ombra més suau
  div.style.borderImage = "repeating-linear-gradient(45deg, #A67C52, #A67C52 5px, #BA8F70 5px, #BA8F70 10px)";
  div.style.borderImageSlice = "1";

  div.style.position = "absolute";
  div.style.top = "-10000px"; // Mou el div fora de la pantalla
  div.style.left = "-10000px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.fontFamily = "chalk2"; // Estil de font
  div.style.backgroundColor = "#009b7d"; // Color de fons verd pissarra
  div.style.padding = "10px"; // Padding afegit al div

  const titolPrincipal = document.createElement("h1");
  titolPrincipal.innerText = `Cualidades de ${Game.user} que...`;
  div.appendChild(titolPrincipal);

  const containerColumnes = document.createElement("div");
  containerColumnes.style.display = "flex";

  const ampladaMaximaColumna = 700 / 3; // Amplada màxima per a cada columna

  const creaColumna = (titol, contingut, fontColor) => {
    const columna = document.createElement("div");
    columna.style.width = `${ampladaMaximaColumna}px`; // Amplada fixa per a cada columna
    columna.style.margin = "0 10px";
    columna.style.padding = "10px"; // Padding afegit als textos de les columnes
    columna.style.overflow = "auto"; // Evita que els títols es trenquin i mostra el text en línia següent si no hi càpiga
    columna.style.backgroundColor = "transparent"; // Fons transparent
    columna.style.color = fontColor; // Color de font personalitzat

    const titolColumna = document.createElement("h2");
    titolColumna.innerText = titol;
    columna.appendChild(titolColumna);

    const contingutColumna = document.createElement("p");
    contingutColumna.innerText = contingut;
    columna.appendChild(contingutColumna);

    return columna;
  };

  containerColumnes.appendChild(creaColumna("Le gustan", krpano.actions.netejaTagsHtml(content1), "#ccfb89")); // Color de font per la columna 1
  containerColumnes.appendChild(creaColumna("No le gustan", krpano.actions.netejaTagsHtml(content2), "#ffb8b8")); // Color de font per la columna 2
  containerColumnes.appendChild(creaColumna("No le importan", krpano.actions.netejaTagsHtml(content3), "#f5f9ad")); // Color de font per la columna 3

  div.appendChild(containerColumnes);

  document.body.appendChild(div);

  try {
    html2canvas(div, {
      scrollX: 0,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      try {
        if (action === "save") {
          const a = document.createElement("a");
          a.href = canvas.toDataURL("image/png");
          a.download = "imatge.png";
          a.click();
        } else {
          const imgurAPI = "https://api.imgur.com/3/image";

          fetch(imgurAPI, {
            method: "POST",
            headers: {
              Authorization: "Client-ID 897a611eb3cca09",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: canvas.toDataURL("image/png").split(",")[1],
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              const imageURL = data.data.link;
              console.log("URL de la imatge pujada:", imageURL);

              if (action === "whatsapp") {
                const whatsappURL = `https://wa.me/?text=${encodeURIComponent(imageURL)}`;
                window.open(whatsappURL, "_blank");
              } else if (action === "email") {
                const emailSubject = "Imatge des de web";
                const emailBody = "Mira aquesta imatge: " + imageURL;
                const emailURL = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                window.open(emailURL);
              }
            })
            .catch((error) => {
              console.error("Error en pujar la imatge:", error);
            });
        }
      } catch (err) {
        console.error("Error processant el canvas:", err);
      }
    });
  } catch (err) {
    console.error("Error creant el canvas:", err);
  }
  // Eliminar el div després de guardar o realitzar l'acció
  document.body.removeChild(div);
};

console.log("hoola");
// creaDivAmbTresColumnes(netejaTagsHtml(args[1]), netejaTagsHtml(args[2]), netejaTagsHtml(args[3]), args[4]);
