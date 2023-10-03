<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage <= 1">Précédent</button>
    <span class="number-pagination" v-for="page in maxPage" :key="page">
      <button @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </span>
    <button @click="nextPage" :disabled="currentPage >= maxPage">
      Suivant
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    maxPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    prevPage() {
      this.$emit("updatePage", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("updatePage", this.currentPage + 1);
    },
    goToPage(page) {
      this.$emit("updatePage", page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
  gap: 10px;

  .number-pagination {
    font-size: 1rem;
    background: #e1e1e100;
    padding: 10px;
    border-radius: 18px;
  }
}
.pagination button {
  font-size: 1rem;
  background: #e1e1e1;
  padding: 10px;
  border-radius: 18px;
}
.pagination button.active {
  background-color: #ff00bf;
  padding: 10px;
  color: white;
}
</style>
