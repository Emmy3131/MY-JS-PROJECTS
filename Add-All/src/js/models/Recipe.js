export default class Recipe{
  constructor(id){
    this.id = id
  }

  async getRecipe(){
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}`);
      const data = await res.json();
      if(data.status === 'success'){
        this.result = data.data.recipe ;
      }
     
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }
}