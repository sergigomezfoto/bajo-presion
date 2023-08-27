var youtubePlayerReady = false;

// 2. This code loads the IFrame youtubePlayer API code asynchronously.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let youtubeTag = document.createElement("script");
youtubeTag.src = "https://www.youtube.com/iframe_api";
let firstScriptYoutubeTag = document.getElementsByTagName("script")[0];
firstScriptYoutubeTag.parentNode.insertBefore(youtubeTag, firstScriptYoutubeTag);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. This function creates an <iframe> (and YouTube youtubePlayer)
//    after the API code downloads.
let youtubePlayer;

function onYouTubeIframeAPIReady() {
  /////////////////////////////////////////////////////////////////////youtube player
  youtubePlayer = new YT.Player("youtubePlayer", {
    height: "100%",
    width: "100%",
    videoId: null,
    playerVars: {
      autoplay: 1,
      disablekb: 1,
      modestbranding: 1,
      controls: 0,
      rel: 0,
      // iv_load_policy:3,
    },
    events: {
      onError: onYoutubePlayerError,
      onReady: onYoutubePlayerReady,
      onStateChange: onYoutubePlayerStateChange,
    },
  });
}

function onYoutubePlayerReady(event) {
  youtubePlayerReady = true;
  console.log("youtubePlayerReady: ", youtubePlayerReady);
  loadVideo("orbkg5JH9C8");
    // loadVideo("sAaqLIsOmCE");
}

function onYoutubePlayerError(e) {
  console.log(e);
}

// 5. The API calls this function when the youtubePlayer's state changes.
//    The function indicates that when playing a video (state=1),
//    the youtubePlayer should play for six seconds and then stop.
/**
 * ***************************************************************************************************************************
 *                                        ACCIÓ PER DETECTAR MOMENTS DEL VIDEO I EXECUTAR ACCIONS
 * ***************************************************************************************************************************
 */
let currentAction = 0;
let interval;
let lastKnownTime = 0;
// Creem un array per rastrejar les accions executades
const executedActions = new Array(actions.length).fill(false);

const monitorTime = (player) => {
    if (interval) clearInterval(interval);
  
    interval = setInterval(() => {
      const currentTime = player.getCurrentTime();
    //   console.log("Temps actual del vídeo:", currentTime);
  
      if (currentTime < lastKnownTime) {
        // Si s'ha retrocedit en el vídeo, es recalcula l'index currentAction
        currentAction = actions.findIndex(action => action.time > currentTime);
      }
      lastKnownTime = currentTime;
  
      // Comprovem si hem perdut alguna acció anterior
      for (let i = 0; i < currentAction; i++) {
        if (currentTime > actions[i].time && !executedActions[i]) {
          console.log("Executant acció perduda en el temps:", actions[i].time);
          actions[i].action();
          executedActions[i] = true;
        }
      }
  
      // Comprovem les accions futures
      while (currentAction < actions.length && currentTime > actions[currentAction].time) {
        if (!executedActions[currentAction]) {
          console.log("Executant acció en el temps:", actions[currentAction].time);
          actions[currentAction].action();
          executedActions[currentAction] = true;
        }
        currentAction++;
      }
  
      if (currentAction >= actions.length) {
        console.log("Totes les accions han estat executades.");
        clearInterval(interval);
      }
  
    }, 100);
  };

/**
 * ***************************************************************************************************************************
 *                                        ACCIÓ PER DETECTAR PREEND DEL VIDEO
 * ***************************************************************************************************************************
 */
let checkVideoTimeInterval;
let checkVideoTimeTimeout;

const timeStartCheck = 3;
const timeBeforeEnd = 0.3;
const returnToSecond = 0.5;

const videoPreEnded = (rettosecond = 0.5, player = youtubePlayer) => {
  playPause.style.display = "none";
  replay.style.opacity = "1";
  replay.style.display = "flex";
  stopVideo(rettosecond, player);
  currentAction = 0;
  executedActions.fill(false);
  lastKnownTime = 0;
};

