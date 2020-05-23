class videoUI {
  constructor() {
    this.videoOverlay = document.getElementById("video-overlay");
    this.videoContainer = document.getElementById("video-container");
  }
  showVideoOverlay() {
    this.videoOverlay.classList.add("show");
    this.videoOverlay.classList.remove("hide");
  }

  hideVideoOverlay() {
    this.videoOverlay.classList.add("hide");
    this.videoContainer.innerHTML = ``;
  }

  playVideo(videoName) {
    this.videoContainer.innerHTML = videoName;
  }

}