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

    <!-- <nav class="nav">
      <div @click="goBack" class="arrow">
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L1 8L8 15"
            stroke="#FB7D8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1 v-if="oneCocktail">{{ oneCocktail.strDrink }}</h1>
      <div class="heart">
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6154 1.00012C18.5221 0.985652 21 2.304 21 6.5653C21 10.8266 10.9999 17 10.9999 17C10.9999 17 1 10.8266 1 6.5653C1 2.304 3.47786 1.0028 6.38462 1.00012C7.92308 0.998698 10.0398 1.87287 11.0001 3.08706C11.9602 1.87287 14.0597 1.00786 15.6154 1.00012Z"
            stroke="#FB7D8A"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav> -->
    <!-- <div class="description-picture">
      <div class="picture">
        <img
          v-if="oneCocktail"
          :src="oneCocktail.strDrinkThumb"
          :alt="oneCocktail.strDrink"
        />
      </div>
      <div class="paragraphe-cocktail">
        <div class="paragraphe-category">
          <p v-if="oneCocktail">{{ oneCocktail.strInstructions }}</p>
        </div>
        <div class="category">
          <span>{{ oneCocktail.strCategory }}</span>
        </div>
      </div>
    </div>

    <div class="wave-container">
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          class="wave-path"
          fill="#FEF9E4"
          d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,64C672,75,768,117,864,138.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div> -->

    <!-- <div class="containter-ingrediant">
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
      <div class="container-bubble">
        <div
          v-for="ingredient in filteredIngredients"
          :key="ingredient.index"
          class="bubble-ingrediant"
        >
          <div class="picture-ingredients">
            <img
              v-if="!imageError[`strIngredient${ingredient.index}`]"
              :src="getIngredientImageUrl(ingredient.name)"
              alt=""
              @error="handleImageError(`strIngredient${ingredient.index}`)"
            />
            <div v-else>
              <span>{{ ingredient.name }}</span>
              <span>{{ ingredient.measure }}</span>
            </div>
          </div>

          <div class="qty-name">
            <span>{{ ingredient.measure }}</span>
            <span>{{ ingredient.name }}</span>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container-cocktail">
      <h3>Mélanges récents</h3>
      <div class="cocktail">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
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
    // getIngredientImageUrl(ingredientName) {
    //   if (!ingredientName) return "";
    //   const formattedName = ingredientName.toLowerCase().replace(/ /g, "_");
    //   return `https://www.thecocktaildb.com/images/ingredients/${formattedName}-Medium.png`;
    // },

    async allCocktailNoAlcool() {
      try {
        const response = await allCocktailNoAlcool();
        const data = await response.json();
        const currentIdDrink = this.$route.params.idDrink; // Obtenez l'idDrink actuel à partir des paramètres de la route

        if (data.drinks && data.drinks.length > 0) {
          // Filtrer les cocktails pour éliminer celui qui a le même idDrink que le cocktail actuel
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
  border-radius: 18px;
  @media screen and (min-width: 780px) {
    width: auto;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1200px;
    margin: auto;
  }
  // max-width: 1400px;

  .wave-container {
    // overflow: hidden;
    width: 100%;
    height: 50px;

    @media screen and (min-width: 780px) {
      height: 140px;
    }
  }

  .wave {
    bottom: 0;
    background: #fcfcfc;
    border-radius: 18px;
  }

  .wave-path {
    animation: wave-path-animation 2s cubic-bezier(0.4, 0, 0.2, 1) alternate
      infinite;
  }

  @keyframes wave-path-animation {
    0% {
      d: path(
        "M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,64C672,75,768,117,864,138.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      );
    }

    50% {
      d: path(
        "M0,48L48,58.3C96,69,192,91,288,90.7C384,91,480,69,576,80C672,91,768,133,864,154.7C960,176,1056,176,1152,154.7C1248,133,1344,91,1392,69.3L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      );
    }

    100% {
      d: path(
        "M0,58L48,58.3C96,69,192,91,288,90.7C384,91,480,69,576,80C672,91,768,133,864,154.7C960,176,1056,176,1152,154.7C1248,133,1344,91,1392,69.3L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      );
    }
  }

  .carousel__slide,
  .carousel__slide--visible,
  .carousel__slide--active {
    transform: initial;
    width: initial !important;
  }

  .carousel__slide {
    width: 99px !important;
  }
  .container-cocktail {
    margin-bottom: 90px;
    width: 100%;
    padding: 20px;
    .carousel__slide,
    .carousel__slide--visible,
    .carousel__slide--active {
      transform: initial;
      width: initial !important;
    }
  }
}
</style>
