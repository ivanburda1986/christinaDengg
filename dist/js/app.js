//Initialize the Gallery UI
const gallery = new galleryUI();
const video = new videoUI();

//NAVIGATION - mobile

function closeMobileNavigation() {
  document.getElementById("main-nav-mobile-menu-options").classList.remove("anim-slideToScreen-endState");
  document.getElementById("burger").classList.remove("burger-animate-endState");
  document.getElementById("burger-toggler").checked = false;
}

document.getElementById("nav-mobile-welcome").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-christina").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-performance").addEventListener("click", (e) => {
  closeMobileNavigation();
})
document.getElementById("nav-mobile-gallery").addEventListener("click", (e) => {
  closeMobileNavigation();
})


//PERFORMANCES
//UI Selectors
const aerialVideo = document.getElementById("aerial-video-btn");
const exoticVideo = document.getElementById("exotic-video-btn");
const classicalVideo = document.getElementById("classical-video-btn");
const videoHideButton = document.getElementById("video-hide-btn");

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


//GALLERY
//UI Selectors
const galleryOverview = document.getElementById("gallery-overview");
const galleryHideButton = document.getElementById("gallery-hide-btn");
const nextButton = document.getElementById("gallery-next-btn");
const previousButton = document.getElementById("gallery-previous-btn");

//Variables
const ultimatePhotoNumber = photos.length;

function getCurrentFullPhotoNumber() {
  const currentFullPhoto = document.querySelector(".gallery-full-photo").id;
  const currentFullPhotoNumber = photos.indexOf(currentFullPhoto) + 1;
  return currentFullPhotoNumber;
}

//Populate the gallery overview
gallery.listPhotos(photos);

//Show the gallery overlay
galleryOverview.addEventListener("click", (e) => {
  gallery.showGalleryOverlay();
  gallery.showFullPhoto(e.target.id);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the next full photo
nextButton.addEventListener("click", () => {
  gallery.showNextFullPhoto(getCurrentFullPhotoNumber(), ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the previous full photo
previousButton.addEventListener("click", () => {
  gallery.showPreviousFullPhoto(getCurrentFullPhotoNumber(), ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Hide the gallery overlay
galleryHideButton.addEventListener("click", (e) => {
  gallery.hideGalleryOverlay();
});


//FOOTER
//Get full year
let fullYear = new Date().getFullYear();
document.getElementById("footer-year").textContent = fullYear;