<template>
  <div class="bubble-ingrediant">
    <div class="picture-ingredients">
      <img :src="strDrinkThumb" alt="" />
    </div>
    <div class="qty-name">
      <span>{{ oneCocktail.strMeasure1 }}</span>
      <span>{{ oneCocktail.strIngredient1 }}</span>
    </div>
  </div>
  <div class="bubble-ingrediant">
    <div class="picture-ingredients">
      <img :src="strDrinkThumb" alt="" />
    </div>
    <div class="qty-name">
      <span>{{ oneCocktail.strMeasure2 }}</span>
      <span>{{ oneCocktail.strIngredient2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientVue",
  props: {
    oneCocktail: {
      type: Object,
      required: true,
    },
    strDrinkThumb: String,
  },
};
</script>

<style>
/* Votre CSS ici */
</style>
