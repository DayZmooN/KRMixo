<template>
  <div class="ingredient-container">
    <h1>Liste des ingrédients</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim sint
      modi reprehenderit aut nulla sapiente voluptatem corrupti repellendus.
      Possimus ea laboriosam ratione, repellendus aut nihil quisquam nostrum
      temporibus magnam.
    </p>
    <!-- <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.idIngredient">
        {{ ingredient.strIngredient }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "IngredientView",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.ingredient-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.ingredient-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.ingredient-container ul {
  list-style-type: none;
  padding: 0;
}

.ingredient-container ul li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
