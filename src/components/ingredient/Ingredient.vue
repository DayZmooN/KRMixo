<template>
  <div class="slider-wrapper">
    <div class="ingredient-container slider-container">
      <h1>Liste des ingrédients</h1>
      <button @click="scrollLeft" class="arrow arrow-left">←</button>
      <div ref="sliderRef" class="ingredient-list">
        <div
          class="img-span"
          v-for="ingredient in ingredients"
          :key="ingredient.strIngredient1"
          @click="$emit('ingredientSelected', ingredient.strIngredient1)"
        >
          <img
            :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-small.png`"
            :alt="`${ingredient.strIngredient1} image`"
            @load="imageLoaded"
          />
          <span>{{ ingredient.strIngredient1 }}</span>
        </div>
      </div>
      <button @click="scrollRight" class="arrow arrow-right">→</button>
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
    return {
      scrollAmount: 0,
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.sliderRef.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    },
    scrollRight() {
      this.$refs.sliderRef.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    },
    imageLoaded() {
      // Votre logique pour l'image chargée
    },
  },
};
</script>

<style scoped lang="scss">
.ingredient {
  overflow: scroll;
}

.ingredient-container {
  width: 100%;
  position: relative;
  overflow: hidden;

  .ingredient-list {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .img-span {
    width: 100px;
    text-align: center;

    img {
      max-width: initial;
    }
  }

  .arrow {
    cursor: pointer;
    font-size: 2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    right: 0;
  }
}
</style>

<!-- <style scoped lang="scss">
.ingredient-container {
  width: 100%;
  position: relative;

  .ingredient-list {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .img-span {
    width: 100px;
    text-align: center;

    img {
      max-width: initial;
    }
  }

  .arrow {
    cursor: pointer;
    font-size: 2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    right: 0;
  }
}
</style> -->
