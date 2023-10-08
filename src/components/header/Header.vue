<template>
  <header>
    <div class="header-row">
      <div class="burger">
        <input
          id="checkbox"
          type="checkbox"
          v-model="isChecked"
          @change="toggleModal"
        />
        <label class="toggle" for="checkbox">
          <div id="bar1" class="bars"></div>
          <div id="bar2" class="bars"></div>
          <div id="bar3" class="bars"></div>
        </label>
      </div>
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/logo.svg" alt="logo" />
        </router-link>
      </div>
      <div class="user"></div>
    </div>
    <div
      id="modal"
      class="modal"
      :style="{
        display: modalDisplay,
        opacity: modalOpacity,
        zIndex: modalZIndex,
      }"
    >
      <router-link :to="{ name: 'category' }">
        <span>Catalogue</span>
      </router-link>
      <router-link :to="{ name: 'noAlcohol' }">
        <span>sans alcohol</span>
      </router-link>
      <router-link :to="{ name: 'ingredient' }">
        <span>ingredients</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerVue",
  data() {
    return {
      isChecked: false,
      modalDisplay: "none",
      modalOpacity: 0,
      modalZIndex: -1,
    };
  },
  methods: {
    toggleModal() {
      if (this.isChecked) {
        this.modalDisplay = "flex";
        setTimeout(() => {
          this.modalOpacity = 1;
          this.modalZIndex = 999;
        }, 10);
      } else {
        this.modalOpacity = 0;
        setTimeout(() => {
          this.modalDisplay = "none";
          this.modalZIndex = -1;
        }, 500);
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  background: #0b2430;
  position: sticky;
  top: 0;
  z-index: 999;

  .header-row {
    display: flex;
    height: 100%;

    justify-content: space-between;
    align-items: center;
    margin: auto 10px;
    .burger {
      #checkbox {
        display: none;
      }
      .toggle {
        position: relative;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        transition-duration: 0.5s;
      }

      .bars {
        width: 75%;
        height: 4px;
        background-color: #f27304;
        border-radius: 4px;
      }

      #bar2 {
        width: 100%;
      }

      #checkbox:checked + .toggle .bars {
        position: absolute;
        transition-duration: 0.5s;
      }

      #checkbox:checked + .toggle #bar2 {
        transform: scaleX(0);
        transition-duration: 0.1s;
      }

      #checkbox:checked + .toggle #bar1,
      #checkbox:checked + .toggle #bar3 {
        width: 100%;
        transition-duration: 0.5s;
      }

      #checkbox:checked + .toggle #bar1 {
        transform: rotate(45deg);
      }

      #checkbox:checked + .toggle #bar3 {
        transform: rotate(-45deg);
      }

      #checkbox:checked + .toggle {
        transition-duration: 0.5s;
        transform: rotate(180deg);
      }
    }
    .logo {
      widows: 55px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .user {
      width: 65px;
      height: 65px;
      border-radius: 99px;
      background-color: beige;
      background-image: url("~@Picture/karim.jpg");
      background-size: cover;
    }
  }
  .modal {
    position: relative;
    display: none;
    position: fixed;
    flex-direction: column;
    top: 100px;
    left: 0;
    width: 100%;
    gap: 1rem;
    padding: 10px;
    height: auto;
    background: linear-gradient(
      180deg,
      rgba(251, 125, 138, 0.85) 0%,
      rgba(255, 206, 49, 0.85) 100%
    );

    justify-content: center;
    align-items: center;
    z-index: 999;
    margin: 0px auto;
    opacity: 0;
    transition: opacity 0.85s ease;

    span {
      padding: 15px;
      font-size: 2rem;
      color: rgb(255, 255, 255);

      @media screen and (min-width: 780px) {
        font-size: 3rem;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      filter: blur(5px);
      z-index: -1;
    }
  }
}
</style>
