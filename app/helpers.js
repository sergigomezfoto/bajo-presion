/**
 * ***************************************************************************************************************************
 *                                             GESTIÓ D'ERRORS
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció envolta una funció asíncrona amb gestió d'errors.
 * Si la funció asíncrona llançada llança una excepció, aquesta serà capturada i els detalls de l'error 
 * seran mostrats en la consola, evitant així que l'error no gestionat interrompi l'execució del programa.
 *
 * @param {Function} asyncFn - La funció asíncrona que volem envoltar amb gestió d'errors.
 * @returns {Function} - Retorna una nova funció que executa `asyncFn` i gestiona qualsevol error que pugui llançar.
 */
const withErrorHandling = (asyncFn) => {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      console.error("An error occurred:", error.message);
      console.error("Stack trace:", error.stack);
    }
  };
};
/**
 * ***************************************************************************************************************************
 *                                  INFORMACIÓ DEL DISPOSITIU DE L'USUARI
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció proporciona informació sobre el dispositiu i el navegador de l'usuari.
 * Determina si l'usuari està utilitzant un dispositiu mòbil, una tauleta, un escriptori o un iPhone.
 * També identifica quin navegador està utilitzant l'usuari.
 *
 * @returns {Object} - Retorna un objecte amb les propietats següents:
 * - `browser`: Una cadena que indica el nom del navegador (p. ex. 'chrome', 'firefox', etc.).
 * - `deviceType`: Una cadena que indica el tipus de dispositiu ('desktop', 'mobile', 'tablet' o 'iPhone').
 * - `isMobile`: Un booleà que indica si l'usuari està utilitzant un dispositiu mòbil.
 * - `isiPhone`: Un booleà que indica si l'usuari està utilitzant un iPhone.
 */
const getUserDeviceInfo = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android/.test(userAgent);
  const isiPhone = /iphone/.test(userAgent);

  let deviceType = "desktop";
  if (isMobile) {
    deviceType = "mobile";
    if (isiPhone) {
      deviceType = "iPhone";
    }
  } else if (window.innerWidth <= 768) {
    deviceType = "tablet";
  }

  const getBrowser = () => {
    if (userAgent.indexOf("edge") > -1) return "edge";
    else if (userAgent.indexOf("opr") > -1) return "opera";
    else if (userAgent.indexOf("chrome") > -1) return "chrome";
    else if (userAgent.indexOf("firefox") > -1) return "firefox";
    else if (userAgent.indexOf("safari") > -1) return "safari";
    else if (userAgent.indexOf("trident") > -1) return "ie";
    else return "unknown";
  };

  const browser = getBrowser();

  return {
    browser,
    deviceType,
    isMobile,
    isiPhone,
  };
};
/**
 * ***************************************************************************************************************************
 *                                    SELECCIÓ ALEATÒRIA D'ELEMENT D'ARRAY
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció retorna un element aleatori d'una matriu proporcionada.
 * Si la matriu està buida o no es proporciona, retorna 'null'.
 *
 * @param {Array} arr - La matriu des de la qual es vol obtenir un element aleatori.
 * @returns {any|null} - Retorna un element aleatori de la matriu o 'null' si la matriu està buida o no es proporciona.
 */

const getRandomElement = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
/**
 * ***************************************************************************************************************************
 *                                        BUCLE ASINCRÒNIC POSITIU
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció executa un bucle asincrònic que espera que es compleixi una condició determinada.
 * Es verificarà la condició cada 'time' mil·lisegons fins que es compleixi o fins que es superin
 * el nombre màxim d'intents ('maxAttempts'). Si es supera el nombre màxim d'intents, 
 * s'executarà la funció 'onMaxAttempts' i es resoldrà la promesa.
 *
 * @param {Function} condition - Una funció que retorna un booleà indicant si la condició es compleix.
 * @param {number} [time=300] - El temps en mil·lisegons entre cada intent de comprovar la condició.
 * @param {number|null} [maxAttempts=null] - El nombre màxim d'intents per comprovar la condició. Si és 'null', no hi ha límit.
 * @param {Function} [onMaxAttempts=() => {}] - Una funció a executar quan es superi el nombre màxim d'intents.
 * @returns {Promise<void>} - Una promesa que es resol quan es compleixi la condició o quan es superi el nombre màxim d'intents.
 */

