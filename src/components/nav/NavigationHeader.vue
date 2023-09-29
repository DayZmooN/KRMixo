<template>
  <nav class="nav">
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
    <h1 v-if="cocktail">{{ cocktail.strDrink }}</h1>
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
</template>

<script>
export default {
  props: {
    cocktail: Object,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
nav {
  // height: 40px;
  background: #fef9e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 20px;

  @media screen and (min-width: 1300px) {
    width: 100%;
    max-width: 1200px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1200px;
  }

  h1 {
    font-size: 1rem;
    animation: neon6 2.5s ease-in-out infinite alternate;
    line-height: 1;
    text-decoration: none;
    color: #fb7d8a;

    @media screen and (min-width: 780px) {
      font-size: 1.5rem;
    }
  }
}

@keyframes neon6 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fb7d8a,
      0 0 70px #fb7d8a, 0 0 80px #fb7d8a, 0 0 100px #fb7d8a, 0 0 150px #fb7d8a;
  }

  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fb7d8a,
      0 0 35px #fb7d8a, 0 0 40px #fb7d8a, 0 0 50px #fb7d8a, 0 0 75px #fb7d8a;
  }
}
</style>
