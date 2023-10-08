<template>
  <div class="slider-wrapper">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="ingredient in ingredients" :key="ingredient.strIngredient1">
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
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
// Importez les composants Swiper et SwiperSlide
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// Importez les styles Swiper
// import "swiper/css";

export default {
  name: "IngredientComponent",
  components: {
    Carousel,
    Slide,
    Navigation,
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

  .slider-ingredient {
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
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  gap: 10px;
  text-align: center;
  width: 100px;
}
.carousel__slide {
  width: initial !important;
  justify-content: initial;
  transition: 1.6s ease-in-out !important;
  scroll-behavior: smooth;
}
</style>
