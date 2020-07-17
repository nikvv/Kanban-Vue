<template>
  <div class="mt-2">
    <div class="bg-gray-100 px-2 py-2 my-3 border-l-4 border-gray-500 rounded shadow-md flex flex-col">
      <form @submit.prevent="addNewBoard">
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Category name"
        />
        <button class="mt-2 w-12 font-bold bg-blue-800 hover:bg-blue-900 px-2 py-1 text-gray-100 rounded cursor-pointer" type="submit">
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewBoardForm",
  data() {
    return {
      name: "",
    };
  },
  methods:{
      addNewBoard(){
          const payload = {name: this.name}
          this.$emit('add-new-board',payload)
          this.name = ""
      }
  }
};
</script>

<style></style>
