<template>
  <div class="pagination">
    <button @click="prevPageSet" :disabled="startPage <= 1">&lt;&lt;</button>
    <!-- <button @click="prevPage" :disabled="currentPage <= 1">Précédent</button> -->
    <span class="number-pagination" v-for="page in visiblePages" :key="page">
      <button @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </span>
    <!-- <button @click="nextPage" :disabled="currentPage >= maxPage">
      Suivant
    </button> -->
    <button @click="nextPageSet" :disabled="endPage >= maxPage">
      &gt;&gt;
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
  data() {
    return {
      startPage: 1,
      endPage: 4,
    };
  },
  computed: {
    visiblePages() {
      console.log("Calculating visible pages");
      const pages = Array.from(
        { length: this.endPage - this.startPage + 1 },
        (_, i) => i + this.startPage
      );
      console.log("Visible pages are: ", pages);
      return pages;
    },
  },
  methods: {
    prevPage() {
      console.log("Previous page clicked");
      this.$emit("updatePage", this.currentPage - 1);
    },
    nextPage() {
      console.log("Next page clicked");
      this.$emit("updatePage", this.currentPage + 1);
    },
    goToPage(page) {
      console.log("Go to page: ", page);
      this.$emit("updatePage", page);
    },
    prevPageSet() {
      console.log("Previous page set clicked");
      this.startPage = Math.max(1, this.startPage - 4);
      this.endPage = this.startPage + 3;
      console.log("New start and end pages: ", this.startPage, this.endPage);
    },
    nextPageSet() {
      console.log("Next page set clicked");
      this.endPage = Math.min(this.maxPage, this.endPage + 4);
      this.startPage = this.endPage - 3;
      console.log("New start and end pages: ", this.startPage, this.endPage);
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
    padding: 5px;
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
