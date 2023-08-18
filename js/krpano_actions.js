// KRPANO
var krpano = null;

// embed the krpano viewer into the 'pano' div element
embedpano({
  swf: "null", // path to flash viewer (use null if no flash fallback will be requiered)
  id: "krpanoSWFObject",
  xml: "./tour/tour.xml",
  target: "pano",
  html5: "prefer",
  mobilescale: 1.0,
  passQueryParameters: true,
  bgcolor: "transparent",
  initvars: {
    test: gameOptions.test,
  },
  consolelog: true,
  onready: krpano_onready_callback,
});

function krpano_onready_callback(krpano_interface) {
  console.log("kp loaded");
  krpano = krpano_interface;

  pano.classList.add("maskpano");
}
///////////////////////////////////////////////////////////////////KRPANO ACTIONS TRADUCED
const tourLoadscene = (sceneName) => {
  krpano.call(`kp_load_scene(${sceneName})`);
};
