<template>
  <header>
    <div class="header-row">
      <div class="burger">
        <input id="checkbox" type="checkbox" />
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
      <div class="user">
        <!-- <img src="@Picture/karim.jpg" alt="" /> -->
      </div>
    </div>
    <div id="modal" class="modal">
      <a href=""><span>categorys</span></a>
      <a href=""><span>ingredients</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerVue",
};

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const modal = document.getElementById("modal");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      modal.style.display = "flex";
      // body.style.overflow = "hidden";
      setTimeout(() => {
        modal.style.opacity = 1;
        modal.style.zIndex = 999;
      }, 10);
    } else {
      modal.style.display = "none";
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  });
});
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  background: #0b2430;

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
        // transform: rotate(180deg);
        gap: 10px;
        transition-duration: 0.5s;
      }

      .bars {
        width: 75%;
        height: 4px;
        background-color: #f27304;
        border-radius: 4px;
      }

      // #bar1 {
      //   width: 75%;
      // }

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
    height: auto;
    background: linear-gradient(
      180deg,
      rgba(251, 125, 138, 0.45) 0%,
      rgba(255, 206, 49, 0.45) 100%
    );

    // color: white;
    justify-content: center;
    align-items: center;
    // font-size: 2em;
    z-index: 999;
    margin: 0px auto;
    opacity: 0;
    transition: opacity 0.85s ease;

    span {
      padding: 15px;
      font-size: 3rem;
      color: rgb(255, 255, 255);
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit; /* Copiez l'arrière-plan de l'élément parent */
      filter: blur(5px); /* Appliquez le flou sur le pseudo-élément */
      z-index: -1;
    }
  }
}
</style>
