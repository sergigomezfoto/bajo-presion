function onRandomPlayerReady(event) {
  randomPlayerReady = true;
  console.log("randomPlayerReady: ", randomPlayerReady);
}
let randomState;
let randomId;
function onRandomPlayerStateChange(event) {
  randomId = event.target.playerInfo.videoData.video_id;
  randomState = event.data;
  const duration = randomPlayer.getDuration();
  if (event.data === YT.PlayerState.PLAYING) {
    const currentTime = randomPlayer.getCurrentTime();
    const timeLeft = duration - currentTime;
    clearTimeout(checkRandomTimeTimeout);
    clearInterval(checkRandomTimeInterval);

    if (timeLeft > timeStartCheckRandom) {
      checkRandomTimeTimeout = setTimeout(function () {
        startCheckIntervalRandom(duration);
      }, (timeLeft - timeStartCheckRandom) * 1000);
    } else {
      startCheckIntervalRandom(duration);
    }
  } else {
    clearTimeout(checkRandomTimeTimeout);
    clearInterval(checkRandomTimeInterval);
  }
  //pos si aca no funciona faig el mateix al final
  if (randomPlayer.getPlayerState() === YT.PlayerState.ENDED) {
    console.log("video realmenmt mort");
    //randomPreEnded(returnToSecondRandom);
  }
}

const randomPreEnded = async (rettosecond = 0.5, player = randomPlayer) => {
  await randomStop();
  stopVideo(rettosecond, player);
  console.log("el video está en stop");
};

const startCheckIntervalRandom = (duration, player = randomPlayer) => {
  checkRandomTimeInterval = setInterval(function () {
    const currentCheckTime = player.getCurrentTime();
    if (duration - currentCheckTime <= timeBeforeEndRandom) {
      clearInterval(checkRandomTimeInterval);
      randomPreEnded(returnToSecondRandom);
    }
  }, 200);
};
const randomVideoId2 = ["pZ4-EL1KDS025", "tR-9aWv7akI1235"];
const randomVideoId = [
  "pZ4-EL1KDS0",
  "tR-9aWv7akI",
  "qJdHdM_RDQA",
  "b95eggWZO_s",
  "SE8IKFsAilQ",
  "5sbqDrwA29Q",
  "X1-c2wW-6C4",
  "DE7RqY6jxQI",
  "98w0tIDlhPQ",
  "mk-6SdWed5I",
  "KPI0E2aY0F4",
  "T7pO62lDYV8",
  "Z1d-SOhef5k",
  "18bzdimuQZg",
  "y_9PsgXUC4E",
  "KE_Us2mZTzU",
  "DsMnL5OMGyQ",
  "QwdeytAr8dI",
  "r4oOsN2w_hA",
  "qvnJs_s--ow",
  "EqJBZbW-K_s",
  "NF8ijEDNptU",
  "bw1rqumVuDE",
  "yiCataycbnU",
  "HwVqSwp_Jdc",
  "DqQPPPLjwJI",
  "HYqFVrfH7q8",
  "O7Zn_Su7Mks",
  "bPvCSiMjUvE",
  "OJNmXRvobwk",
  "Sn8xQ-_iZKg",
  "V5_EO9rcVfU",
  "UTICWDkXvKg",
  "iNF8eX0Rh_Q",
  "l8IzzzmfRlI",
  "XqF-k4-Atx4",
  "5bfd9itKnIY",
  "LD0GjSXqnYs",
  "lO1N-5HRu1k",
  "pqzq9cdnYlc",
  "oRJoEgpV_jM",
  "MYn0JxS5B60",
  "keyJeG2lMwk",
  // "pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235","pZ4-EL1KDS025", "tR-9aWv7akI1235",
];

const randomPlayerCanvasWrapper = document.getElementById("randomPlayerCanvasWrapper");
const randomPlayerCanvas = document.getElementById("randomPlayerCanvas");
const randomPlay = async () => {
  const video = getRandomElement(randomVideoId);
  await awaitStylecomplete(randomPlayerCanvasWrapper, "display", "flex");
  await asyncLoopPositive((_) => randomPlayerReady, 10, 600);
  loadAndPlayVideo(video, randomPlayer);
  await asyncLoopPositive((_) => randomId === video && randomState === vstate.playing, 10, 600,randomStop);
  randomPlayerCanvasWrapper.style.opacity = "1";
};

const displayRandomPlayer = () => {
  randomPlayerCanvasWrapper.style.display = "flex";
};

const randomStop = async () => {
  randomPlayerCanvasWrapper.style.opacity = "0";
  await awaitStylecomplete(randomPlayerCanvasWrapper, "opacity", "0");
  randomPlayerCanvasWrapper.style.display = "none";
  krpano.call("minivideo_return()");
};

/////////////////////////////////////////////////////////////////////////////randomPLayer in components/youtube_api/youtube_api.js

randomPlayerCanvas.addEventListener("click", () => {
  pauseVideo(randomPlayer);
  randomStop();
});
