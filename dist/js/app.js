//Initialize the Gallery UI
const gallery = new galleryUI();
const video = new videoUI();

//UI Selectors
const galleryHideButton = document.getElementById("gallery-hide-btn");
const galleryGrid = document.getElementById("gallery-grid");
const nextButton = document.getElementById("gallery-next-btn");
const previousButton = document.getElementById("gallery-previous-btn");
const aerialVideo = document.getElementById("aerial-video-btn");
const exoticVideo = document.getElementById("exotic-video-btn");
const classicalVideo = document.getElementById("classical-video-btn");

//Variables
const ultimatePhotoNumber = photos.length;

function getCurrentFullPhotoNumber() {
  const currentFullPhoto = document.querySelector(".gallery-full-photo").id;
  const currentFullPhotoNumber = photos.indexOf(currentFullPhoto) + 1;
  return currentFullPhotoNumber;
}

//PERFORMANCE
//Launch the videos
aerialVideo.addEventListener("click", (e) => {
  video.showVideoOverlay();
})




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



/*
window.addEventListener('scroll', () => {
  let ivan = document.getElementById("ivan");
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrollY = window.scrollY;
  let position = ivan.getBoundingClientRect();

  console.log(position);
  console.log(scrollY);
  console.log(scrollable);

  if (scrollY > 580) {
    ivan.classList.add("anim2");
  }
})
*/