function getDerniersCocktails() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
}
console.log(getDerniersCocktails);
export { getDerniersCocktails };
