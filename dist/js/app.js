//Initialize the Gallery UI
const gallery = new galleryUI();

//UI Selectors
const galleryCloseButton = document.getElementById("gallery-close-btn");


//Populate the gallery overview
gallery.listPhotos(photos);


//Close the gallery
galleryCloseButton.addEventListener("click", (e) => {
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