//////////////////////////////////////////////////loaded obj informator
class S_LoadControl {
  elements = [];
  imgElements = [];
  svgElements = [];
  krpElements = [];
  fontElements = [];
  historic = [];
  add = (el, type) => {
    this.elements.push(el);
    switch (type) {
      case "img":
        this.imgElements.push(el);
        break;
      case "svg":
        this.svgElements.push(el);
        break;
      case "krp":
        this.krpElements.push(el);
        break;
      case "font":
        this.fontElements.push(el);
        break;
      default:
        break;
    }
  };
  log = (what = "all") => {
    switch (what) {
      case "all":
        console.log(this.elements.length, " elements charged");
        console.log(this.elements);
        break;
      case "img":
        console.log(this.imgElements.length, " img charged");
        console.log(this.imgElements);
        break;
      case "svg":
        console.log(this.svgElements.length, " svg charged");
        console.log(this.svgElements);
        break;
      case "krp":
        console.log(this.krpElements.length, " krpano charged");
        console.log(this.krpElements);
        break;
      case "font":
        console.log(this.fontElements.length, " fonts charged");
        console.log(this.fontElements);
        break;
      case "historic":
        console.log(this.historic.length, " elements in historic");
        console.log(this.historic);
        break;

      default:
        break;
    }
  };

  get count() {
    return this.elements.length;
  }
  get imgCount() {
    return this.imgElements.length;
  }
  get svgCount() {
    return this.svgElements.length;
  }
  get krpCount() {
    return this.krpElements.length;
  }
  get fontCount() {
    return this.fontElements.length;
  }
  get array() {
    return this.elements;
  }
  get imgArray() {
    return this.imgElements;
  }
  get svgArray() {
    return this.svgElements;
  }
  get fontArray() {
    return this.fontElements;
  }
  get krpArray() {
    return this.krpElements;
  }
  get historic() {
    return this.historic;
  }
  resset = () => {
    this.elements = [];
    this.imgElements = [];
    this.svgElements = [];
    this.krpElements = [];
    this.fontElements = [];
    this.historic.push(this.elements);
  };
  ///////////////////////////////////
  registerSvg = (svg) => {
    // const isFirefox = typeof InstallTrigger !== 'undefined';
    const isFirefox = /Firefox/i.test(navigator.userAgent);
    const isIE = !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;
    const loadEvent = isFirefox ? "SVGLoad" : isIE || isEdge ? "readystatechange" : "load";
    svg.addEventListener(loadEvent, () => {
      this.add(`svg|${svg.id}`, "svg");
      console.log("SVG loaded.");
    });
  };
  registerKrpano = (name) => {
    this.add(`kp|${name}`, "krp");
  };
  registerImage = async (image) => {
    let img = new Image();
    img.src = image;
    img.decode().then(this.add(`image|${image}`, "img"));
  };
  //////////////////////////////////////////////////////////////////fonts al html
  registerFonts = async (font) => {
    document.fonts.load(font, "giItT1WQy@!-/#").then(() => {
      this.add(`font|${font}`, "font");
    });
  };
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////loadeR control
const generalLoadControl = new S_LoadControl();
console.log();
///////////////////////////////////////////////////////////////////LittlePlanet ready
const homeLoader = document.getElementById("loader");
const svgArr = [
  // document.getElementById("start-svg"),
  // document.getElementById("time-message-wrapper-svg")
];
const imgArr = [
  "../../assets/img/logo_pds.png",
  "../../assets/img/logo_noupunt.png",
  "../../assets/img/logo_ministerio.png",
  "../../assets/img/lp_intro_big.png",
  "../../assets/img/lp_intro.png",
  "../../assets/img/noise.jpg",
  "../../assets/img/shadow_lp_intro.png",
  "../../assets/img/shine_lp_intro.png",
  "../../assets/img/user_intro.png",
  
];
const fontArr = ["16pt untitled_sansmedium", "16pt untitled_sansregular", "16pt bw_black", "16pt bw_regular"];
const krpanoDatasLoaded = true;

(async () => {
  if (test) {
    homeLoader.style.display = "none";
    generalIntro();
    return;
  }
  for (const svg of svgArr) {
    generalLoadControl.registerSvg(svg);
  }
  for (const img of imgArr) {
    await generalLoadControl.registerImage(img);
  }
  for (const font of fontArr) {
    await generalLoadControl.registerFonts(font);
  }
  await asyncLoopPositive((_) => generalLoadControl.count === svgArr.length + imgArr.length + fontArr.length && krpanoDatasLoaded); // +1=krpano little planet
  homeLoader.style.opacity = "0";
  console.log("he arribat!!", generalLoadControl.count);
  generalLoadControl.log();
  await asyncLoopPositive((_) => getComputedStyle(homeLoader).opacity === "0");
  homeLoader.style.display = "none";
  generalIntro();
})();
