let cardModals = document.querySelectorAll(".cardImg");
let lightboxModal = document.querySelector(".lightbox__modal");
let lightboxLargeImg = document.querySelector(".lightbox__largeImg");
let lightboxCloseBtn = document.querySelector(".lightbox__closeBtn");
      

cardModals.forEach(function(card) {

  card.addEventListener("click", function(event) {
  
    lightboxLargeImg.src = event.target.dataset.largeimg;        
    lightboxModal.showModal();
  })
  
  lightboxCloseBtn.addEventListener("click", function(){
    lightboxModal.close();
  })
  
  lightboxModal.addEventListener("click", function(event){
  
    lightboxModal.close();
  })
  
})


  