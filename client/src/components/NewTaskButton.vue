<template>
  <div>
    <button
      @click="toggleAddForm"
      class=" w-full bg-blue-200 hover:bg-blue-300 text-center text-blue-800 font-medium shadow rounded cursor-pointer border border-dashed border-gray-500 focus:outline-none"
    >
      <span v-if="showAddForm === false">+ Add new item</span>
      <span v-else>x Cancel</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "NewTaskButton",
  props: ["showAddForm"],
  methods: {
    toggleAddForm() {
      this.$emit("toggle-add-form");
    },
  },
};
</script>

<style></style>
