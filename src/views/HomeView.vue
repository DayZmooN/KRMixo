<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Header,
  },
};
</script>
