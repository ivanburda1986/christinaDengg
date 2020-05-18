//Initialize the Gallery UI
const gallery = new galleryUI();

//UI Selectors
const galleryHideButton = document.getElementById("gallery-hide-btn");
const galleryGrid = document.getElementById("gallery-grid");




//Populate the gallery overview
gallery.listPhotos(photos);

//Show the gallery overlay
galleryGrid.addEventListener("click", (e) => {
  console.log(e.target)
  gallery.showGalleryOverlay();
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