(() => {
  console.log('fired!');

  // select elements here
  let runeIcon = document.querySelectorAll(".galleryWindow"),
      mainImage = document.querySelector("#selectedImage");

  // functions go in the middle
  function switchImage(){
    console.log("rune" + this.id + "clicked");

    let currentImage = this.dataset.character + ".svg";

    mainImage.src = "images/" + currentImage;
  }

  //event handling
runeIcon.forEach(galleryWindow => galleryWindow.addEventListener('click', switchImage));


})();
