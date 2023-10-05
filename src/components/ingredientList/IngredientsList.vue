<template>
  <div class="containter-ingrediant">
    <div class="arrow_ingredients">
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
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <!-- <div class="container-bubble"> -->
      <Slide v-for="ingredient in ingredients" :key="ingredient.index">
        <div class="picture-ingredients">
          <img
            v-if="ingredient.name"
            :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-small.png`"
            :alt="`${ingredient.name} image`"
            @error="handleImageError"
          />

          <!-- <div>
            <span>{{ ingredient.name }}</span>
            <span>{{ ingredient.measure }}</span>
          </div> -->
        </div>

        <div class="qty-name">
          <span>{{ ingredient.measure }}</span>
          <span>{{ ingredient.name }}</span>
        </div>
      </Slide>
      <!-- </div> -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "ingredientComponent",
  props: {
    ingredients: Array,
    settings: Object,
    breakpoints: Object,
    imageError: Object,
  },

  components: {
    Carousel,
    Slide,
    Navigation,
  },

  mounted() {},
  methods: {
    handleImageError(event) {
      event.target.src = "path/to/default/image.png";
    },
  },
};
</script>

<style scoped lang="scss">
.containter-ingrediant {
  height: auto;
  background: #fff;
  margin: auto;
  padding: 20px;
  .arrow_ingredients {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  .carousel_slide {
    width: 99px;
    height: 99px;
  }
  .carousel__slide,
  .carousel__slide--visible,
  .carousel__slide--active {
    transform: initial;
    width: 100px !important;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 145px;
    height: 170px;
    background: #fef9e4;
    margin-left: 10px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #fbe897;
    .picture-ingredients {
      width: 99px;
      height: 110px;
      display: flex;
      align-items: center;

      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .qty-name {
      padding: 10px;
      text-align: center;
      display: block;

      span {
        display: block;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
