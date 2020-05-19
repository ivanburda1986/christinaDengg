//Initialize the Gallery UI
const gallery = new galleryUI();

//UI Selectors
const galleryHideButton = document.getElementById("gallery-hide-btn");
const galleryGrid = document.getElementById("gallery-grid");
const nextButton = document.getElementById("gallery-next-btn");
const previousButton = document.getElementById("gallery-previous-btn");

//Variables
const totalPhotos = photos.length;


//Populate the gallery overview
gallery.listPhotos(photos);

//Show the gallery overlay
galleryGrid.addEventListener("click", (e) => {
  gallery.showGalleryOverlay();
  gallery.showFullPhoto(e.target.id);
});

//Show the next full photo
nextButton.addEventListener("click", () => {
  const currentFullPhoto = document.querySelector(".gallery-full-photo").id;
  const currentFullPhotoNumber = photos.indexOf(currentFullPhoto);
  gallery.showNextFullPhoto(currentFullPhotoNumber, totalPhotos);
});

//Show the previous full photo


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