const rootCategories = document.querySelector("#rootCategories");

rootCategories.classList.add("category");

rootCategories.innerHTML = `
<h2 class="category--headerText">
    Spar 20% på populære kategorier
</h2>
`;

fetch("/data/categories.json")
  .then(response => response.json())
  .then(data => {
    // console.log(data);

    const divElm = document.createElement("div");
    divElm.classList.add("categories");
    divElm.innerHTML = data.categories.map(ctg => `
      <div class="category__card">
        <a href="category.html?id=${ctg.id}" target="_blank">
            <img src="/imgs/${ctg.image}" alt="armband">
            <p class="category--para">
              ${ctg.price}
            </p>
        </a>
      </div>     
      
      `).join("");

      rootCategories.append(divElm);    
  });
