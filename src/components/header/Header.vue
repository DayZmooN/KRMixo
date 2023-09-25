<template>
  <header>
    <div class="burger">
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerVue",
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  background: #0b2430;
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
      transform: rotate(180deg);
      gap: 10px;
      transition-duration: 0.5s;
    }

    .bars {
      width: 100%;
      height: 4px;
      background-color: #f27304;
      border-radius: 4px;
    }

    #bar1 {
      width: 100%;
    }

    #bar2 {
      width: 75%;
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
}
</style>
