<template>
  <div class="home">
    <Header />
    <SearchBar @search="performSearch" />
    <section class="home_card">
      <h3>Mélanges récents</h3>
      <swiper
        v-if="cocktails.length > 0"
        :slides-per-view="4"
        :space-between="20"
        navigation
        @swiper="onSwiperRecent"
        @slideChange="onSlideChangeRecent"
      >
        <swiper-slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
          <Card
            :title="cocktail.strDrink"
            :poster_path="cocktail.strDrinkThumb"
            :idDrink="cocktail.idDrink"
          />
        </swiper-slide>

        <!-- Boutons de navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>

      <!-- Ajout du swiper pour les cocktails aléatoires sans alcool -->
      <div class="randomCocktail">
        <h1>Cocktails aléatoires sans alcool</h1>
        <div class="swiper-slide">
          <Card
            v-for="randomCocktail in randomCocktails"
            :key="randomCocktail.idDrink"
            :title="randomCocktail.strDrink"
            :poster_path="randomCocktail.strDrinkThumb"
            :idDrink="randomCocktail.idDrink"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import SearchBar from "@/components/search/Search.vue";
import Card from "@/components/card/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";

// Installer le module Navigation
SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/navigation";
import { allCocktailNoAlcool } from "@/services/ApiCocktailDb.js";
import { getRandomNoAlcool } from "@/services/ApiCocktailDb.js";
import { searchCocktail } from "@/services/ApiCocktailDb.js";

export default {
  name: "HomeView",
  components: {
    Header,
    SearchBar,
    Card,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiperRecent = (swiper) => {
      console.log(swiper);
    };
    const onSlideChangeRecent = () => {
      console.log("Changement de diapositive (récent)");
    };

    const onSwiperRandom = (swiper) => {
      console.log(swiper);
    };
    const onSlideChangeRandom = () => {
      console.log("Changement de diapositive (aléatoire)");
    };

    return {
      onSwiperRecent,
      onSlideChangeRecent,
      onSwiperRandom,
      onSlideChangeRandom,
    };
  },
  data() {
    return {
      cocktails: [],
      randomCocktails: [],
    };
  },
  mounted() {
    this.allCocktailNoAlcool();
    this.getRandomNoAlcool(); // Ajout de l'appel pour les cocktails aléatoires sans alcool
  },
  methods: {
    async allCocktailNoAlcool() {
      try {
        const response = await allCocktailNoAlcool();
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
    async getRandomNoAlcool() {
      try {
        const response = await getRandomNoAlcool();
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.randomCocktails = data.drinks.slice(0, 20);
        } else {
          console.log("Aucun cocktail aléatoire sans alcool trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
      }
    },
    async performSearch(query) {
      const response = await searchCocktail(query);
      const data = await response.json();
      this.cocktails = data.drinks || [];
    },
  },
};
</script>

<style scoped lang="scss">
.home_card {
  width: 100%;
  max-width: 98%;
  margin: auto;

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
  .randomCocktail {
    margin: 78px auto;
  }
  .swiper-slide {
    height: 100%;
    width: 200px !important;
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
