(() => {
  console.log('fired!');

  // select elements here
  let theRune = document.querySelectorAll(".Runes"),
      svgBadge = document.querySelector("#Runes");

  // functions go in the middle
  function logID(){
    console.log("clicked on graphic:", this.id);
  }

  function mouseOver(){
    console.log("I AM BEING MOUSED OVER", this.id);
  }

  //event handling
  theRune.forEach(badge => badge.addEventListener('click', logID))


})();
