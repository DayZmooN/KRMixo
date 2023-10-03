function allCocktailNoAlcool() {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  );
}

function getOneCocktails(idDrink) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + idDrink
  );
}
function getRandomNoAlcool() {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Non_Alcoholic`
  );
}

function searchCocktail(word) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`
  );
}

function getCategory() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
}
function getSeachCategory(searchCategory) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCategory}`
  );
}
function getCocktailsByCategory(category) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );
}
function getIngredient() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
}
function getCocktailsByIngredient(ingredient) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
}
function searchIngredient(ingredientWord) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientWord}`
  );
}
export {
  allCocktailNoAlcool,
  getOneCocktails,
  getRandomNoAlcool,
  searchCocktail,
  getCategory,
  getCocktailsByCategory,
  getIngredient,
  getCocktailsByIngredient,
  searchIngredient,
  getSeachCategory,
};
