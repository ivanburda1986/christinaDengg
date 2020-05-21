class galleryUI {
  constructor() {
    this.galleryOverview = document.getElementById("gallery-grid");
    this.galleryOverlay = document.getElementById("gallery-overlay");
    this.fullPhotoContainer = document.getElementById("gallery-full-photo-container");
    this.currentFullPhotoDescription = document.getElementById("gallery-full-photo-description");
  }

  //Display in the UI an overview of available photos
  listPhotos(photos) {
    let galleryOverviewPhotos = "";
    photos.forEach(photo => {
      galleryOverviewPhotos += `
      <div class="gallery-thumbnail" value="${photos.indexOf(photo)}">
      <img src="/dist/img/gallery/${photo}" alt="${photo}" id="${photo}"
      />
      </div>
      `
    });
    this.galleryOverview.innerHTML = galleryOverviewPhotos;
  }

  showGalleryOverlay() {
    this.galleryOverlay.classList.add("show");
    this.galleryOverlay.classList.remove("hide");
  }

  showFullPhoto(fullPhotoName) {
    this.fullPhotoContainer.innerHTML = `<img src="/dist/img/gallery/${fullPhotoName}" alt="${fullPhotoName}" class="gallery-full-photo" id="${fullPhotoName}"/>`;
  }

  showNextFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber) {
    console.log("Current photo number:" + currentFullPhotoNumber);
    //console.log(ultimatePhotoNumber);
    let nextPhotoNumber;
    if (currentFullPhotoNumber === ultimatePhotoNumber) {
      nextPhotoNumber = 0;
    } else {
      nextPhotoNumber = currentFullPhotoNumber + 1;
    }
    console.log("Next photo number:" + nextPhotoNumber);
    this.fullPhotoContainer.innerHTML = `<img src="/dist/img/gallery/photo${nextPhotoNumber}.jpg" alt="photo${nextPhotoNumber}.jpg" class="gallery-full-photo" id="photo${nextPhotoNumber}.jpg"/>`;
  }

  showPreviousFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber) {
    console.log(currentFullPhotoNumber);
    //console.log(ultimatePhotoNumber);
    let previousPhotoNumber;
    if (currentFullPhotoNumber === 0) {
      previousPhotoNumber = ultimatePhotoNumber;
    } else {
      previousPhotoNumber = currentFullPhotoNumber - 1;
    }
    console.log("Previous photo number:" + previousPhotoNumber);
    this.fullPhotoContainer.innerHTML = `<img src="/dist/img/gallery/photo${previousPhotoNumber}.jpg" alt="photo${previousPhotoNumber}.jpg" class="gallery-full-photo" id="photo${previousPhotoNumber}.jpg"/>`;
  }

  showCurrentFullPhotoDescription(currentFullPhotoNumber, ultimatePhotoNumber) {
    this.currentFullPhotoDescription.innerHTML = `<p>${currentFullPhotoNumber+1}/${ultimatePhotoNumber+1}</p>`;
  }


  hideGalleryOverlay() {
    this.galleryOverlay.classList.add("hide");
  }

}