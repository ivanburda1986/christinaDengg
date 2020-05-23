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
    this.videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tAGnKpE4NCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}