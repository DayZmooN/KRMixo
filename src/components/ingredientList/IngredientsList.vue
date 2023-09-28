<template>
  <div class="containter-ingrediant">
    <!-- <div class="arrow_ingredients">
      <span>Ingredients</span>
      <div class="arrow-right">
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 15L8 8L1 1"
            stroke="#FB7D8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="container-bubble">
      <div
        v-for="ingredient in filteredIngredients"
        :key="ingredient.index"
        class="bubble-ingrediant"
      >
        <div class="picture-ingredients">
          <img
            v-if="!imageError[`strIngredient${ingredient.index}`]"
            :src="getIngredientImageUrl(ingredient.name)"
            alt=""
            @error="handleImageError(`strIngredient${ingredient.index}`)"
          />
        </div>
        <div class="qty-name">
          <span>{{ ingredient.measure }}</span>
          <span>{{ ingredient.name }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    ingredients: Array,
    imageError: Object,
  },
  methods: {
    handleImageError(ingredientIndex) {
      this.$emit("handleImageError", ingredientIndex);
    },
    getIngredientImageUrl(ingredientName) {
      if (!ingredientName) return "";
      const formattedName = ingredientName.toLowerCase().replace(/ /g, "_");
      return `https://www.thecocktaildb.com/images/ingredients/${formattedName}-Medium.png`;
    },
  },
};
</script>
