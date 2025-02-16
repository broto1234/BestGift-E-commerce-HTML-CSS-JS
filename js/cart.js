//----------- Add to Cart ---------
let cartAdd = document.querySelector(".cartAdd");
let cartBtns = document.querySelectorAll(".popular--btn");

let totalItems = JSON.parse(localStorage.getItem("totalItems"));

if(!totalItems) {
  totalItems = "";
}


function showCart() {

  cartAdd.innerHTML = totalItems;
  cartBtns.forEach(function(cart) {
    
    cart.addEventListener("click", function() {
      totalItems++;
      localStorage.setItem("totalItems", JSON.stringify(totalItems));
      cartAdd.innerHTML = totalItems;
    })
    
  })
}
showCart();

// -------- Cart Modal---------
let cartModal = document.querySelector(".header__cart");
let cartShow = document.querySelector(".cart__modal");
let cartCloseBtn = document.querySelector(".cart__closeBtn");
let cartValue = document.querySelector(".cartValue");
let cartValueClose = document.querySelector(".cartValueClose");

// console.log(cartValueClose)

cartModal.addEventListener("click", function() {
  cartValue.innerHTML = totalItems;
  cartValueClose.style.display = "block";
  cartShow.showModal();  
})

cartCloseBtn.addEventListener("click", function(){
  cartShow.close();
})

cartValueClose.addEventListener("click", function(){
  localStorage.removeItem("totalItems");
  cartAdd.innerHTML = "";
  cartValue.innerHTML = "";
  cartValueClose.style.display = "none";
})


  
  // cartShow.addEventListener("click", function(event){
  
  //   cartShow.close();
  // })



//---------------------

// function showCart() {
//   // cartAdd.innerHTML = "";
//   cartBtns.forEach(function(cart) {
//     cartAdd.innerHTML = totalItems;
    
//     cart.addEventListener("click", function() {
//       total++;
//       localStorage.setItem("totalItems", JSON.stringify(total));
//       cartAdd.innerHTML = total;
//     })
//   })
// }
// showCart();
