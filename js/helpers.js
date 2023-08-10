//errohandling

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






const asyncLoopPositive = (condition, time = 300, maxAttempts = 1000) => {

  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checkCondition = () => {
      attempts++;
      if (attempts > maxAttempts) {
        reject(new Error(`Max attempts reached `));
        return;
      }

      try {
        if (condition()) {
          resolve();
        } else {
          setTimeout(checkCondition, time);
        }
      } catch (error) {
        reject(new Error(`Error in condition function: ${error.message}.}`));
      }
    };
    
    checkCondition();
  });
};
const cssToJsAttributes = (attribute) => {
  if (typeof attribute !== 'string') {
    throw new Error('Invalid attribute type. Expected a string.');
  }

  return attribute.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

const awaitStylecomplete = async (element, attribute, value) => {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error('Invalid element provided.');
  }
  
  if (typeof attribute !== 'string') {
    throw new Error('Invalid attribute type. Expected a string.');
  }

  await asyncLoopPositive(() => {
    try {
      return window.getComputedStyle(element).getPropertyValue(cssToJsAttributes(attribute)).trim() === value;
    } catch (error) {
      throw new Error(`Error checking style completion: ${error.message}`);
    }
  }, 10);
  
  return true;
};

const asyncLoopPositiveSafe = withErrorHandling(asyncLoopPositive);
const awaitStylecompleteSafe = withErrorHandling(awaitStylecomplete);

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
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForVariable = (variableName) => {
  return new Promise((resolve) => {
    const checkExist = setInterval(() => {
      if (typeof window[variableName] !== "undefined") {
        clearInterval(checkExist);
        resolve(window[variableName]);
      }
    }, 100);
  });
};
const waitForEventToTrigger=(element, eventName, callback)=> {
  let triggered = false;
  return new Promise((resolve, reject) => {
    const eventHandler = (e) => {
      if (triggered) return;
      triggered = true;
      if (callback && typeof callback === 'function') {
        callback(e);
      }
      resolve(e);
      element.removeEventListener(eventName, eventHandler);
    };
    element.addEventListener(eventName, eventHandler);
  });
}

//<body>
//<div class="overlay-flash"></div>
//.
//.
//.
const overlayFlash = document.querySelector(".overlay-flash");
const flashLight = (fun) => {
  overlayFlash.classList.add("show");
  setTimeout(() => {
    fun();
    overlayFlash.classList.remove("show");
  }, 300);
};



///////////////////////////////////////////////////////////////////////PROXY PER DEBUG NO UTILITZAT
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const createDeepProxy = (obj, handler) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = createDeepProxy(obj[key], handler);
    }
  }
  return new Proxy(obj, handler);
};

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
// const clonedGame = deepClone(Game);
// const prxGame = createDeepProxy(clonedGame, proxyHandler);

/////////////////////////////////////////////////////////////////////////////////INTERVAL PER VARIABLES


class ObservableValue {
  constructor(initialValue) {
    this._value = initialValue;
    this.callbacks = [];
  }

  // Añade una función callback que se llamará cuando el valor cambie
  addCallback(callback) {
    this.callbacks.push(callback);
  }

  // Cambia el valor y llama a los callbacks si cumplen con ciertas condiciones
  set(value) {
    this._value = value;

    // Llama a cada callback
    for (let callback of this.callbacks) {
      callback(value);
    }
  }

  get() {
    return this._value;
  }
}

// const observable = new ObservableValue(0);

// observable.addCallback((value) => {
//   if (value > 8 && value < 10) {
//     console.log('El valor es mayor que 8 y menor que 10:', value);
//   }
// });

// observable.addCallback((value) => {
//   if (value === true) {
//     console.log('El valor es verdadero.');
//   } else if (value === false) {
//     console.log('El valor es falso.');
//   }
// });

// observable.set(9);   // Esto imprimirá "El valor es mayor que 8 y menor que 10: 9"
// observable.set(true); // Esto imprimirá "El valor es verdadero."




setInterval(() => {
  // console.log(window.innerWidth)
  //   console.log(window.getComputedStyle(document.getElementById("intro_gradient_form")).getPropertyValue( cssToJsAttributes('left')).trim());
}, 200);

//////////////////////////////////////////////////////////////////////////DETECT FIRSTCLICK

var isFirstClick = true;
function handleFirstClick(event) {
  if (isFirstClick) {
    console.log("Este es el primer clic en la pantalla.");
    document.removeEventListener("click", handleFirstClick);
    isFirstClick = false;
  }
}
document.addEventListener("click", handleFirstClick);
