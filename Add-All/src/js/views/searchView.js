import { elements } from "./base";
export const getInput = ()=> elements.searchInput.value
export const clearInput = ()=> elements.searchInput.value = ''


export const renderRecipes = recipes => {
  recipes.forEach(recipe => {
    const rec = `
      <div>
        <a href=#${recipe.id}>
          <div class="product-image-container">
            <img class="product-image" src="${recipe.image_url}" alt="">
          </div>
          <div class="product-details-box">
            <p class="name-tag">${recipe.title}</p>
            <p class="price-tag">$${recipe.publisher}</p>
          </div>
        </a>
      </div>
    `;
    elements.resultContainer.insertAdjacentHTML('beforeend', rec);
  });
};

export const clearResult = ()=> elements.resultContainer.innerHTML = ''
