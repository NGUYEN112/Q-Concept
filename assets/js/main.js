$(window).on("load", function () {
  // auto play video bg 
  if (document.getElementById("video1") && document.getElementById("video2") && document.getElementById("video3") && document.getElementById("video4")) {
    document.getElementById("video1").addEventListener("ended", function () { playVideo("video2", "video1"); });
    document.getElementById("video2").addEventListener("ended", function () { playVideo("video3", "video2"); });
    document.getElementById("video3").addEventListener("ended", function () { playVideo("video4", "video3"); });
    document.getElementById("video4").addEventListener("ended", function () { playVideo("video1", "video4"); });
  }
  function playVideo(videoID, currentVideoID) {
    let videoElement = document.getElementById(videoID);
    let currentVideo = document.getElementById(currentVideoID)
    currentVideo.classList.add("hide")
    videoElement.classList.remove("hide")
    videoElement.play();
  }
});
