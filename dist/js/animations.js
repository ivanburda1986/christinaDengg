window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("welcome-title").classList.add("anim-slideDown-endState");
  document.getElementById("welcome-subtitle").classList.add("anim-moveInFromLeft-endState");
});

window.addEventListener('scroll', () => {
  animateOnScroll("christina-image", "anim-opacity-endState", 50);
  animateOnScroll("christina-image", "anim-slideRight-endState", 50);
  animateOnScroll("christina-text", "anim-opacity-endState", 50);
  animateOnScroll("christina-text", "anim-slideLeft-endState", 50);
  animateOnScroll("performances-headline", "anim-opacity-endState", 50);
  animateOnScroll("performance1", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance1", "anim-slideRight-endState", 50);
  animateOnScroll("performance2", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-slideLeft-endState", 50);
  animateOnScroll("gallery-headline", "anim-opacity-endState", 50);
})

//Add an animation-related class to an object while scrolling
//selector = selector of the item to animate;
//requestedEffect = a name of the class to add in order to trigger the navigation;
//requestedEffect = a name of the class to add in order to trigger the navigation;
//screenPercentualPositionToTrigger = percentual expression of the screen position when to trigger the animation - available values: 25, 50, 75;
function animateOnScroll(selector, requestedEffect, screenPercentualPositionToTrigger = 50) {
  let divider;
  switch (screenPercentualPositionToTrigger) {
    case 75:
      divider = 4;
      break;
    case 50:
      divider = 2;
      break;
    case 25:
      divider = 1.5;
      break;
  }

  let windowInnerHeight = window.innerHeight;
  let itemToAnimate = document.getElementById(selector);
  let itemPositionTop = itemToAnimate.getBoundingClientRect().top;
  let itemTriggerPosition = windowInnerHeight / divider;
  if (itemPositionTop < itemTriggerPosition) {
    itemToAnimate.classList.add(requestedEffect);
  }
  // console.log(`1)Window inner height: ${windowInnerHeight}`);
  // console.log(`2)${selector} position top: ${itemPositionTop}`);
  // console.log(`3)Trigger position: ${itemTriggerPosition}`);
}