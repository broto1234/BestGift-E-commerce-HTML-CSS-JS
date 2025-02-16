const rootCollection = document.querySelector("#rootCollection");

fetch("/data/collections.json")
  .then(response => response.json())
  .then(data =>{
    console.log(data);

    const divFirstElm = document.createElement("div");
    divFirstElm.classList.add("collections");
    divFirstElm.innerHTML = `
      <h1 class="collec--header">${data.collections.headline}</h1>
      <p class="collec--para">${data.collections.text}</p>
    `

    const divSecondElm = document.createElement("div");
    divSecondElm.classList.add("collection__cards");

    divSecondElm.innerHTML = 
    data.collections.items.map(item => `      
      <div class="collection__card">
        <div class="thumbGallery">
          <img class="thumbGallery__large" src="/imgs/${item.imgOne}" alt="${item.imgOne}">
           <div class="thumbGallery__thumbnails">
             <img class="thumbGallery__small" src="/imgs/${item.imgOne}" alt="${item.imgOne}">
             <img class="thumbGallery__small" src="/imgs/${item.imgTwo}" alt="${item.imgTwo}">
             <img class="thumbGallery__small" src="/imgs/${item.imgThree}" alt="${item.imgThree}">          
           </div>
        </div>
        <h5>${item.title}</h5>
        <p>${item.text}</p>
        <button type="button" class="btn collection__card--btn">${item.btntext}</button>
      </div>   
    `).join("");

    const divThirdElm = document.createElement("div");
    divThirdElm.classList.add("collection__cards--show");

    divThirdElm.innerHTML = 
    data.collections.showMoreItems.map(smItem => `      
      <div class="collection__card collection__card--seFlere">
        <div class="thumbGallery">
          <img class="thumbGallery__large" src="/imgs/${smItem.imgOne}" alt="${smItem.imgOne}">
           <div class="thumbGallery__thumbnails">
             <img class="thumbGallery__small" src="/imgs/${smItem.imgOne}" alt="${smItem.imgOne}">
             <img class="thumbGallery__small" src="/imgs/${smItem.imgTwo}" alt="${smItem.imgTwo}">
             <img class="thumbGallery__small" src="/imgs/${smItem.imgThree}" alt="${smItem.imgThree}">          
           </div>
        </div>
        <h5>${smItem.title}</h5>
        <p>${smItem.text}</p>
        <button type="button" class="btn collection__card--btn">${smItem.btntext}</button>
      </div>   
    `).join("");



    const btnElm = document.createElement("button");

    btnElm.classList.add("btn", "flere--btn");

    btnElm.innerHTML = `    
    Vis flere <span class="flere--span">
          <i class="fa-solid fa-chevron-right"></i>
          <i class="fa-solid fa-chevron-right"></i>
          <i class="fa-solid fa-chevron-right"></i>
          </span>
    `;


      const gameofthronesElm = document.createElement("div");
      gameofthronesElm.classList.add("gameofthrones");
      const dCg = data.collections.gameofthrones;

      gameofthronesElm.innerHTML = `
      
      <div class="game__img">
          <img src="imgs/${dCg.imgGame}" alt="Game of thrones">
        </div>
        <div class="game__text">
          <img src="imgs/${dCg.imgGamelogo}" alt="game of thrones logo">
          <h5>${dCg.header}</h5>
          <p>${dCg.text}</p>
          <button type="button" class="btn game--btn">${dCg.btnText}</button>
        </div>
      `;

    rootCollection.append(divFirstElm, divSecondElm, divThirdElm, btnElm, gameofthronesElm);
    
  })