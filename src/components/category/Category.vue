<template>
  <div class="container-list-category">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide
        v-for="category in categories"
        :key="category.strCategory"
        @click="$emit('categorySelected', category.strCategory)"
      >
        {{ category.strCategory }}
      </Slide>
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
  name: "CategoryVue",
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
.container-list-category {
  padding: 20px;
  ol {
    max-width: 700px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    li {
      padding: 20px;
      font-size: 1.2rem;
      font: 400;

      &:hover {
        background: pink;
        border-radius: 99px;
        color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
}
</style>
