<template>
  <div class="wrap">
    <div class="search_span">
      <div class="search_text">
        <span>Recherche ton cocktail...</span>
      </div>
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Recherche ton cocktail..."
        />
        <button type="submit" class="searchButton">
          <img src="@/assets/icon/search.svg" alt="search" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchVue",
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  .search_span {
    width: 100%;
    max-width: 300px;
    margin: 15px auto;
    position: relative;
    .search_text {
      margin: 15px auto;
      span {
        color: #f37b30;
        font-size: 1.2rem;
        font-family: "HussarPrinta", sans-serif;
        white-space: nowrap;
        font-family: "HussarPrinta", sans-serif;
      }
    }

    .search {
      display: flex;
      flex-wrap: nowrap;
      row-gap: 10px;
      font: bold;

      .searchTerm {
        width: 100%;

        // border: 3px solid #00b4cc;
        filter: drop-shadow(2px 0px 10px rgba(0, 0, 0, 0.1));

        border-right: none;
        padding: 5px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9dbfaf;
      }

      .searchTerm:focus {
        color: black;
      }

      .searchButton {
        width: 70px;
        height: 36px;
        // border: 1px solid #00b4cc;
        background: linear-gradient(
          180deg,
          rgba(251, 125, 138, 0.45) 0%,
          rgba(255, 206, 49, 0.45) 100%
        );
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;

        img {
          width: 100%;
          height: 75%;
          color: #f37b30;
        }
      }
    }
  }
}

/*Resize the wrap to see the search bar change!*/
</style>
