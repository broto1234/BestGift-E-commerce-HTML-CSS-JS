const search = location.search;  // window.location.search;
const params = new URLSearchParams(search);
let id = params.get("id");

const detailCategory = document.querySelector("#detailCategory");

fetch(`/data/${id}.json`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    
    const sectionElm = document.createElement("section");

    sectionElm.classList.add("detail");

    sectionElm.innerHTML = `
      <div class="detail__left">
        <img class="detail__img" src="/imgs/${data.image}">
      </div>
      <div class="detail__right">
        <p class="detail__title">${data.title}</p>
        <p class="detail__subtitle">${data.subtitle}</p>
        <p class="detail__text">${data.text}</p>
      </div>    
    `;
    detailCategory.append(sectionElm);

  })