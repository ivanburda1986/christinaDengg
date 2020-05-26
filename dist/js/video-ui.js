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

class welcomeVideoUI {
  constructor() {
    this.welcomeVideoOverlay = document.getElementById("welcome-video-overlay");
    this.welcomeVideoContaier = document.getElementById("welcome-video-container");
  }
  showVideoOverlay() {
    this.welcomeVideoOverlay.classList.add("show");
    this.welcomeVideoOverlay.classList.remove("hide");
  }

  hideVideoOverlay() {
    this.welcomeVideoOverlay.classList.add("hide");
    this.welcomeVideoContaier.innerHTML = ``;
  }

  playVideo() {
    this.welcomeVideoContaier.innerHTML = ``;
  }

}