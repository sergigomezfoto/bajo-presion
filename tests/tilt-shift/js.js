function addTiltEffect(options) {
  document.addEventListener('mousemove', function(e) {
    let box = document.getElementById(options.divId);
    let boxRect = box.getBoundingClientRect();
    let boxCenterX = boxRect.left + boxRect.width / 2;
    let boxCenterY = boxRect.top + boxRect.height / 2;
    let distanceX = Math.abs(boxCenterX - e.clientX);
    let distanceY = Math.abs(boxCenterY - e.clientY);

    if (distanceX < boxRect.width / 2 + options.marginOfActuation && distanceY < boxRect.height / 2 + options.marginOfActuation) {
      let tiltX = ((e.clientY - boxCenterY) / (boxRect.height / 2 + options.marginOfActuation)) * options.effectStrength;
      let tiltY = ((e.clientX - boxCenterX) / (boxRect.width / 2 + options.marginOfActuation)) * options.effectStrength;
      box.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    } else {
      box.style.transform = 'rotateX(0) rotateY(0)';
    }
  });
}

// Uso de la función
addTiltEffect({
  divId: 'miDiv',
  marginOfActuation: 50,
  effectStrength: 30
});