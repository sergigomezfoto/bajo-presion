class PlanetAnimation {
  constructor(options) {
    this.labels = Array.from(document.getElementsByClassName(options.labelsClass));
    this.littleplanet = document.getElementById(options.littleplanetId);
    this.container = document.getElementById(options.containerId);
    this.speed = options.speed || 0.025;
    this.initialAngles = options.initialAngles;
    this.initialRadius = options.initialRadius;
    this.breakpointWidth = options.breakpointWidth;
    this.breakpointHeight = options.breakpointHeight;
    this.reductionFactor = options.reductionFactor;
    this.isPaused = false;
    this.isSmallScreen = window.innerWidth < this.breakpointWidth || window.innerHeight < this.breakpointHeight;

    if (this.initialAngles.length !== this.labels.length) {
      console.log("Error: El número d'angles inicials no coincideix amb el número d'etiquetes.");
    }
    this.currentRadius = this.initialRadius.map((radius) => radius * this.reductionFactor);
    this.updateRadius();
    this.requestUpdate();

    if (options.breakpoint !== null) {
      window.addEventListener("resize", this.checkScreenSize.bind(this));
    }
  }

  updateLabelsPosition(timestamp) {
    if (this.isPaused) return;

    if (!this.startTime) {
      this.startTime = timestamp;
    }

    const elapsed = timestamp - this.startTime;
    const angle = (this.speed * elapsed) / 1000;
    this.littleplanet.style.transform = `rotate(${angle * -1}rad)`;

    const center = {
      x: this.container.offsetWidth / 2,
      y: this.container.offsetHeight / 2,
    };

    this.labels.forEach((label, index) => {
      const labelWidth = label.offsetWidth;
      const x = center.x + this.currentRadius[index] * Math.sin(this.initialAngles[index] + angle);
      const y = center.y + this.currentRadius[index] * Math.cos(this.initialAngles[index] + angle);
      label.style.transform = `translate3d(${x - labelWidth / 2}px, ${y}px, 0)`;
    });

    requestAnimationFrame(this.updateLabelsPosition.bind(this));
  }

  updateRadius() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const isSmallScreenNow = currentWidth < this.breakpointWidth || currentHeight < this.breakpointHeight;

    if (isSmallScreenNow) {
      this.currentRadius = this.initialRadius.map((radius) => radius * this.reductionFactor);
      this.littleplanet.style.width = "";
      this.littleplanet.style.height = "";

      const computedStyle = getComputedStyle(this.littleplanet);
      const littleplanetWidth = parseFloat(computedStyle.width) * this.reductionFactor;
      const littleplanetHeight = parseFloat(computedStyle.height) * this.reductionFactor;
      this.littleplanet.style.width = `${littleplanetWidth}px`;
      this.littleplanet.style.height = `${littleplanetHeight}px`;
    } else {
      this.currentRadius = this.initialRadius;
      this.littleplanet.style.width = "";
      this.littleplanet.style.height = "";
    }
  }

  checkScreenSize() {
    const wasSmallScreen = this.isSmallScreen;
    this.isSmallScreen = window.innerWidth < this.breakpointWidth || window.innerHeight < this.breakpointHeight;

    if (this.isSmallScreen !== wasSmallScreen) {
      this.updateRadius();
    }
  }

  pause() {
    this.isPaused = true;
    this.pauseTime = performance.now(); // Record the pause time.
  }

  resume() {
    this.isPaused = false;
    if (this.pauseTime) {
      const resumeTime = performance.now();
      const pauseDuration = resumeTime - this.pauseTime;
      this.startTime += pauseDuration; // Adjust the startTime.
      this.pauseTime = null; // Reset the pauseTime.
    }
    this.requestUpdate();
  }

  requestUpdate() {
    requestAnimationFrame(this.updateLabelsPosition.bind(this));
  }
}
const rotateOptions = {
  containerId: "home-planet-wrapper",
  labelsClass: "hlp-label",
  littleplanetId: "home-littleplanet",
  speed: 0.05,
  initialAngles: [5.6, 4, 2.9, 1.7, 0.7],
  initialRadius: [330, 330, 340, 280, 260],
  breakpointWidth: 1024,
  breakpointHeight: 800,
  reductionFactor: 0.65,
};

// const planetAnim = new PlanetAnimation(rotateOptions);

// cuan el dom está carregat,poso els noms dels llocs per ordre
const planetAnimation = new PlanetAnimation(rotateOptions);
planetAnimation.pause();
///////////////////////////////////////LABELS

const labels = document.querySelectorAll(".hlp-label");

labels.forEach((label,index) => {
  let dataValue = Game.state.places[index];
  label.dataset.value = dataValue;
  label.innerText = data[dataValue].title;
  label.addEventListener("click", function () {
   
    enterPlace(dataValue);
  });
  if (!isTouchDevice) {
    label.addEventListener("mouseenter", function () {
      planetAnimation.pause();
    });

    label.addEventListener("mouseleave", function () {
      planetAnimation.resume();
    });
  }
});

// let isPaused = false;
// let animationControl = null;

// const planetAnimation = (options) => {
//   if (
//     !options ||
//     !options.containerId ||
//     !options.labelsClass ||
//     !options.littleplanetId ||
//     !options.initialAngles ||
//     !options.initialRadius ||
//     !options.breakpointWidth ||
//     !options.breakpointHeight ||
//     !options.reductionFactor ||
//     !options.speed
//   ) {
//     console.log(
//       "Error: No s'han definit totes les opcions necessàries. Son: containerId, labelsClass, littleplanetId, initialAngles, initialRadius, breakpoint, reductionFactor, speed"
//     );
//   }