const startCheckInterval = (duration, player = youtubePlayer) => {
  console.log("video preended");
  checkVideoTimeInterval = setInterval(function () {
    const currentCheckTime = player.getCurrentTime();
    if (duration - currentCheckTime <= timeBeforeEnd) {
      clearInterval(checkVideoTimeInterval);
      videoPreEnded(returnToSecond);
    }
  }, 200);
};
const checkIfPreended = (event) => {
  const duration = youtubePlayer.getDuration();
  console.log("event.data: ", event);
  if (event === YT.PlayerState.PLAYING) {
    const currentTime = youtubePlayer.getCurrentTime();
    const timeLeft = duration - currentTime;

    // Limpia el timeout y el intervalo anteriores
    clearTimeout(checkVideoTimeTimeout);
    clearInterval(checkVideoTimeInterval);

    if (timeLeft > timeStartCheck) {
      checkVideoTimeTimeout = setTimeout(function () {
        startCheckInterval(duration, youtubePlayer);
      }, (timeLeft - timeStartCheck) * 1000);
    } else {
      startCheckInterval(duration, youtubePlayer);
    }
  } else {
    clearTimeout(checkVideoTimeTimeout);
    clearInterval(checkVideoTimeInterval);

  }
};


/**
 * ***************************************************************************************************************************
 *                                        ACCIÓ PER DETECTAR ESTAT DEL VIDEO
 * ***************************************************************************************************************************
 */
function onYoutubePlayerStateChange(event) {
  checkIfPreended(event.data);
  if (event.data === YT.PlayerState.PLAYING) {
    console.log("Vídeo en reproducció. Iniciant monitorització.");
    monitorTime(youtubePlayer);
  } else if (youtubePlayer.getPlayerState() === YT.PlayerState.ENDED) {
    //pos si aca no funciona faig el mateix al final

    videoPreEnded(returnToSecond);
  } else {
    console.log("Vídeo pausat o aturat. Aturant monitorització.");
    clearInterval(interval); // Atura l'interval si el vídeo no està reproduint-se
  }
}
/**
 * ***************************************************************************************************************************
 *                                          funcionalitat dels controls
 * ***************************************************************************************************************************
 */
const loadVideo = (videoId, player = youtubePlayer) => {
  player.cueVideoById(videoId);
};

const loadAndPlayVideo = (videoId, player = youtubePlayer) => {
  player.loadVideoById(videoId);
};

const playVideo = (player = youtubePlayer) => {
  player.playVideo();
};

const pauseVideo = (player = youtubePlayer) => {
  player.pauseVideo();
};

const stopVideo = (returnsecond = 0.5, player = youtubePlayer) => {
  player.seekTo(returnsecond, true);
  player.pauseVideo();
};

///////////////////////////////////////////////////////////////////////////////////////VIDEO controls
let initialPlay = false;
const togglePlayPause = (player = youtubePlayer) => {
  console.log("player.getPlayerState(): ", player.getPlayerState());
  if (player.getPlayerState() === 5 && !initialPlay) {
    playVideo();
    initialPlay = true;
  }
  if (window.getComputedStyle(replay).display === "none") {
    if (player.getPlayerState() === 1) {
      pauseVideo(player);
    } else if (player.getPlayerState() === 2) {
      playVideo(player);
    }
  }
};
const replayFunction = (player = youtubePlayer) => {
  console.log("player.getPlayerState(): ", player.getPlayerState());
  resetHearts();
  if (window.getComputedStyle(playPause).display === "none") {
    stopVideo(0, player);
    playVideo(player);
    replay.style.display = "none";
    playPause.style.display = "block";
  }
};
const playPause = document.getElementById("playPause");
const replay = document.getElementById("replay");
(() => {
  // await asyncLoopPositive((_) => youtubePlayerReady, 10);
  playPause.addEventListener("click", () => {
    togglePlayPause(youtubePlayer);
  });
  playPause.addEventListener("touchend", () => {
    togglePlayPause(youtubePlayer);
  });
  replay.addEventListener("click", () => {
    replayFunction(youtubePlayer);
  });
  replay.addEventListener("touchend", () => {
    replayFunction(youtubePlayer);
  });
})();
