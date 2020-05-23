window.addEventListener('scroll', () => {
  let christinaImage = document.getElementById("christina-image");
  let christinaText = document.getElementById("christina-text");
  let gallerySection = document.getElementById("section-gallery");
  let performancesHeadline = document.getElementById("performances-headline");
  //let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrollY = window.scrollY;
  let christinaPosition = christinaImage.getBoundingClientRect();
  let christinaTriggerPosition = (christinaPosition.bottom - christinaPosition.height);

  let galleryPosition = gallerySection.getBoundingClientRect();
  let galleryTriggerPosition = (galleryPosition.top);

  //console.log(galleryPosition);
  console.log(`scrollY: ${scrollY}`);
  //console.log(scrollable);
  //console.log(`Position top: ${galleryPosition.top}`);
  console.log(`Trigger position: ${galleryTriggerPosition}`);

  if (scrollY > christinaTriggerPosition) {
    christinaImage.classList.add("anim-opacity-endState");
    christinaImage.classList.add("anim-slideDown-endState");
    christinaText.classList.add("anim-opacity-endState");
    christinaText.classList.add("anim-slideLeft-endState");

  }

  if (scrollY > galleryTriggerPosition) {
    console.log('now');
    performancesHeadline.classList.add("anim-opacity-endState");
  }
})