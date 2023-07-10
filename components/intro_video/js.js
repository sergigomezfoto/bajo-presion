



const timeUpdateHandler = (event) => {
  const currentTime = video.currentTime;
  if (currentTime >= 10) {
    console.log('Tiempo actual:', currentTime);
    console.log('he arrivat al 10');
    video.removeEventListener('timeupdate', timeUpdateHandler);
  }
};

video.addEventListener('timeupdate', timeUpdateHandler);