const asyncLoopPositive = (condition, time = 300, maxAttempts = null, onMaxAttempts = () => {}) => {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checkCondition = () => {
      attempts++;

      // Logging the current attempt number
      if (Game.test) console.log(`bucleAsyncLoopPositive: ${attempts}`);
      if (maxAttempts !== null && attempts > maxAttempts) {
        onMaxAttempts();
        resolve();
        throw new Error("Max attempts reached");
      }

      try {
        if (condition()) {
          resolve();
        } else {
          setTimeout(checkCondition, time);
        }
      } catch (error) {
        console.error(error);
        resolve();
        //reject(new Error(`Error in condition function: ${error.message}.`));
      }
    };

    checkCondition();
  });
};
/**
 * ***************************************************************************************************************************
 *                      TRANSFORMACIÓ D'ATRIBUTS D'ESTIL CSS A JAVASCRIPT
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció converteix noms d'atributs d'estil CSS a la seva versió equivalent en JavaScript.
 * Específicament, converteix noms en camelCase a kebab-case. Per exemple, 'backgroundColor' es 
 * convertiria a 'background-color'.
 *
 * @param {string} attribute - El nom de l'atribut en camelCase que volem convertir.
 * @returns {string} - Retorna el nom de l'atribut en kebab-case.
 * @throws {Error} - Llança un error si es proporciona un tipus d'argument invàlid.
 */
const cssToJsAttributes = (attribute) => {
  if (typeof attribute !== "string") {
    throw new Error("Invalid attribute type. Expected a string.");
  }

  return attribute.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
/**
 * ***************************************************************************************************************************
 *                                               ESPERA DE COMPLECIÓ D'ESTIL
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció espera fins que un estil específic d'un element del DOM arribi a tenir 
 * un valor determinat. Utilitza una funció d'ajuda 'asyncLoopPositive' per verificar 
 * periòdicament si l'atribut d'estil ha arribat al valor desitjat.
 *
 * @param {HTMLElement} element - L'element del DOM en el qual estem esperant el canvi d'estil.
 * @param {string} attribute - L'atribut d'estil que estem esperant que canviï (p.ex. 'background-color').
 * @param {string} value - El valor desitjat de l'atribut d'estil.
 * @param {number} [time=null] - Un valor opcional que pot indicar el temps màxim d'espera o d'altres condicions relacionades amb 'asyncLoopPositive'.
 * @returns {Promise<boolean>} - Una promesa que es resol amb `true` quan l'atribut d'estil arriba al valor desitjat.
 * @throws {Error} - Llança un error si es proporcionen arguments invàlids o si es produeix un error durant la comprovació d'estil.
 */
const awaitStylecomplete = async (element, attribute, value, time = null) => {

  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("Invalid element provided.");
  }

  if (typeof attribute !== "string") {
    throw new Error("Invalid attribute type. Expected a string.");
  }

  await asyncLoopPositive(
    () => {
      try {
        return window.getComputedStyle(element).getPropertyValue(cssToJsAttributes(attribute)).trim() === value;
      } catch (error) {
        throw new Error(`Error checking style completion: ${error.message}`);
      }
    },
    10,
    time
  );

  return true;
};

const asyncLoopPositiveSafe = withErrorHandling(asyncLoopPositive);
const awaitStylecompleteSafe = withErrorHandling(awaitStylecomplete);

/**
 * ***************************************************************************************************************************
 *                               TRANSICIÓ D'OPACITAT AMB GESTIÓ DE DISPLAY
 * ***************************************************************************************************************************
 */

