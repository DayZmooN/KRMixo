<template>
  <ul>
    <li
      v-for="category in categories"
      :key="category.strCategory"
      @click="$emit('categorySelected', category.strCategory)"
    >
      {{ category.strCategory }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryVue",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.category_container {
  background: blue;
}
</style>
