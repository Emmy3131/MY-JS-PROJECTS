//API: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
import {clearLoader, elements, renderLoader, toggleCartmenu,  } from "./views/base.js";
import Search from "./models/Search.js";
import * as SearchView from "./views/searchView.js";

const state = {}

/****Search Controller */
const controlSearch = async()=>{
  //1) Get Input
  const query = SearchView.getInput();
  if(query){
    //2) New search object and add to state
    state.search = new Search(query)
    //3) Prepare UI for result
    SearchView.clearInput();
    SearchView.clearResult()
    renderLoader(elements.resultContainer)
    try{
      //4) Search for recipe
      await state.search.getResults();
      //5) Render result on UI
      clearLoader()
      SearchView.renderRecipes(state.search.results)
    }catch(err){
      console.log('ERROR😢', err);
      
    }
  }else{
    alert("Please provide what you are searching for")
  }
}

elements.btn.addEventListener('click', controlSearch);


/*******Recipe Controller */
const controlRecipe = async()=>{
  //1) Get ID from URL
  const id = window.location.hash.replace("#", '');
  if(id){

  }else{
    alert('No ID')
  }
}

//Handle menu bar toggling
elements.cartIcon.addEventListener('click', toggleCartmenu)



elements.resultContainer.addEventListener('click', ()=>{
  controlRecipe()
  document.body.style.overflow='hidden'
  elements.modal.classList.toggle('hidden')
})

elements.closeModalBtn.addEventListener('click', ()=>{
    document.body.style.overflow='auto'
  elements.modal.classList.add('hidden')
})
