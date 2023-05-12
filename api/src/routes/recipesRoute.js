const { Router } = require("express");

const recipesRoute = Router();
const getRecipes = require("../controllers/getRecipes");

recipesRoute.get("/", async (req, res) => {
  try {
    const recipes = await getRecipes();
    recipes.length
      ? res.status(200).json(recipes)
      : res.status(400).json("Cannot find recipes.");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = recipesRoute;
