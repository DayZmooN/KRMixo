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
        <p
          v-if="cocktail"
          v-html="formattedInstructions.replace(/\n/g, '<br>')"
        ></p>
      </div>

      <div class="CategoryName" @click="goToCategory">
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
  computed: {
    formattedInstructions() {
      if (this.cocktail && this.cocktail.strInstructions) {
        return this.cocktail.strInstructions.replace(/\./g, ".\n");
      }
      return "";
    },
  },
  methods: {
    goToCategory() {
      if (this.cocktail && this.cocktail.strCategory) {
        this.$router.push({
          name: "CategoryName",
          params: { categoryName: this.cocktail.strCategory },
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.description-picture {
  background-color: #fef9e4;
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
    @media screen and (min-width: 800px) {
      width: 360px;
    }
    @media screen and (min-width: 1200px) {
      width: 360px;
    }

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
      p {
        font-size: 0.95rem;
        font-weight: 500;
        font: 400;
        color: #fb7d8a;
        line-height: 1.57rem;
        @media screen and (min-width: 800px) {
          font-size: 1.2rem;
        }
      }
    }

    .CategoryName {
      margin: 20px auto;

      span {
        font-size: 1.2rem;
        color: #0b2430;
        cursor: pointer;
        position: relative;
        &:hover::after {
          color: #fb7d8a;
          content: "category";
          display: block;
          position: absolute;
          top: 100%;
          font-size: 0.9em;
          left: 0;
          // background-color: #f1f1f1;
          padding: 10px;
          // border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
    }
  }
}
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
</style>
