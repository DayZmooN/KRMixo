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
  <div class="container-bubble">
    <!-- Ingrédient 1 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient1)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient1)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure1 }}</span>
        <span>{{ oneCocktail.strIngredient1 }}</span>
      </div>
    </div>

    <!-- Ingrédient 2 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient2)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient2)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure2 }}</span>
        <span>{{ oneCocktail.strIngredient2 }}</span>
      </div>
    </div>

    <!-- Ingrédient 3 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient3)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient3)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure3 }}</span>
        <span>{{ oneCocktail.strIngredient3 }}</span>
      </div>
    </div>

    <!-- Ingrédient 4 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient4)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient4)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure4 }}</span>
        <span>{{ oneCocktail.strIngredient4 }}</span>
      </div>
    </div>

    <!-- Ingrédient 5 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient5)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient5)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure5 }}</span>
        <span>{{ oneCocktail.strIngredient5 }}</span>
      </div>
    </div>

    <!-- Ingrédient 6 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient6)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient6)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure6 }}</span>
        <span>{{ oneCocktail.strIngredient6 }}</span>
      </div>
    </div>

    <!-- Ingrédient 7 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient7)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient7)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure7 }}</span>
        <span>{{ oneCocktail.strIngredient7 }}</span>
      </div>
    </div>

    <!-- Ingrédient 8 -->
    <div
      class="bubble-ingrediant"
      v-if="getIngredientImageUrl(oneCocktail.strIngredient8)"
    >
      <div class="picture-ingredients">
        <img :src="getIngredientImageUrl(oneCocktail.strIngredient8)" alt="" />
      </div>
      <div class="qty-name">
        <span>{{ oneCocktail.strMeasure8 }}</span>
        <span>{{ oneCocktail.strIngredient8 }}</span>
      </div>
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
