<template>
  <Header />
  <article class="details-cocktail">
    <nav class="nav">
      <router-link :to="{ name: 'home' }">
        <div class="arrow">
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
      </router-link>
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
    </nav>
    <div class="description-picture">
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
    </div>
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
      <div class="container-bubble">
        <!-- Ingrédients filtrés -->
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
          </div>
          <div class="qty-name">
            <span>{{ ingredient.measure }}</span>
            <span>{{ ingredient.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>

  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import { getDerniersCocktails } from "@/services/ApiCocktailDb";

export default {
  name: "DetailView",
  components: {
    Header,
    Footer,
  },
  props: {
    strDrink: String,
    overview: String,
    strDrinkThumb: String,
    idDrink: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      oneCocktail: {},
      imageError: {},
    };
  },
  computed: {
    filteredIngredients() {
      const ingredients = [];
      for (let i = 1; i <= 8; i++) {
        const ingredientName = this.oneCocktail[`strIngredient${i}`];
        if (ingredientName && !this.imageError[`strIngredient${i}`]) {
          ingredients.push({
            name: ingredientName,
            measure: this.oneCocktail[`strMeasure${i}`],
            index: i,
          });
        }
      }
      return ingredients;
    },
  },
  mounted() {
    this.getDerniersCocktails();
  },
  methods: {
    async getDerniersCocktails() {
      const idDrink = this.$route.params.idDrink;
      try {
        const response = await getDerniersCocktails(idDrink);
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.oneCocktail = data.drinks[0];
        } else {
          console.error("Aucun cocktail trouvé");
        }
      } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
      }
    },
    getIngredientImageUrl(ingredientName) {
      if (!ingredientName) return "";
      const formattedName = ingredientName.toLowerCase().replace(/ /g, "_");
      return `https://www.thecocktaildb.com/images/ingredients/${formattedName}-Medium.png`;
    },
    handleImageError(ingredientIndex) {
      this.imageError = { ...this.imageError, [ingredientIndex]: true };
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

  nav {
    height: 40px;
    background: #fef9e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 10px;

    h1 {
      font-size: 1.2rem;
      animation: neon6 1.5s ease-in-out infinite alternate;
      line-height: 1;
      text-decoration: none;
      color: #ff00de;
    }
  }

  @keyframes neon6 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
        0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }

    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
        0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }

  .description-picture {
    background-color: #fef9e4;
    // height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: auto;

    @media screen and (min-width: 600px) {
      flex-direction: row;
    }

    @media screen and (min-width: 800px) {
      flex-direction: row-reverse;
      max-width: 1000px;
    }

    .picture {
      width: 260px;
      right: 10px;
      margin: 20px auto;

      img {
        width: 100%;
        border-radius: 999px;
      }
    }

    .paragraphe-cocktail {
      max-width: 300px;
      .paragraphe-category {
        p {
          font-size: 1.1rem;
        }
      }
      .category {
        margin: 20px auto;
        span {
          font-size: 1.2rem;
        }
      }
    }
  }

  .arrow_ingredients {
    width: 100%;
    display: flex;
    //   margin: 30px auto;
    gap: 10px;
  }

  .containter-ingrediant {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-bottom: 70px;
    // padding: 20px;
    // overflow: scroll;
    // margin: 10px auto;

    .container-bubble {
      display: flex;
      gap: 10px;
      overflow: scroll;
      padding: 20px;
      width: 100%;
      height: 100%;
      margin-bottom: 78px;

      .bubble-ingrediant {
        width: 145px;
        // height: 120px;
        background: #fef9e4;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fbe897;

        // padding: 10px;
        .picture-ingredients {
          width: 99px;
          height: 90px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .qty-name {
          width: 100%;
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
  }
}
</style>
