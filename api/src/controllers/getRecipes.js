require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const url = "https://api.spoonacular.com/recipes";

const getRecipes = async () => {
  const recipesApi = await axios.get(
    `${url}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  return recipesApi.data.results;
};

module.exports = getRecipes;
