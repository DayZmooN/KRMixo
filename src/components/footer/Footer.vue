<template>
  <footer>
    <div class="footer_name">
      <div class="icon">
        <img src="../../assets/icon/home.svg" alt="" class="icone-rouge" />
      </div>
      <div class="icon">
        <div class="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            class="icone-personnalisable"
          >
            <path
              d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="icon">
        <img
          src="../../assets/icon/watch-list.svg"
          alt=""
          class="icone-rouge"
        />
      </div>
    </div>
    <div class="footer_destop">
      <!-- <h1>hello</h1> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  // height: 78px;
  background: #242a32;
  position: fixed;
  bottom: 0px;
  background-color: #242a32;

  .footer_name {
    display: flex;
    justify-content: space-between;
    align-content: center;
    @media screen and (min-width: 780px) {
      display: none;
    }
    .icon {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 7px;
      cursor: pointer;
      font-size: 2rem;
      height: 70px;
      .icone-personnalisable {
        fill: #ff5733;
        height: 100%;
        &:active {
          fill: #fff;
        }
      }
    }
  }
  .footer_desktop {
    display: none;

    @media screen and (min-width: 780px) {
      display: none;
      height: 100%;
      width: 100%;
      background: #242a32;
    }

    h1 {
      font-size: 2rem;
      color: #ff5733;
    }
  }
}
</style>
