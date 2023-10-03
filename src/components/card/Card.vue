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
  width: 130px;
  color: #fb7d8a;
  margin-right: 10px;

  &:hover {
    z-index: 300 !important;
    color: #e1e1e1;
    transition: all 0.6s ease-in-out both;
    backdrop-filter: black 10px;
  }

  @media screen and (min-width: 780px) {
    width: 170px;
    margin: auto 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    // background: url("~@Picture/back_card.svg");
    background-size: cover;
    border-radius: 70px;
    color: #fb7d8a;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
      width: 175px;
      color: #e1e1e1;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      animation: translation 0.3s ease-in-out;
      backdrop-filter: black 10px;
      z-index: 900;
      background: pink;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 190px;
    &:hover {
      width: 300px;
    }
  }

  img {
    // width: 300px;
    border-radius: 40px;

    // height: 207px;
  }

  @keyframes translation {
    0% {
      transform: translateY(0);
      /* Position de départ */
    }

    // 45% {
    //   transform: scale(1.12);
    // }

    50% {
      transform: translateY(2px);
      /* Position à mi-chemin */
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
    @media screen and (min-width: 780px) {
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 200;
      width: auto;
    }

    h1,
    h2,
    span {
      text-align: center;
      font-size: 1.05rem;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
      // font: 900;
      @media screen and (min-width: 780px) {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }

    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    //   .type_cocktaim,
    //   .times,
    //   .heard {
    //     display: flex;
    //     align-items: center;
    //     gap: 10px;

    //     img {
    //       width: 34px;
    //       height: 34px;
    //     }
    //   }
    //   .icon {
    //     width: 34px;
    //     height: 34px;
    //   }
    //   .times_dificult {
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;

    //     .dificult {
    //       margin: auto 10px;
    //     }
    //   }
  }

  // &::before {
  //   content: "";
  //   background: url("~@Picture/back_card.svg");
  //   position: absolute;
  //   background-size: cover;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>
