const generateNoise = (ctx, width, height, intensity) => {
    let imageData = ctx.createImageData(width, height);
    let data = imageData.data;
  
    for (let i = 0; i < data.length; i += 4) {
      let val = Math.random() * 255 * intensity;
      data[i] = val;     // red
      data[i + 1] = val; // green
      data[i + 2] = val; // blue
      data[i + 3] = 255; // alpha
    }
  
    ctx.putImageData(imageData, 0, 0);
  };
  
  let canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let ctx = canvas.getContext('2d');
  generateNoise(ctx, canvas.width, canvas.height, 0.8); // Ajusta la intensidad a tu gusto
  
  let noiseDataURL = canvas.toDataURL();
  
  let svgFilter = `
  <svg xmlns='http://www.w3.org/2000/svg'>
    <filter id='noise'>
      <feImage x='0' y='0' width='100%' height='100%' xlink:href='${noiseDataURL}' result='noise'/>
      <feBlend mode='screen' in='SourceGraphic' in2='noise'/>
    </filter>
  </svg>
  `;
  
  let svgDataURL = 'data:image/svg+xml;base64,' + btoa(svgFilter);
  
  document.getElementById('intro_gradient').style.backgroundImage = `url(${svgDataURL}), linear-gradient(to right, red, blue)`;
  document.getElementById('intro_gradient').style.backgroundSize = 'cover';
  document.getElementById('intro_gradient').style.filter = 'url(#noise)';
  