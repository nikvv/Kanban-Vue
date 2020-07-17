<template>
  <div>
    
      <button
        @click="toggleAddBoard"
        class="w-full bg-blue-200 hover:bg-blue-300 text-center text-blue-800 font-medium shadow rounded cursor-pointer border border-dashed border-gray-500 focus:outline-none"
      >
        <span v-if="showAddBoard === false">+ Add new category</span>
        <span v-else>x Cancel</span>
      </button>
    
  </div>
</template>

<script>
export default {
  name: "NewBoardButton",
  props: ["showAddBoard"],
  methods: {
    toggleAddBoard() {
      this.$emit("toggle-add-board");
    },
  },
};
</script>

<style></style>
