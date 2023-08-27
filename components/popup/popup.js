const closePopup = async (overlay, iframeContainer, options) => {
  overlay.style.opacity = "0";
  iframeContainer.style.opacity = "0";

  try {
    await awaitStylecomplete(overlay, "opacity", "0");
    // ps.destroy();
    document.body.removeChild(overlay);
    if (typeof options.onClose === "function") {
      options.onClose();
    }
  } catch (error) {
    console.error("Error al cerrar el popup:", error.message);
  }
};

const launchPopup = async (url, width, height, options = {}) => {
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

  iframe.src = url;
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
  closeButton.innerText = "Cerrar";
  closeButton.className = "iframeCloseButton";
  closeButton.addEventListener("click", () => closePopup(overlay, iframeContainer, options));
  overlay.appendChild(closeButton);

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
// setTimeout(function () {
//   launchPopup("https://noupunt.com", "80%", "80%", {
//     overlayColor: "rgba(255,0,0,0.7)",
//     onClose: function () {
//       console.log("popup tancat");
//     },
//   });
// }, 2000);