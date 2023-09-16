const closePopup = async (overlay, iframeContainer, options) => {
  // Executem l'acció onClose immediatament
  if (typeof options.onClose === "function") {
      options.onClose();
  }

  overlay.style.opacity = "0";
  iframeContainer.style.opacity = "0";

  try {
      await awaitStylecomplete(overlay, "opacity", "0");
      // ps.destroy();
      document.body.removeChild(overlay);
  } catch (error) {
      console.error("Error al tancar el popup:", error.message);
  }
};

const launchPopup = async (extraNode, width='80%', height='80%',  providedOptions = {}) => {
  const options = { ...popupDefaultOptions, ...providedOptions }; // Combinar opcions predeterminades amb les proporcionades

  const overlay = document.createElement("div");
  overlay.className = "iframeOverlay";
  if (options.overlayColor) {
    overlay.style.backgroundColor = options.overlayColor;
  }
  
  const iframeContainer = document.createElement("div");
  iframeContainer.className = "iframeContainer";
  iframeContainer.style.width = width;
  iframeContainer.style.height = height;

  const iframeLoader = document.createElement("div");
  iframeLoader.className = "iframeLoader";
  iframeContainer.appendChild(iframeLoader);

  const iframe = document.createElement("iframe");
  const URL =data[Game.place].panos[Game.panoIndex].extra[extraNode]
  iframe.src =URL;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.opacity = "0";
  iframe.style.transition = "opacity 0.5s";

  iframe.onload = function () {
    iframeLoader.style.display = "none";
    iframe.style.opacity = "1";
  };

  iframeContainer.appendChild(iframe);
  overlay.appendChild(iframeContainer);

  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.className = "iframeCloseButton";
  closeButton.addEventListener("click", () => closePopup(overlay, iframeContainer, options));
  iframeContainer.appendChild(closeButton);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closePopup(overlay, iframeContainer, options);
    }
  });

  document.body.appendChild(overlay);

  overlay.style.opacity = "1";
  await awaitStylecomplete(overlay, "opacity", "1");
  iframeContainer.style.opacity = "1";

}

const popupDefaultOptions={
  overlayColor: "rgba(0,0,0,0..7)",
  onClose: function () {
    console.log("popup tancat");
  },
}

// setTimeout(function () {
//   launchPopup('link1');
// }, 2000);
