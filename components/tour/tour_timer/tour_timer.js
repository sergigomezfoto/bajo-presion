class Countdown {
  constructor(options) {
    this.element = document.getElementById(options.elementId);
    this.time = options.startTime;
    this.initialTime = options.startTime;
    this.elapsedTime = 0;
    this.endTimeCallback = options.endTimeCallback;
    this.restartAfterCallback = options.restartAferCallback;
    this.intervalId = null;
    this.wasTimeUpdated = false; // Aquesta variable indica si el temps s'ha modificat manualment
    this.monospace = options.monospace || false;
  }

  // Funció per convertir el temps a format mm:ss
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    // console.log(`${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
    if (this.monospace) {
      const minsStr = String(mins).padStart(2, "0");
      const secsStr = String(secs).padStart(2, "0");

      return `
                <span class="timerNumber">${minsStr[0]}</span>
                <span class="timerNumber">${minsStr[1]}</span>
                <span class="timerNumber">:</span>
                <span class="timerNumber">${secsStr[0]}</span>
                <span class="timerNumber">${secsStr[1]}</span>
            `;
    } else {
      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
  }

  // Funció per mostrar la compte enrere
  render() {
    this.element.innerHTML = this.formatTime(this.time);
  }

  // Funció per actualitzar l'inici del temps
  updateStartTime(newTime) {
    this.time = newTime;
    this.initialTime = newTime;
    this.wasTimeUpdated = true;
    this.render();
  }

  // Iniciar el compte enrere
  start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      this.elapsedTime++;
      if (this.time === 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.endTimeCallback().then(() => {
          if (this.restartAfterCallback) {
            this.time = this.wasTimeUpdated ? this.time : this.initialTime;
            this.wasTimeUpdated = false;
            this.start();
          }
        });
      } else {
        this.time--;
        this.render();
      }
    }, 1000);
  }

  // Funció per aturar i reiniciar
  stopAndReset() {
    this.resetElapsedTime();
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.time = 0;
    this.wasTimeUpdated = false;
    this.render();
  }

  // Funció per pausar
  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Funció per continuar
  resume() {
    if (!this.intervalId) {
      this.start();
    }
  }
  getElapsedTime() {
    return this.elapsedTime;
  }
  resetElapsedTime() {
    this.elapsedTime = 0;
  }
}
const timeBonusAdvisor=async()=>{
  const tourUiPlaceTime = document.getElementById('tourUiPlaceTime');
  changeBackgroundColor(tourUiPlaceTime, '#f5005d','white',100,2000);
  await sleep(2000);

}
// Ús:
const countdown = new Countdown({
  elementId: "tourUiPlaceTime",
  startTime: Game.state.timerTime,
  endTimeCallback: async () => {
    
    return new Promise((resolve) => setTimeout(async()=>{await timeBonusAdvisor();resolve()}, 500));
  },
  restartAferCallback: true,
  monospace: true,
});




//  countdown.start();
// countdown.updateStartTime(Game.state.timerTime);
countdown.pause();
