<template>
  <a :href="'/' + idDrink">
    <div class="card">
      <img :src="poster_path" alt="" />

      <div class="characteristic_card">
        <h1>{{ title }}</h1>
        <div class="type_cocktaim">
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
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    title: String,
    overview: String,
    poster_path: String,
    idDrink: Number,
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  //   max-width: 280px;
  margin: auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: url("~@Picture/back_card.svg");
  background-size: cover;
  border-radius: 0px;
  background: #fb7d8a;
  img {
    width: 300px;
    height: 207px;
  }
  .characteristic_card {
    width: 280px;
    h1,
    h2,
    span {
      text-align: center;
      font: 900;
      color: #fff;
    }
    h1 {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 1.1rem;
    }
    .type_cocktaim,
    .times,
    .heard {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 34px;
        height: 34px;
      }
    }
    .icon {
      width: 34px;
      height: 34px;
    }
    .times_dificult {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .dificult {
        margin: auto 10px;
      }
    }
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
