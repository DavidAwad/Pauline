var vid = document.getElementById("bgvid");
var music = document.getElementById("bgm");

var pauseButton = document.querySelector("#pause");

function vidFade() {
  vid.classList.add("stopfade");
}

/*
vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});
*/


// functionality to pause the video and music
pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
  if(music.paused){
    music.play();
  }
  else{
    music.pause();
  }
})
