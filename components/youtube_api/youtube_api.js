////////////////////////////////////TODO
//VIDEO INTRO AMB POSIBILITAT DE

var youtubePlayerReady = false;
var randomPlayerReady = false;

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
let randomPlayer;
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

  /////////////////////////////////////////////////////////////////////random player
  randomPlayer = new YT.Player("randomPlayer", {
    height: "100%",
    width: "100%",
    videoId: null,
    playerVars: {
      autoplay: 1,
      disablekb: 1,
      modestbranding: 1,
      controls: 0,
      rel: 0,
      // mute:1,
    },
    events: {
      onReady: onRandomPlayerReady,
      onStateChange: onRandomPlayerStateChange,
    },
  });
}

function onYoutubePlayerReady(event) {
  youtubePlayerReady = true;
  console.log("youtubePlayerReady: ", youtubePlayerReady);
}

function onYoutubePlayerError(e) {
  console.log(e);
}

// 5. The API calls this function when the youtubePlayer's state changes.
//    The function indicates that when playing a video (state=1),
//    the youtubePlayer should play for six seconds and then stop.

let checkVideoTimeInterval;
let checkVideoTimeTimeout;

const timeStartCheck = 3;
const timeBeforeEnd = 0.3;
const returnToSecond = 0.5;

///////////////////////////////////////////////////////////random mini player
let checkRandomTimeInterval;
let checkRandomTimeTimeout;

const timeStartCheckRandom = 3;
const timeBeforeEndRandom = 0.5;
const returnToSecondRandom = 0.1;
///////////////////////////////////////////////////////////random mini player

