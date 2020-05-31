//UI Selectors
const mobileNavigation = document.getElementById("main-nav-mobile-menu-options");
const burgerToggler = document.getElementById("burger-toggler");
const burger = document.getElementById("burger");

//WELCOME - TITLES
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("welcome-title").classList.add("anim-slideDown-endState");
  document.getElementById("welcome-subtitle").classList.add("anim-opacity-endState");
});

//NAVIGATION
burgerToggler.addEventListener("click", (e) => {
  if (e.srcElement.checked) {
    mobileNavigation.classList.add("anim-slideToScreen-endState");
    burger.classList.add("burger-animate-endState");

  } else {
    mobileNavigation.classList.remove("anim-slideToScreen-endState");
    burger.classList.remove("burger-animate-endState");
  }
})

//Closing the mobile nav if the user clicks outside of it
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth <= 1024) {
  document.addEventListener("click", (e) => {
    let mobileNavigationBottomValueYAxis = mobileNavigation.getBoundingClientRect().bottom;
    if (mobileNavigationBottomValueYAxis > 0 && e.clientY > mobileNavigationBottomValueYAxis) {
      mobileNavigation.classList.remove("anim-slideToScreen-endState");
      burger.classList.remove("burger-animate-endState");
      burgerToggler.checked = false;
    }
  })
}

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
  let windowInnerWidth = window.innerWidth;
  animateOnScroll("performances-headline", "anim-opacity-endState", 25);
  animateOnScroll("performance1", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance1", "anim-slideRight-endState", 50);
  animateOnScroll("performance2", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-opacity-delayed-endState", 50);
  animateOnScroll("performance3", "anim-slideLeft-endState", 50);
  animateOnScroll("gallery-headline", "anim-opacity-endState", 25);

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