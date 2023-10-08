<template>
  <Header />
  <article class="details-cocktail">
    <Nav v-if="oneCocktail" :cocktail="oneCocktail" />
    <CocktailDescription v-if="oneCocktail" :cocktail="oneCocktail" />
    <Ingredient
      :ingredients="filteredIngredients"
      :settings="settings"
      :breakpoints="breakpoints"
    />
    <div class="container-cocktail">
      <h3 class="h3-card-detailCocktail">Mélanges récents</h3>
      <div class="cocktail">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            class="track"
          >
            <Card
              :title="cocktail.strDrink"
              :poster_path="cocktail.strDrinkThumb"
              :idDrink="cocktail.idDrink"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </article>

  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Nav from "@/components/nav/NavigationHeader.vue";
import CocktailDescription from "@/components/cocktailDescription/CocktailDescription.vue";
import Ingredient from "@/components/ingredientList/IngredientsList.vue";
import Footer from "@/components/footer/Footer.vue";

import { getOneCocktails } from "@/services/ApiCocktailDb";
import Card from "@/components/card/Card.vue";
import { allCocktailNoAlcool } from "@/services/ApiCocktailDb.js";
// import { Swiper } from "swiper/vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "DetailView",
  components: {
    Header,
    Nav,
    CocktailDescription,
    Ingredient,
    Footer,
    Card,
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    title: String,
    strDrink: String,
    poster_path: String,
    overview: String,
    strDrinkThumb: String,
    idDrink: {
      type: [String, Number],
      required: true,
    },
    ingredients: {
      type: Array,
    },
  },
  data() {
    return {
      oneCocktail: {},
      // cocktail: {},
      cocktails: [],
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
  computed: {
    filteredIngredients() {
      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredientName = this.oneCocktail[`strIngredient${i}`];
        const ingredientMeasure = this.oneCocktail[`strMeasure${i}`];
        if (ingredientName) {
          ingredients.push({
            name: ingredientName,
            measure: ingredientMeasure,
            index: i,
          });
        }
      }
      console.log("Filtered Ingredients:", ingredients); // Pour le débogage
      return ingredients;
    },
    visibleCocktails() {
      return this.cocktails.slice(
        this.currentSlide,
        this.currentSlide + this.slidesToShow
      );
    },
  },
  watch: {
    "$route.params.idDrink": {
      immediate: true,
      handler(newIdDrink, oldIdDrink) {
        if (newIdDrink !== oldIdDrink) {
          this.getOneCocktails();
          this.allCocktailNoAlcool();
        }
      },
    },
  },
  mounted() {
    this.getOneCocktails();
    this.allCocktailNoAlcool();
    console.log(this.filteredIngredients);
  },
  methods: {
    async getOneCocktails() {
      const idDrink = this.$route.params.idDrink;
      try {
        const response = await getOneCocktails(idDrink);
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.oneCocktail = data.drinks[0];
          console.log("One Cocktail:", this.oneCocktail); // Pour le débogage
        } else {
          console.error("Aucun cocktail trouvé");
        }
      } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
      }
    },
    async allCocktailNoAlcool() {
      try {
        const response = await allCocktailNoAlcool();
        const data = await response.json();
        const currentIdDrink = this.$route.params.idDrink;
        if (data.drinks && data.drinks.length > 0) {
          this.cocktails = data.drinks
            .filter((cocktail) => cocktail.idDrink !== currentIdDrink)
            .slice(0, 20);
        } else {
          console.log("Aucun cocktail trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
      }
    },
    nextSlide() {
      if (this.currentSlide < this.cocktails.length - this.slidesToShow) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: none;

  @media screen and (min-width: 780px) {
    display: block;
  }
}
.details-cocktail {
  width: 100%;
  background: #fef9e4;
  margin: auto;
  border-radius: 18px;
  @media screen and (min-width: 780px) {
    width: auto;
    max-width: 95%;
  }
  @media screen and (min-width: 1440px) {
    margin: auto;
  }

  .container-cocktail {
    width: 100%;
    margin: 90px auto;
    .h3-card-detailCocktail {
      margin: 20px auto;
    }
  }
}
.carousel__track {
  gap: 10px !important;
  transform: inherit !important;
}
.custom-carousel {
  width: 100%;
  display: flex;
  align-items: center;
  transform: initial;
  gap: 60px;
}

.carousel__slide {
  width: initial !important;
}
</style>
