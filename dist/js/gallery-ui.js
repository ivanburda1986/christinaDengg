class galleryUI {
  constructor() {
    this.galleryOverview = document.getElementById("gallery-grid");
  }

  //Display in the UI an overview of available photos
  listPhotos(photos) {
    let galleryOverviewPhotos = "";
    photos.forEach(photo => {
      galleryOverviewPhotos += `
      <div class="gallery-thumbnail">
      <a href="#"
        ><img src="/dist/img/gallery/${photo}" alt="${photo}"
      /></a>
      </div>
      `
    });
    this.galleryOverview.innerHTML = galleryOverviewPhotos;
  }

}