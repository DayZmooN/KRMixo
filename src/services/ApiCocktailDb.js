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

export {
  allCocktailNoAlcool,
  getOneCocktails,
  getRandomNoAlcool,
  searchCocktail,
};
