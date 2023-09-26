function allCocktailNoAlcool() {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  );
}
function getDerniersCocktails() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
}

export { allCocktailNoAlcool, getDerniersCocktails };
