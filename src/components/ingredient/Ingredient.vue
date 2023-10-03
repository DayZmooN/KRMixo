<template>
  <div class="ingredient-container">
    <h1>Liste des ingrédients</h1>
    <div class="ingredient-list" v-if="ingredients && ingredients.length">
      <div
        class="img-span"
        v-for="ingredient in ingredients"
        :key="ingredient.strIngredient1"
        @click="$emit('ingredientSelected', ingredient.strIngredient1)"
      >
        <img
          :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-small.png`"
          :alt="`${ingredient.strIngredient1} image`"
        />
        <span>{{ ingredient.strIngredient1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientComponent",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log("Ingredients:", this.ingredients);
  },
  methods: {
    handleImageError(ingredientName) {
      this.$emit("handleImageError", ingredientName);
    },
  },
};
</script>

<style scoped lang="scss">
.ingredient-container {
  width: 100%;

  .ingredient-list {
    overflow: scroll;
    display: flex;
    align-items: center;
    .img-span {
      width: 100px;
      text-align: center;

      img {
        max-width: initial;
      }
    }
  }
}
</style>