const videoPreEnded = (rettosecond = 0.5, player = youtubePlayer) => {
  playPause.style.display = "none";
  replay.style.opacity = "1";
  replay.style.display = "flex";
  stopVideo(rettosecond, player);
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

function onYoutubePlayerStateChange(event) {
  const duration = youtubePlayer.getDuration();
  Game.videoId = event.target.playerInfo.videoData.video_id;
  Game.videoState = event.data;

  if (event.data === YT.PlayerState.PLAYING) {
    const currentTime = youtubePlayer.getCurrentTime();
    const timeLeft = duration - currentTime;

    // Limpia el timeout y el intervalo anteriores
    clearTimeout(checkVideoTimeTimeout);
    clearInterval(checkVideoTimeInterval);

    if (timeLeft > timeStartCheck) {
      checkVideoTimeTimeout = setTimeout(function () {
        startCheckInterval(duration, randomPlayer);
      }, (timeLeft - timeStartCheck) * 1000);
    } else {
      startCheckInterval(duration, randomPlayer);
    }
  } else {
    clearTimeout(checkVideoTimeTimeout);
    clearInterval(checkVideoTimeInterval);
  }
  //pos si aca no funciona faig el mateix al final
  if (youtubePlayer.getPlayerState() === YT.PlayerState.ENDED) {
    videoPreEnded(returnToSecond);
  }
}

/*
//https://developers.google.com/youtube/iframe_api_reference
//https://developers.google.com/youtube/player_parameters

event.data // dona els números


YT.PlayerState.
BUFFERING: 3
CUED:5
ENDED:0
PAUSED:2
PLAYING:1
UNSTARTED:-1

*/
/////////////////////////////////////////////////////////////////////////////////////// ACTIONS

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////CUSTOM ACTIONS/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const videoControlsWrapper = document.getElementById("videoControlsWrapper");
const videoPlayerCanvas = document.getElementById("videoPlayerCanvasWrapper");
const videoPlayerWrapper = document.getElementById("videoPlayerWrapper");
const playPause = document.getElementById("playPause");
const replay = document.getElementById("replay");
/////////////////////////////////////////////////////////////////////////////////IMAGE VIDEO
// const loadVideo = (videoId, player = youtubePlayer) => {
//   player.cueVideoById(videoId);
// };

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
//////////////////////////////////////////////////////////////////////////////SOUND
// const fadeoutSoundVideo = (timeway = 1, player = youtubePlayer) => {
//   let volume = player.getVolume();
//   console.log("volume: ", volume);
//   let fadeout = setInterval(() => {
//     volume -= timeway;
//     player.setVolume(volume);
//     if (volume <= 0) {
//       muteVideo(player);
//       clearInterval(fadeout);
//     }
//   }, 10);
// };

// const fadeinSoundVideo = (timeway = 1, player = youtubePlayer) => {
//   if (player.isMuted()) {
//     unMuteVideo(player);
//   }
//   let volume = player.getVolume();
//   console.log("volumeddddddd: ", volume);
//   let fadein = setInterval(() => {
//     volume += timeway;
//     player.setVolume(volume);
//     if (volume >= 100) {
//       clearInterval(fadein);
//     }
//   }, 10);
// };

// const muteVideo = (player = youtubePlayer) => {
//   player.mute();
// };
// const unMuteVideo = (player = youtubePlayer) => {
//   player.unMute();
// };

///////////////////////////////////////////////////////////////////////PLAYER
// const fadeinplayer = async (transition = 0.3) => {
//   await asyncLoopPositive((_) => youtubePlayerReady, 10);
//   if (window.getComputedStyle(videoPlayerCanvas).display === "none") {
//     videoPlayerCanvas.style.display = "flex";
//     videoPlayerCanvas.style.transition = `all ${transition}s`;
//     await awaitStylecomplete(videoPlayerCanvas, "display", "flex");
//     videoPlayerCanvas.style.opacity = "1";
//     Game.videoVisible=true;

//   } else {
//     console.log("error el div videocanvas està en: ", window.getComputedStyle(videoPlayerCanvas).display);
//   }
// };
///fadeoutplayer
// const fadeoutplayer = async (transition = 0.3) => {
//   if (window.getComputedStyle(videoPlayerCanvas).display === "flex") {
//     videoPlayerCanvas.style.transition = `all ${transition}s`;
//     videoPlayerCanvas.style.opacity = "0";
//     await awaitStylecomplete(videoPlayerCanvas, "opacity", "0");
//     videoPlayerCanvas.style.display = "none";
//     Game.videoVisible=false;
//     replay.style.display = "none";

//   } else {
//     console.log("error el div videocanvas està en: ", window.getComputedStyle(videoPlayerCanvas).display);
//   }
// };
///////////////////////////////////////////////////////////////////////VIDEO
// const fadeinVideo = async (videoId, transition = 0.3, player = youtubePlayer) => {
//   await asyncLoopPositive((_) => youtubePlayerReady, 10);
//   if (window.getComputedStyle(videoPlayerCanvas).display === "none") {
//     videoPlayerCanvas.style.display = "flex";
//     videoPlayerCanvas.style.transition = `all ${transition}s`;
//     await awaitStylecomplete(videoPlayerCanvas, "display", "flex");
//     loadVideo(videoId, player);
//     await asyncLoopPositive((_) => Game.videoId === videoId && Game.videoState === vstate.cued, 10);
//     videoPlayerCanvas.style.opacity = "1";
//     Game.videoVisible=true;
//   }
// };
const fadeinAndPlayNewVideoIntro = async (videoId, transition = 0.3, player = youtubePlayer) => {
  await asyncLoopPositive((_) => youtubePlayerReady, 10, 1000);

  if (window.getComputedStyle(videoPlayerCanvas).display === "none") {
    videoPlayerCanvas.style.display = "flex";
    videoPlayerCanvas.style.transition = `all ${transition}s`;
    await awaitStylecomplete(videoPlayerCanvas, "display", "flex");

    loadAndPlayVideo(videoId, player);

    await asyncLoopPositive((_) => Game.videoId === videoId && Game.videoState === vstate.playing, 10, 1000);

    videoPlayerCanvas.style.opacity = "1";
    Game.videoVisible = true;
  }
};
const fadeinAndPlayNewPlaceVideo = async (videoId, transition = 0.3, player = youtubePlayer) => {
  if (!test) {
    if (videoPlayerCanvas.classList.contains("panovideo")) {
      videoPlayerCanvas.classList.remove("panovideo");
    }
    if (!videoPlayerCanvas.classList.contains("tourvideo")) {
      videoPlayerCanvas.classList.add("tourvideo");
    }
    await asyncLoopPositive((_) => youtubePlayerReady, 10, 1000);
    if (window.getComputedStyle(videoPlayerCanvas).display === "none") {
      videoPlayerCanvas.style.display = "flex";
      videoPlayerCanvas.style.transition = `all ${transition}s`;
      await awaitStylecomplete(videoPlayerCanvas, "display", "flex");
      loadAndPlayVideo(videoId, player);
      await asyncLoopPositive((_) => Game.videoId === videoId && Game.videoState === vstate.playing, 10, 1000);
      videoPlayerCanvas.style.opacity = "1";
      Game.videoVisible = true;
    }
  }
};
const fadeinAndPlayNewPanoVideo = async (videoId, transition = 0.3, player = youtubePlayer) => {
  if (!videoPlayerCanvas.classList.contains("tourvideo")) {
    videoPlayerCanvas.classList.add("tourvideo");
  }
  if (!videoPlayerCanvas.classList.contains("panovideo")) {
    videoPlayerCanvas.classList.add("panovideo");
  }
  await asyncLoopPositive((_) => youtubePlayerReady, 10, 1000);
  console.log("pano video");
  // if (window.getComputedStyle(videoPlayerCanvas).display === "none") {
  await awaitStylecomplete(videoPlayerCanvas, "display", "none", 1000);
  videoPlayerCanvas.style.display = "flex";
  videoPlayerCanvas.style.transition = `all ${transition}s`;
  await awaitStylecomplete(videoPlayerCanvas, "display", "flex");
  loadAndPlayVideo(videoId, player);
  await asyncLoopPositive((_) => Game.videoId === videoId && Game.videoState === vstate.playing, 10, 1000);
  videoPlayerCanvas.style.opacity = "1";
  Game.videoVisible = true;
  // }else{
  // console.log('es aquest error');
  // }
};
const fadeoutVideo = async (transition = 0.3, player = youtubePlayer) => {
  if (window.getComputedStyle(videoPlayerCanvas).display === "flex") {
    pauseVideo(player);
    videoPlayerCanvas.style.transition = `all ${transition}s`;
    videoPlayerCanvas.style.opacity = "0";
    await awaitStylecomplete(videoPlayerCanvas, "opacity", "0");
    replay.style.display = "none";
    videoPlayerCanvas.style.display = "none";
    Game.videoVisible = false;
  }
};

////////////////////////////////////////////////////////////////////////////////////////CONTROLS

////////////////////CAPA TRANSPARENT

// const waitForVideoTime = (seconds, callback, player = youtubePlayer) => {

//   return new Promise((resolve, reject) => {
//     console.log("id: ", player.playerInfo.videoData.video_id);
//     console.log("duration: ", player.playerInfo.duration);
//     const duration = player.getDuration();
//     if (seconds > duration) {
//       reject(new Error("El tiempo proporcionado es mayor que la duración del video"));
//       return;
//     }
//     const checkTime = () => {
//       const currentTime = player.getCurrentTime();
//       if (currentTime >= seconds) {
//         callback();
//         resolve();
//       } else {
//         // Si aún no hemos alcanzado el tiempo, volvemos a comprobar en 100 ms
//         setTimeout(checkTime, 100);
//       }
//     };
//     checkTime();
//   });
// };

///////////////////////////////////////////////////////////////////////////////////////VIDEO controls

const togglePlayPause = (player = youtubePlayer) => {
  console.log("player.getPlayerState(): ", player.getPlayerState());
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
  if (window.getComputedStyle(playPause).display === "none") {
    stopVideo(0, player);
    playVideo(player);
    replay.style.display = "none";
    playPause.style.display = "block";
  }
};

(async () => {
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

//////////////////////////////////////////////////////////////////////////////////////VIDEO BUTTONS

const skipVideoButton = document.getElementById("skipVideoButton");
skipVideoButton.addEventListener("click", fadeoutVideo);
