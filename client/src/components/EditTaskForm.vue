<template>
  <div>
    <div class="bg-gray-100 px-2 py-2 my-3 border-l-4 border-gray-500 rounded shadow-md flex flex-col">
      <div class="flex flex-col border-b">
        <form @submit.prevent="editTask" class="flex flex-col" action="">
          <input
            v-model="task.title"
            class="shadow appearance-none border rounded w-1/2 mb-2 py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="title"
          />
          <input
            v-model="task.description"
            class="shadow appearance-none border rounded w-full py-2 px-3  text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
          />

          <div class="flex">
            <button class="mt-2 w-12 font-bold bg-blue-800 hover:bg-blue-900 px-2 py-1 text-gray-100 rounded cursor-pointer" type="submit">
              Save
            </button>

            <button type="button" @click="toggleEditForm" class="mt-2 ml-2 font-bold text-blue-800 hover:text-blue-900 cursor-pointer">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTaskForm",
  props: ["task", "category_id"],
  methods: {
    toggleEditForm() {
      this.$emit("toggle-edit-form");
    },
    editTask() {
      console.log("THIS TASK DI EDIT FORM", this.task);
      const payload = {
        title: this.task.title,
        description: this.task.description,
        id: this.task.id,
        category_id:this.task.category_id,
        user_id:this.task.user_id
      };
      this.$emit("edit-task", payload);
    },
  },
};
</script>

<style></style>
