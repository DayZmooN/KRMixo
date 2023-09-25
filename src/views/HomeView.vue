<template>
  <div class="home">
    <Header />
    <Search />
    <section class="home_card">
      <h3>Recent Mixes</h3>
      <!-- Swiper Component -->
      <swiper
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
// Import des composants
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
import Footer from "@/components/footer/Footer.vue";
import Card from "@/components/card/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue"; // Import de Swiper
import "swiper/css"; // Import du style de Swiper
import "swiper/css/navigation";

import { getDerniersCocktails } from "@/services/ApiCocktailDb.js";

export default {
  name: "HomeView",
  components: {
    Header,
    Search,
    Card,
    Footer,
    Swiper, // Ajout de Swiper
    SwiperSlide, // Ajout de SwiperSlide
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

          // this.cocktails = data.drinks;
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
  }
  .swiper-slide {
    width: 300px;
  }
  .card_container {
    overflow: scroll;
    display: flex;
    width: 100%;
    gap: 10px;
    margin: auto 7px;
    // grid-template-columns: repeat(auto-fill, minmax(290px, auto));
    // grid-gap: 20px;
    justify-items: center;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    z-index: 10;
    cursor: pointer;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }
}
</style>
