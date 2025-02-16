
const thumbGalleries = document.querySelectorAll(".thumbGallery");
console.log(thumbGalleries);

thumbGalleries.forEach((tg) => {
  
  const largeImage = tg.querySelector(".thumbGallery__large");
  const thumbnails = tg.querySelector(".thumbGallery__thumbnails");
  
  thumbnails.addEventListener("click", (e) => {
  
    if(e.target != thumbnails) {
      largeImage.src = e.target.src;
    }
  })

})



