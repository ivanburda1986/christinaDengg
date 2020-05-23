window.addEventListener('scroll', () => {
  let performancesHeadline = document.getElementById("performances-headline");

  let windowInnerHeight = window.innerHeight;
  let yAxisScrolled = document.documentElement.scrollTop;

  let performancesHeadlinePositionFull = performancesHeadline.getBoundingClientRect();
  let performancesHeadlinePositionTop = performancesHeadline.getBoundingClientRect().top;

  let performancesTriggerPosition = windowInnerHeight / 1.5;

  if (performancesHeadlinePositionTop < performancesTriggerPosition) {
    console.log('------------------now---------------');
    performancesHeadline.classList.add("anim-opacity-endState");
  }

  console.log(`1)Window inner height: ${windowInnerHeight}`);
  console.log(`2)Performance headline position top: ${performancesHeadlinePositionTop}`);
  console.log(`3)Trigger position: ${performancesTriggerPosition}`);
  //console.log(`4)Already scrolled on the y-axis: ${yAxisScrolled}`);
})




// let christinaImage = document.getElementById("christina-image");
// let christinaText = document.getElementById("christina-text");

// let christinaPosition = christinaImage.getBoundingClientRect();
// let christinaTriggerPosition = (christinaPosition.bottom - christinaPosition.height);

// if (scrollY > christinaTriggerPosition) {
//   christinaImage.classList.add("anim-opacity-endState");
//   christinaImage.classList.add("anim-slideDown-endState");
//   christinaText.classList.add("anim-opacity-endState");
//   christinaText.classList.add("anim-slideLeft-endState");

// }

// 1)Window height: 3577
// 2)Scrolled: y-axis: 2009
// 3)Performance headline top position: 353.5
// 4)Trigger position: 827.75