/**
 * Aquesta funció gestiona la transició d'opacitat d'un element del DOM especificat per ID.
 * Si l'opció 'display' no és "none", primer canvia l'estil 'display' de l'element i després 
 * la seva opacitat. Si l'opció 'display' és "none", primer canvia l'opacitat de l'element 
 * i després l'estil 'display' a "none".
 *
 * @param {string} id - L'ID de l'element del DOM que volem gestionar.
 * @param {string} opaci - El valor d'opacitat que volem assignar a l'element.
 * @param {string} [display="none"] - L'estil 'display' que volem assignar a l'element 
 *                                    després de la transició (per defecte és "none").
 * @returns {Promise} - Una promesa que es resol quan la transició ha finalitzat.
 */
const fadeInFadeOut = async (id, opaci, display = "none") => {
  if (display !== "none") {
    document.getElementById(id).style.display = display;
    await asyncLoopPositive((_) => getComputedStyle(document.getElementById(id)).display == display, 10);
    document.getElementById(id).style.opacity = opaci;
  } else {
    document.getElementById(id).style.opacity = opaci;
    await asyncLoopPositive((_) => getComputedStyle(document.getElementById(id)).opacity == opaci, 10);
    document.getElementById(id).style.display = display;
  }
};

/**
 * ***************************************************************************************************************************
 *                                                          ESPERA DE TEMPS
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció retorna una promesa que es resol després d'una quantitat especificada 
 * de mil·lisegons. Es pot utilitzar per simular una pausa o retard en l'execució del codi.
 *
 * @param {number} ms - La quantitat de mil·lisegons que volem que la promesa esperi abans de resoldre's.
 * @returns {Promise} - Una promesa que es resol després de l'interval de temps especificat.
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * ***************************************************************************************************************************
 *                                     ESPERA D'ESDEVENIMENT PER ACTIVAR-SE
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció retorna una promesa que es resol quan un determinat esdeveniment 
 * s'activa (trigger) en un element del DOM especificat. Una vegada l'esdeveniment 
 * s'activa, es pot executar una funció de callback si se li proporciona. Després d'activar-se 
 * l'esdeveniment una vegada, no es consideraran activacions addicionals.
 *
 * @param {HTMLElement} element - L'element del DOM en el qual estem esperant que l'esdeveniment es produeixi.
 * @param {string} eventName - El nom de l'esdeveniment que estem esperant.
 * @param {function} [callback] - Una funció opcional que s'executarà quan l'esdeveniment s'activi.
 * @returns {Promise} - Una promesa que es resol quan l'esdeveniment especificat s'activa en l'element.
 */
const waitForEventToTrigger = (element, eventName, callback) => {
  let triggered = false;
  return new Promise((resolve, reject) => {
    const eventHandler = (e) => {
      if (triggered) return;
      triggered = true;
      if (callback && typeof callback === "function") {
        callback(e);
      }
      resolve(e);
      element.removeEventListener(eventName, eventHandler);
    };

    element.addEventListener(eventName, eventHandler);
  });
};

/**
 * ***************************************************************************************************************************
 *                                    ESPERA DE FILL PER ATINGIR UN CERT NOMBRE
 * ***************************************************************************************************************************
 */

/**
 * Aquesta funció retorna una promesa que es resol quan un element del DOM arriba 
 * a tenir un nombre determinat de fills (o més). La funció utilitza MutationObserver 
 * per observar canvis en l'estructura de fills de l'element donat. Quan el nombre 
 * de fills de l'element és igual o superior al valor 'expectedCount', la promesa es resol.
 *
 * @param {HTMLElement} element - L'element del DOM que volem observar.
 * @param {number} expectedCount - El nombre de fills que esperem que l'element tingui.
 * @returns {Promise} - Una promesa que es resol quan l'element té almenys 'expectedCount' fills.
 */
const waitForChildren = (element, expectedCount) => {
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutationsList, observer) => {
      if (element.children.length >= expectedCount) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(element, { childList: true });
  });
};

