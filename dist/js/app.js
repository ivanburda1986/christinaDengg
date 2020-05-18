//Initialize the Gallery UI
const gallery = new galleryUI();




//Populate the gallery overview
gallery.listPhotos(photos);




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