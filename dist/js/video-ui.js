class videoUI {
  constructor() {
    this.videoOverlay = document.getElementById("video-overlay");
    this.videoContainer = document.getElementById("video-container");
  }
  showVideoOverlay() {
    this.videoOverlay.classList.add("show");
    this.videoOverlay.classList.remove("hide");
  }

  showVideo(videoName) {
    this.videoContainer.innerHTML = ``;
  }
}