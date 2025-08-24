export const elements ={
  cartIcon:document.querySelector('.cart-icon'),
  btn:document.querySelector('.btn'),
  searchInput:document.querySelector('.search-input'),
  cartSection:document.getElementById('cart-section'),
  resultContainer:document.querySelector('.product-container'),
  modal:document.querySelector('.modal'),
  closeModalBtn:document.querySelector('.close-modal')
}

export const renderLoader = parent=>{
  const loader = `
    <div class="spinner-container">
        <div class="spinner"></div>
      </div>
    `;
  parent.insertAdjacentHTML('beforeend', loader)
}

export const clearLoader = ()=>{
  const el = document.querySelector('.spinner-container');

  if(el){
    el.parentNode.removeChild(el)
  }
}


export const toggleCartmenu= () => {
  elements.cartSection.classList.toggle('active');
};
