class galleryUI {
  constructor() {
    this.galleryOverview = document.getElementById("gallery-grid");
    this.galleryOverlay = document.getElementById("gallery-overlay");
  }

  //Display in the UI an overview of available photos
  listPhotos(photos) {
    let galleryOverviewPhotos = "";
    photos.forEach(photo => {
      galleryOverviewPhotos += `
      <div class="gallery-thumbnail" value="${photos.indexOf(photo)}">
      <img src="/dist/img/gallery/${photo}" alt="${photo}"
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

  hideGalleryOverlay() {
    this.galleryOverlay.classList.add("hide");
  }

}