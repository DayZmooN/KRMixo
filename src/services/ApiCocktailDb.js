function allCocktailNoAlcool() {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  );
}

function getDerniersCocktails(idDrink) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + idDrink
  );
}

export { allCocktailNoAlcool, getDerniersCocktails };
