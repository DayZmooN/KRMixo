<template>
  <div class="slider-wrapper">
    <swiper :slides-per-view="5" :space-between="20" :freeMode="true">
      <swiper-slide
        v-for="ingredient in ingredients"
        :key="ingredient.strIngredient1"
      >
        <div
          class="slide-ingredient"
          @click="$emit('ingredientSelected', ingredient.strIngredient1)"
        >
          <img
            :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-small.png`"
            :alt="`${ingredient.strIngredient1} image`"
          />
          <span>{{ ingredient.strIngredient1 }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Importez les composants Swiper et SwiperSlide
import { Swiper, SwiperSlide } from "swiper/vue";

// Importez les styles Swiper
import "swiper/css";

export default {
  name: "IngredientComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.slider-wrapper {
  width: 100%;
  position: relative;
  gap: 20px;

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
}
.swiper-slide .swiper-slide-active {
  gap: 20px;
}
.swiper-slide {
  margin: auto 20px !important;
}
.slide-ingredient {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  width: 100px;
}
</style>
