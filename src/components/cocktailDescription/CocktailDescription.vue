<template>
  <div class="description-picture">
    <div class="picture">
      <img
        v-if="cocktail"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
    </div>
    <div class="paragraphe-cocktail">
      <div class="paragraphe-category">
        <p v-if="cocktail">{{ cocktail.strInstructions }}</p>
      </div>
      <div class="category">
        <span v-if="cocktail">{{ cocktail.strCategory }}</span>
      </div>
    </div>
  </div>
  <div class="wave-container">
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        class="wave-path"
        fill="#FEF9E4"
        d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,64C672,75,768,117,864,138.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    cocktail: Object,
  },
};
</script>
<style scoped lang="scss">
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
    @media screen and (min-width: 800px) {
      flex-direction: row-reverse;
      max-width: 500px;
      margin: 10px auto;
    }
    .paragraphe-category {
      width: 100%;
      text-align: justify;
      padding: 5px;
      p {
        font-size: 0.95rem;
        font-weight: 500;
        font: 400;
        color: #fb7d8a;
        line-height: 1.17rem;
        @media screen and (min-width: 800px) {
          font-size: 1.2rem;
        }
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
</style>
