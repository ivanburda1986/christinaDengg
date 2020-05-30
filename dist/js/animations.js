//WELCOME - TITLES
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("welcome-title").classList.add("anim-slideDown-endState");
  document.getElementById("welcome-subtitle").classList.add("anim-opacity-endState");
});

//NAVIGATION
document.getElementById("burger-toggler").addEventListener("click", (e) => {
  console.log(e.srcElement.checked);
  if (e.srcElement.checked) {
    document.getElementById("main-nav-mobile-menu-options").classList.add("anim-slideToScreen-endState");
    document.getElementById("burger").classList.add("burger-animate-endState");

  } else {
    document.getElementById("main-nav-mobile-menu-options").classList.remove("anim-slideToScreen-endState");
    document.getElementById("burger").classList.remove("burger-animate-endState");
  }
})

//Dynamic highlighting in the horizontal navigation
window.addEventListener('scroll', () => {
  let windowInnerWidth = window.innerWidth;
  if (windowInnerWidth <= 768) {
    navigationLinkHighlighting("nav-mobile-welcome", "section-welcome");
    navigationLinkHighlighting("nav-mobile-christina", "section-christina");
    navigationLinkHighlighting("nav-mobile-performance", "section-performance");
    navigationLinkHighlighting("nav-mobile-gallery", "section-gallery");
  } else {
    navigationLinkHighlighting("nav-welcome", "section-welcome");
    navigationLinkHighlighting("nav-christina", "section-christina");
    navigationLinkHighlighting("nav-performance", "section-performance");
    navigationLinkHighlighting("nav-gallery", "section-gallery");
  }
});

function navigationLinkHighlighting(navigationElementSelector, triggeringElementSelector) {
  let windowInnerHeight = window.innerHeight;
  let navigationLink = document.getElementById(navigationElementSelector);
  let triggerer = document.getElementById(triggeringElementSelector);
  let triggererMiddle = triggerer.getBoundingClientRect().top + triggerer.getBoundingClientRect().height * 0.5;
  if (triggererMiddle > 0 && triggererMiddle < windowInnerHeight) {
    navigationLink.classList.add("current");
  } else {
    navigationLink.classList.remove("current");
  }
}

//Section-scrollbased element displaying
window.addEventListener('scroll', () => {
  animateOnScroll("performances-headline", "anim-opacity-endState", 25);
  animateOnScroll("performance1", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance1", "anim-slideRight-endState", 50);
  animateOnScroll("performance2", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-slideLeft-endState", 50);
  animateOnScroll("gallery-headline", "anim-opacity-endState", 25);

  let windowInnerWidth = window.innerWidth;
  if (windowInnerWidth <= 1024) {
    animateOnScroll("christina-image", "anim-opacity-endState", 50);
    animateOnScroll("christina-text", "anim-opacity-endState", 50);
  } else {
    animateOnScroll("christina-image", "anim-opacity-endState", 50);
    animateOnScroll("christina-image", "anim-slideRight-endState", 50);
    animateOnScroll("christina-text", "anim-opacity-endState", 50);
    animateOnScroll("christina-text", "anim-slideLeft-endState", 50);
  }
});



//Add an animation-related class to an object while scrolling
//selector = selector of the item to animate;
//requestedEffect = a name of the class to add in order to trigger a specific navigation;
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