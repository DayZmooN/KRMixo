<template>
  <router-link :to="{ name: 'DetailView', params: { idDrink: idDrink } }">
    <div class="card" :idDrink="idDrink">
      <img :src="poster_path" alt="{{ title }}" />

      <div class="characteristic_card">
        <h1>{{ title }}</h1>
        <!-- <div class="type_cocktaim">
          <img class="icon" src="@/assets/icon/glass.svg" alt="glass" />
          <h2>Mocktail</h2>
        </div>
        <div class="times_dificult">
          <div class="times">
            <img class="icon" src="@/assets/icon/time.svg" alt="glass" />
            <h2>20 min</h2>
          </div>
          <div class="dificult">
            <span>{{ dificulty || "Easy" }}</span>
          </div>
        </div>
        <div class="heard">
          <img class="icon" src="@/assets/icon/heard.svg" alt="like" />
          <span>534</span>
        </div> -->
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    title: String,
    overview: String,
    poster_path: String,
    idDrink: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 300px;
  color: #fb7d8a;
  margin: auto 10px;

  &:hover {
    z-index: 300 !important;
    color: #fff;
    // background: url("~@Picture/back_card.svg");
    border-radius: 40px;
    font-size: 1rem;
    background-size: cover;
    background: linear-gradient(
      180deg,
      rgba(255, 206, 49, 0.85),
      rgba(251, 125, 138, 0.85) 100%
    );
    padding: 12px;
    transition: all 0.6s ease-in-out both;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 700px) {
    width: 150px;
    margin: auto 10px;
    &:hover {
      width: 160px;
    }
  }

  @media screen and (min-width: 885px) {
    width: 210px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    border-radius: 70px;
    color: #fff;
    white-space: nowrap;
    position: relative;
    transition: all 0.3s ease-in-out;
    text-shadow: 0 0 5px #ccc, 0 0 10px #ccc, 0 0 15px #ccc, 0 0 20px #fb7d8a,
      0 0 35px #fb7d8a, 0 0 40px #fb7d8a, 0 0 45px #fb7d8a, 0 0 50px #fb7d8a;

    &:hover {
      width: 215px;
      white-space: nowrap;
      box-shadow: rgba(8, 8, 8, 0.206) 0px 7px 29px 0px;
      // animation: translation 0.3s ease-in-out;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 900;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
    // &:hover {
    //   width: 240px;
    // }
  }

  @media screen and (min-width: 1420px) {
    width: 240px;
    &:hover {
      width: 290px;
    }
  }
  img {
    width: 100%;
    border-radius: 40px;
  }

  @keyframes translation {
    0% {
      transform: translateY(0);
    }

    45% {
      transform: scale(1.1);
    }

    50% {
      transform: translateY(2px);
    }

    // 53% {
    //   transform: scale(1.15);
    // }

    55% {
      transform: translateY(-7px);
      /* Position à mi-chemin */
    }

    // 83% {
    //   transform: scale(1);
    // }

    100% {
      transform: translateX(0);
      // transform: scale(1);
    }
  }

  .characteristic_card {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 880px) {
      position: absolute;
      bottom: 20px;
      width: 100%;
      // left: 20px;
      z-index: 200;
      max-width: 89%;
      transition: 0.6s ease-in-out;
      &:hover {
        bottom: 30px;
      }
    }
    h1 {
      font-size: 1.1rem;

      @media screen and (min-width: 780px) {
        font-size: 1.2rem;
        animation: neon6 2.5s ease-in-out infinite alternate;
        white-space: pre-wrap;
        border-radius: 18px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
}
</style>
