let cards = document.querySelectorAll(".popular__card");
let prev = document.querySelector(".prebtn");
let next = document.querySelector(".nextbtn");


//-------------- for product slider -----------

let cardIndex = 0;

function showCard(cardIndex){

  cards.forEach(function(card){
    card.classList.remove("popular__card--visible");
  })

  cards[cardIndex].classList.add("popular__card--visible");
}

prev.addEventListener("click", function() {
  cardIndex--;
  if (cardIndex == -1) {
    cardIndex = cards.length - 1;
  }
  showCard(cardIndex)
});

next.addEventListener("click", function () {
  cardIndex++;
  if (cardIndex == cards.length) {
    cardIndex = 0;
  }
  showCard(cardIndex)
});

showCard(cardIndex)
