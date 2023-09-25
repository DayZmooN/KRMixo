<template>
  <div class="home">
    <Header />
    <Search />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
import Footer from "@/components/footer/Footer.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Header,
    Search,
    Footer,
  },
};
</script>

<style></style>
