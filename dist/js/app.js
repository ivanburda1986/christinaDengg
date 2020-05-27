//Initialize the Gallery UI
const gallery = new galleryUI();
const video = new videoUI();
const welcomeVideo = new welcomeVideoUI();

//UI Selectors
const welcomeVideoButton = document.getElementById("play-welcome-video-btn");
const galleryHideButton = document.getElementById("gallery-hide-btn");
const galleryGrid = document.getElementById("gallery-grid");
const nextButton = document.getElementById("gallery-next-btn");
const previousButton = document.getElementById("gallery-previous-btn");
const aerialVideo = document.getElementById("aerial-video-btn");
const exoticVideo = document.getElementById("exotic-video-btn");
const classicalVideo = document.getElementById("classical-video-btn");
const videoHideButton = document.getElementById("video-hide-btn");

//Variables
const ultimatePhotoNumber = photos.length;

function getCurrentFullPhotoNumber() {
  const currentFullPhoto = document.querySelector(".gallery-full-photo").id;
  const currentFullPhotoNumber = photos.indexOf(currentFullPhoto) + 1;
  return currentFullPhotoNumber;
}

//WELCOME
//Play a video
// welcomeVideoButton.addEventListener("click", (e) => {
//   welcomeVideo.showVideoOverlay();
//   welcomeVideo.playVideo();
//   console.log("click");
// });


//PERFORMANCE
//Launch a video
aerialVideo.addEventListener("click", (e) => {
  video.showVideoOverlay();
  video.playVideo(performanceVideo1);
})

exoticVideo.addEventListener("click", (e) => {
  video.showVideoOverlay();
  video.playVideo(performanceVideo2);
})

classicalVideo.addEventListener("click", (e) => {
  video.showVideoOverlay();
  video.playVideo(performanceVideo3);
})

//Hide the video overlay
videoHideButton.addEventListener("click", (e) => {
  video.hideVideoOverlay();
});




//Populate the gallery overview
gallery.listPhotos(photos);

//Show the gallery overlay
galleryGrid.addEventListener("click", (e) => {

  gallery.showGalleryOverlay();
  gallery.showFullPhoto(e.target.id);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the next full photo
nextButton.addEventListener("click", () => {
  const currentFullPhotoNumber = getCurrentFullPhotoNumber();
  gallery.showNextFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the previous full photo
previousButton.addEventListener("click", () => {
  const currentFullPhotoNumber = getCurrentFullPhotoNumber();
  gallery.showPreviousFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});


//Hide the gallery overlay
galleryHideButton.addEventListener("click", (e) => {
  gallery.hideGalleryOverlay();
});

//Get full year
let fullYear = new Date().getFullYear();
document.getElementById("footer-year").textContent = fullYear;