/**
 * ***************************************************************************************************************************
 *                                             TOGGLE DE CLASSE EN ELEMENT
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció afegeix o elimina una classe d'un element depenent de l'acció especificada.
 * Només afegeix la classe si l'element no la té i només la treu si l'element la té.
 *
 * @param {HTMLElement} element - L'element al qual volem afegir o treure la classe.
 * @param {string} className - El nom de la classe que volem afegir o treure.
 * @param {string} action - L'acció a realitzar. Pot ser 'add' per afegir la classe o 'remove' per treure-la.
 */
const toggleClass = (element, className, action) => {
  if (action === "add" && !element.classList.contains(className)) {
    element.classList.add(className);
  } else if (action === "remove" && element.classList.contains(className)) {
    element.classList.remove(className);
  }
};
/**
 * ***************************************************************************************************************************
 *                 CÀLCUL DE DIMENSIONS PROPORCIONALS AMB AJUST A NOMBRE SENCER
 * ***************************************************************************************************************************
 */

/**
 * Aquesta funció calcula les dimensions proporcionals d'una imatge o objecte basant-se en el seu amplada i 
 * alçada originals, i una nova mida desitjada per l'altçada o l'amplada.
 * També proporciona les dimensions per l'amplada o alçada més propera a un nombre sencer, mantenint la 
 * proporció.
 *
 * @param {number} originalWidth - L'amplada original de l'imatge o objecte.
 * @param {number} originalHeight - L'alçada original de l'imatge o objecte.
 * @param {number} newSize - La nova mida que es vol per l'altçada o l'amplada.
 * @param {string} [dimension="height"] - Indica quina dimensió es vol canviar, pot ser 'height' o 'width'.
 * 
 * @returns {Object} - Retorna un objecte amb les dimensions proporcionals (proportional) i les dimensions 
 * més properes a un nombre sencer (nextWhole).
 */

function calculateDimensions(originalWidth, originalHeight, newSize, dimension = "height") {
  const aspectRatio = originalWidth / originalHeight;
  let proportionalWidth, proportionalHeight;

  if (dimension === "height") {
    proportionalHeight = newSize;
    proportionalWidth = aspectRatio * newSize;
  } else {
    proportionalWidth = newSize;
    proportionalHeight = newSize / aspectRatio;
  }

  let nextWholeHeight = dimension === "height" ? newSize - 1 : proportionalHeight - 1;
  let nextWholeWidth = aspectRatio * nextWholeHeight;

  while (!Number.isInteger(nextWholeWidth)) {
    nextWholeHeight--;
    nextWholeWidth = aspectRatio * nextWholeHeight;
  }

  console.log("Proportional dimensions:");
  console.log("Width:", proportionalWidth);
  console.log("Height:", proportionalHeight);

  console.log("\nNext whole number dimensions:");
  console.log("Width:", Math.round(nextWholeWidth));
  console.log("Height:", nextWholeHeight);

  return {
    proportional: {
      width: proportionalWidth,
      height: proportionalHeight,
    },
    nextWhole: {
      width: Math.round(nextWholeWidth),
      height: nextWholeHeight,
    },
  };
}
/**
 * ***************************************************************************************************************************
 *                                                   CÒPIA PROFUNDA D'UN OBJECTE
 * ***************************************************************************************************************************
 */
// Funció que realitza una còpia profunda d'un objecte. Convertint primerament
// l'objecte a una cadena de text JSON i després convertint aquesta cadena de
// text de nou a un objecte.
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
/**
 * ***************************************************************************************************************************
 *                                    CREACIÓ DE PROXY PROFUND AMB HANDLER
 * ***************************************************************************************************************************
 */
