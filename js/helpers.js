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

const asyncLoopPositive = (condition, time = 300) => {
  const whatchIf = (resolve) => {
    if (condition()) {
      resolve();
    } else
      setTimeout((_) => {
        whatchIf(resolve);
      }, time);
  };
  return new Promise(whatchIf);
};

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
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

