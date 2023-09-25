<template>
  <div class="home">
    <Header />
    <Search />
    <section class="home_card">
      <h3>Recent Mixes</h3>
      <div class="card_container">
        <Card
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
          :title="cocktail.strDrink"
          :poster_path="cocktail.strDrinkThumb"
          :idDrink="cocktail.idDrink"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
import Footer from "@/components/footer/Footer.vue";
import Card from "@/components/card/Card.vue";
import { getDerniersCocktails } from "@/services/ApiCocktailDb.js";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Header,
    Search,
    Card,
    Footer,
  },
  data() {
    return {
      cocktails: [], // Assurez-vous que c'est "cocktails" au lieu de "cocktail"
    };
  },
  mounted() {
    // Correction : mounted au lieu de mounteds
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
}
</style>
