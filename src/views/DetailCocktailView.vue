<template>
  <Header />
  <article class="details-cocktail">
    <nav class="nav">
      <div class="arrow">
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
      <h1>virgine</h1>
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
    <div class="description-picture">
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <div class="picture">
        <img src="" alt="" />
      </div>
    </div>
    <div class="wave-container">
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          class="wave-path"
          fill="#FEF9E4"
          d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,64C672,75,768,117,864,138.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div class="containter-ingrediant">
      <div class="arrow_ingredients">
        <span>Ingredients</span>
        <div class="arrow-right">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 15L8 8L1 1"
              stroke="#FB7D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="bubble-ingrediant">
        <div class="picture-ingredients">
          <img src="../../src/assets/Picture/karim.jpg" alt="" />
        </div>
        <div class="qty-name">
          <span>8</span>
          <span>lemon</span>
        </div>
      </div>
    </div>
  </article>

  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "DetailView",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: none;

  @media screen and (min-width: 780px) {
    display: block;
  }
}

.details-cocktail {
  width: 100%;
  background: #fff;

  .description-picture {
    background-color: #fef9e4;
    // height: 100px;
    width: 100%;
  }
  .wave-container {
    // position: absolute;
    // overflow: hidden;
    width: 100%;
  }

  .wave {
    bottom: 0;
    background: #fff;
  }

  .wave-path {
    animation: wave-path-animation 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
    80% {
      d: path(
        "M0,88L48,58.3C96,69,192,91,288,90.7C384,91,480,69,576,80C672,91,768,133,864,154.7C960,176,1056,176,1152,154.7C1248,133,1344,91,1392,69.3L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      );
    }
  }

  nav {
    height: 40px;
    background: #fef9e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 10px;

    h1 {
      font-size: 1.2rem;
      animation: neon6 1.5s ease-in-out infinite alternate;
      line-height: 1;
      text-decoration: none;
      color: #ff00de;
    }
  }
  @keyframes neon6 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
        0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
        0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }
  .containter-ingrediant {
    width: 100%;
    height: 300px;
    background: #fff;
    padding: 20px;
    overflow: scroll;
    .arrow_ingredients {
      width: 100%;
      display: flex;
      //   margin: 30px auto;
      gap: 10px;
    }
    .bubble-ingrediant {
      width: 100px;
      height: 104px;
      background: #fef9e4;
      border-radius: 99px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid #fbe897;
      img {
        width: 90px;
        height: 90px;
        padding: 20px;
        border-radius: 99px;
      }

      .qty-name {
        width: 100%;
        padding: 10px;
        text-align: center;
        span {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>