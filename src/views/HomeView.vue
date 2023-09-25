<template>
  <div class="home">
    <Header />
    <search />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Search from "@/components/search/Search.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Header,
    Search,
  },
};
</script>

<style></style>
