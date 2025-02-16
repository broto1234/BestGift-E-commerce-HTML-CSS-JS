const seFleres = document.querySelectorAll(".collection__card--seFlere");
const flereBtn = document.querySelector(".flere--btn");

seFleres.forEach(seFlere => {

  seFlere.classList.add("collection__card--seFlere");
  flereBtn.addEventListener("click", () => {
    seFlere.classList.toggle("collection__card--seFlere");
  })
})