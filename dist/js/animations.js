window.addEventListener('scroll', () => {
  let christinaImage = document.getElementById("christina-image");
  let christinaText = document.getElementById("christina-text");
  //let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrollY = window.scrollY;
  let position = christinaImage.getBoundingClientRect();
  let triggerPosition = (position.bottom - position.height);

  //console.log(position);
  //console.log(`scrollY: ${scrollY}`);
  //console.log(scrollable);
  //console.log(`Position top: ${position.top}`);
  //console.log(`Trigger position: ${triggerPosition}`);

  if (scrollY > triggerPosition) {
    christinaImage.classList.add("anim-opacity-endState");
    christinaImage.classList.add("anim-slideDown-endState");
    christinaText.classList.add("anim-opacity-endState");
    christinaText.classList.add("anim-slideLeft-endState");

  }
})