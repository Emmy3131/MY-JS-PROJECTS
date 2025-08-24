class Search {
  constructor(query) {
    this.query = query;
    this.results = [];
  }

  async getResults() {
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}`);
      const data = await res.json();
      if(data.status === 'success'){
        this.results = data.data.recipes || [];
      }
     
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }
}

export default Search;
