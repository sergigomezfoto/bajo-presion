const planetAnimation = (options) => {
    if (!options || !options.containerId || !options.labelsClass || !options.littleplanetId || !options.initialAngles || !options.initialRadius || !options.breakpoint || !options.reductionFactor || !options.speed ) {
        console.log("Error: No s'han definit totes les opcions necessàries. Son: containerId, labelsClass, littleplanetId, initialAngles, initialRadius, breakpoint, reductionFactor, speed");
    }
  
    const labels = Array.from(document.getElementsByClassName(options.labelsClass));
    const littleplanet = document.getElementById(options.littleplanetId);
    const container = document.getElementById(options.containerId);
    const littleplanetSize = littleplanet.offsetWidth;
    const littleplanetTop = parseInt(window.getComputedStyle(littleplanet).getPropertyValue("top"), 10);
    const littleplanetRight = parseInt(window.getComputedStyle(littleplanet).getPropertyValue("right"), 10);
    if (!littleplanetTop || !littleplanetRight) {
        console.log("Error Sergi: No s'ha pogut obtenir la posició del littleplanet. Sobretot!!!! assegirar que littleplanet  'top' i 'right' en píxels.");
    }
  
    const speed = options.speed || 0.025;
    let startTime;
  
    const initialAngles = options.initialAngles;
    let initialRadius = options.initialRadius;
    if (initialAngles.length !== labels.length) {
        console.log("Error: El número d'angles inicials no coincideix amb el número d'etiquetes.");
    }
    let halfRadius = initialRadius.map((radius) => radius * options.reductionFactor );
    let currentRadius;
  
    const updateLabelsPosition = (timestamp) => {
        if (!startTime) {
            startTime = timestamp;
        }
        const elapsed = timestamp - startTime;
        const angle = (speed * elapsed) / 1000;
        littleplanet.style.transform = `rotate(${angle * -1}rad)`;
        const center = {
            x: container.offsetWidth / 2,
            y: container.offsetHeight / 2,
        };
  
        labels.forEach((label, index) => {
            const labelWidth = label.offsetWidth;
            const x = center.x + currentRadius[index] * Math.sin(initialAngles[index] + angle);
            const y = center.y + currentRadius[index] * Math.cos(initialAngles[index] + angle);
            label.style.transform = `translate3d(${x - labelWidth / 2}px, ${y}px, 0)`;
        });
  
        requestAnimationFrame(updateLabelsPosition);
    };
  
    requestAnimationFrame(updateLabelsPosition);
  
    const updateRadius = () => {
        if (window.innerWidth < options.breakpoint) {
            currentRadius = halfRadius;
            const reductionFactor = options.reductionFactor;
            const littleplanetWidth = littleplanetSize * reductionFactor;
            const littleplanetHeight = littleplanetSize * reductionFactor;
            const topOffset = littleplanetTop * reductionFactor;
            const rightOffset = littleplanetRight * reductionFactor;
            littleplanet.style.width = `${littleplanetWidth}px`;
            littleplanet.style.height = `${littleplanetHeight}px`;
            littleplanet.style.top = `${topOffset}px`;
            littleplanet.style.right = `${rightOffset}px`;
        } else {
            currentRadius = initialRadius;
            littleplanet.style.width = "";
            littleplanet.style.height = "";
            littleplanet.style.top = "";
            littleplanet.style.right = "";
        }
    };
  
    let isSmallScreen;
    const checkScreenSize = () => {
        const wasSmallScreen = isSmallScreen;
        isSmallScreen = window.innerWidth < options.breakpoint;
        if (isSmallScreen !== wasSmallScreen) {
            updateRadius();
        }
    };
  
    if (options.breakpoint !== null) {
        window.addEventListener("resize", checkScreenSize);
    }
  
    updateRadius();
};
  
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