//   const labels = Array.from(document.getElementsByClassName(options.labelsClass));
//   const littleplanet = document.getElementById(options.littleplanetId);
//   console.log(littleplanet);
//   const container = document.getElementById(options.containerId);
//   const littleplanetSize = littleplanet.offsetWidth;

//   const littleplanetTop = parseInt(window.getComputedStyle(littleplanet).getPropertyValue("top"), 10);
//   console.log(littleplanetTop);
//   const littleplanetRight = parseInt(window.getComputedStyle(littleplanet).getPropertyValue("right"), 10);
//   console.log(littleplanetRight);
//   if (!littleplanetTop || !littleplanetRight) {
//     console.log("Error Sergi: No s'ha pogut obtenir la posició del littleplanet. Sobretot!!!! assegurar que littleplanet  'top' i 'right' en píxels.");
//   }

//   const speed = options.speed || 0.025;
//   let startTime;

//   const initialAngles = options.initialAngles;
//   let initialRadius = options.initialRadius;
//   if (initialAngles.length !== labels.length) {
//     console.log("Error: El número d'angles inicials no coincideix amb el número d'etiquetes.");
//   }
//   let halfRadius = initialRadius.map((radius) => radius * options.reductionFactor);
//   let currentRadius;

//   const updateLabelsPosition = (timestamp) => {
//     if (isPaused) {
//       return;
//     }
//     if (!startTime) {
//       startTime = timestamp;
//     }
//     const elapsed = timestamp - startTime;
//     const angle = (speed * elapsed) / 1000;
//     littleplanet.style.transform = `rotate(${angle * -1}rad)`;
//     const center = {
//       x: container.offsetWidth / 2,
//       y: container.offsetHeight / 2,
//     };

//     labels.forEach((label, index) => {
//       const labelWidth = label.offsetWidth;
//       const x = center.x + currentRadius[index] * Math.sin(initialAngles[index] + angle);
//       const y = center.y + currentRadius[index] * Math.cos(initialAngles[index] + angle);
//       label.style.transform = `translate3d(${x - labelWidth / 2}px, ${y}px, 0)`;
//     });

//     requestAnimationFrame(updateLabelsPosition);
//   };

//   requestAnimationFrame(updateLabelsPosition);

//   const updateRadius = () => {
//     const currentWidth = window.innerWidth;
//     const currentHeight = window.innerHeight;

//     if (currentWidth < options.breakpointWidth || currentHeight < options.breakpointHeight) {
//       currentRadius = halfRadius;
//       const reductionFactor = options.reductionFactor;
//       const littleplanetWidth = Math.max(littleplanetSize * reductionFactor, 1); // Ensure minimum width
//       const littleplanetHeight = Math.max(littleplanetSize * reductionFactor, 1); // Ensure minimum height

//       const topOffset = littleplanetTop * reductionFactor;
//       const rightOffset = littleplanetRight * reductionFactor;

//       // Log the values to debug
//       console.log(
//         `Viewport Width: ${currentWidth}, Viewport Height: ${currentHeight}, LittlePlanet Width: ${littleplanetWidth}, LittlePlanet Height: ${littleplanetHeight}, Top Offset: ${topOffset}, Right Offset: ${rightOffset}`
//       );

//       littleplanet.style.width = `${littleplanetWidth}px`;
//       littleplanet.style.height = `${littleplanetHeight}px`;
//       littleplanet.style.top = `${topOffset}px`;
//       littleplanet.style.right = `${rightOffset}px`;
//     } else {
//       currentRadius = initialRadius;
//       littleplanet.style.width = "";
//       littleplanet.style.height = "";
//       littleplanet.style.top = "";
//       littleplanet.style.right = "";
//     }
//   };

//   let isSmallScreen;
//   const checkScreenSize = () => {
//     const wasSmallScreen = isSmallScreen;
//     isSmallScreen = window.innerWidth < options.breakpointWidth || window.innerHeight < options.breakpointHeight;
//     if (isSmallScreen !== wasSmallScreen) {
//       updateRadius();
//     }
//   };

//   if (options.breakpoint !== null) {
//     window.addEventListener("resize", checkScreenSize);
//   }

//   updateRadius();
//   const pause = () => {
//     isPaused = true;
//   };

//   const resume = () => {
//     isPaused = false;
//     requestAnimationFrame(updateLabelsPosition);
//   };
//   homeLittlePlanetanimationControl = {
//     pause,
//     resume
//   };

//   return homeLittlePlanetanimationControl;
// };

// const rotateOptions = {
//   containerId: "home-planet-wrapper",
//   labelsClass: "hlp-label",
//   littleplanetId: "home-littleplanet",
//   speed: 0.1,
//   initialAngles: [5.6, 4, 2.9, 1.7, 0.7],
//   initialRadius: [330, 330, 340, 280, 260],
//   breakpointWidth: 1024,
//   breakpointHeight: 800,
//   reductionFactor: 0.65,
// };

// document.addEventListener("DOMContentLoaded", function () {

// });

// const options = {
//     containerId:"planet-wrapper",
//     labelsClass: "label",
//     littleplanetId: "littleplanet",
//     speed: 0.05,
//     initialAngles: [0, 1.26, 2.51, 3.77, 5.03],
//     initialRadius: [350, 400, 400, 400, 300],
//     breakpoint: 1200,
//     reductionFactor: 0.75,
// };

// planetAnimation(options);