// Funció que crea un proxy profund de l'objecte donat. Recorre cada propietat
// de l'objecte i si la propietat és un objecte, la transforma en un proxy.
// Retorna un `Proxy` de l'objecte amb el handler proporcionat.
const createDeepProxy = (obj, handler) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = createDeepProxy(obj[key], handler);
    }
  }
  return new Proxy(obj, handler);
};
// Handler per a l'objecte `Proxy`. Conté mètodes per a la intercepció d'obtenció
// i establiment de propietats.
// - El mètode `get` executa una funció si comença amb "get ".
// - El mètode `set` mostra informació sobre el canvi i estableix el valor de la propietat.
const proxyHandler = {
  get(target, key) {
    if (typeof target[key] === "function" && key.startsWith("get ")) {
      return target[key]();
    }
    return target[key];
  },
  set(target, key, value) {
    const oldValue = target[key];

    if (typeof value === "object" && value !== null) {
      value = createDeepProxy(value, proxyHandler);
    }

    console.log(`----------------${target._obj}-----------------`);
    target[key] = value;
    console.log(`${key}:(${oldValue}) ===> ${value}`);
    console.log(target);
    console.log(`---------------------------------------`);

    return true;
  },
};
/**
 * ***************************************************************************************************************************
 *                                                 CLASSE D'OBJECTE OBSERVABLE
 * ***************************************************************************************************************************
 */
// Classe que permet crear valors observables. Estos valors poden tenir "callbacks"
// que es criden quan el valor canvia.
// - `addCallback(callback)` permet afegir un "callback".
// - `set(value)` estableix un nou valor i crida a tots els "callbacks".
// - `get()` retorna el valor actual de l'observable.

class ObservableValue {
  constructor(initialValue) {
    this._value = initialValue;
    this.callbacks = [];
  }


  addCallback(callback) {
    this.callbacks.push(callback);
  }


  set(value) {
    this._value = value;


    for (let callback of this.callbacks) {
      callback(value);
    }
  }

  get() {
    return this._value;
  }
}


/**
 * ***************************************************************************************************************************
 *                                              DETECCIÓ DEL PRIMER CLIC
 * ***************************************************************************************************************************
 */
/**
 * Aquesta lògica s'encarrega de detectar el primer clic fet per l'usuari en el document. 
 * Després de detectar aquest primer clic, elimina l'esdeveniment d'escolta per assegurar-se 
 * que el missatge "Primer Click." només s'imprimeix una vegada i actualitza la variable 
 * `isFirstClick` a `false` per indicar que ja s'ha fet el primer clic.
 */
let isFirstClick = true;
const handleFirstClick=(event)=> {
  if (isFirstClick) {
    console.log("Primer Click.");
    document.removeEventListener("click", handleFirstClick);
    isFirstClick = false;
  }
}
document.addEventListener("click", handleFirstClick);
/**
 * ***************************************************************************************************************************
 *                                    OBTENCIÓ DE LA DATA ACTUAL EN ESPANYOL
 * ***************************************************************************************************************************
 */

/**
 * Aquesta funció retorna la data actual formatada en l'estil espanyol.
 * Es fa ús de l'objecte `Intl.DateTimeFormat` per formatar la data amb l'any, 
 * el mes i el dia en llenguatge natural. Finalment, es retorna la data amb 
 * la primera lletra en majúscules.
 *
 * @returns {string} - Una cadena de text que representa la data actual en format espanyol.
 */
const getCurrentSpanishDate = () => {
  const currentDate = new Date();

  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };

  const formatter = new Intl.DateTimeFormat('es-ES', options);
  const formattedDate = formatter.format(currentDate);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); 
};
/**
 * ***************************************************************************************************************************
 *                                                 OBTENCIÓ DE L'HORA ACTUAL HH:mm
 * ***************************************************************************************************************************
 */
/**
 * Aquesta funció retorna l'hora actual en format HH:mm.
 * Es fa ús de l'objecte `Date` per obtenir les hores i els minuts actuals.
 * Les hores i els minuts s'ajusten per assegurar-se que sempre tenen dos dígits
 * fent servir la funció `padStart`.
 *
 * @returns {string} - Una cadena de text que representa l'hora actual en format HH:mm.
 */
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
