<template>
  <div class="home">
    <Header />
    <Search />
    <section class="home_card">
      <h3>Recent Mixes</h3>
      <swiper
        v-if="cocktails.length > 0"
        :slides-per-view="4"
        :space-between="20"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
          <Card
            :title="cocktail.strDrink"
            :poster_path="cocktail.strDrinkThumb"
            :idDrink="cocktail.idDrink"
          />
        </swiper-slide>
        <!-- Navigation buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
import Footer from "@/components/footer/Footer.vue";
import Card from "@/components/card/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";

// Installer le module Navigation
SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/navigation";
import { getDerniersCocktails } from "@/services/ApiCocktailDb.js";

export default {
  name: "HomeView",
  components: {
    Header,
    Search,
    Card,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      cocktails: [],
    };
  },
  mounted() {
    this.getDerniersCocktails();
  },
  methods: {
    async getDerniersCocktails() {
      try {
        const response = await getDerniersCocktails();
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.cocktails = data.drinks.slice(0, 20);
        } else {
          console.log("Aucun cocktail trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home_card {
  width: 100%;

  h3 {
    text-align: left;
    margin: 20px auto;
  }

  .swiper {
    width: 100%;
    display: flex;
    // height: 300px;
    align-items: center;
    margin: 10px auto;
    padding: 20px;
  }

  .swiper-slide {
    height: 100%;
    transition: all 1.3s ease;

    &:hover {
      width: 300px !important;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    z-index: 10;
    cursor: pointer;
    border-radius: 99px;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }
}
</style>
