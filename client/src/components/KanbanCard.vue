<!-- KANBAN CARD -->
<template>
  <div>
    <div class="bg-gray-100 px-2 py-2 my-3 border-l-4 border-gray-500 rounded shadow-md flex flex-col" v-if="!showEditForm">
      <div class="flex border-b">
        <h4 class="mb-2 font-medium">{{ task.title }}</h4>
        <span class="ml-auto text-sm text-gray-700">{{ momentFormat(task.updatedAt) }}</span>
      </div>
      <p class="mt-2 text-gray-800">{{ task.description }}</p>
      <div>
        <div class="mt-8 mb-1 flex items-baseline justify-between">
          <div>
            <div v-if="index != 0" @click="changeCategory(index - 1)" class="font-bold cursor-pointer">
              <span><<</span>
            </div>
            <span
              @click="toggleEditForm"
              class="mt-2 ml-auto font-bold bg-gray-300 hover:bg-gray-400 px-2 py-1 text-blue-700 rounded cursor-pointer"
              >Edit</span
            >
            <button @click="deleteTask(task.id)" class="mt-2 ml-2 font-bold text-blue-800 hover:text-blue-900 cursor-pointer">
              Delete
            </button>
          </div>

          <div>
            <span class="mt-2 ml-auto text-xs text-gray-700">{{ task.User.email }}</span>
          </div>
          <div v-if="index !== length - 1" @click="changeCategory(index + 1)" class="font-bold cursor-pointer">
            >>
          </div>
        </div>
      </div>
    </div>
    <EditTaskForm v-else-if="showEditForm" :task="task" @toggle-edit-form="toggleEditForm" @edit-task="recieveEditTask"></EditTaskForm>
  </div>
</template>

<script>
import moment from "moment";
import EditTaskForm from "./EditTaskForm";
export default {
  props: ["task", "index", "length", "category", "categoryList"],
  name: "KanbanCard",
  data() {
    return {
      showEditForm: false,
    };
  },
  computed: {},
  components: {
    EditTaskForm,
  },
  methods: {
    momentFormat(date) {
      return moment(date).format("MMM Do YY");
    },
    deleteTask(task_id) {
      this.$emit("delete-task", task_id);
    },
    toggleEditForm() {
      this.showEditForm = !this.showEditForm;
    },
    recieveEditTask(payload) {
      this.toggleEditForm();
      this.$emit("edit-task", payload);
    },
    changeCategory(newIndex) {
      const newId = this.categoryList[newIndex].id;
      const payload = {
        title: this.task.title,
        description: this.task.description,
        id: this.task.id,
        category_id: newId,
        user_id: this.task.user_id,
      };
      this.$emit("edit-task", payload);
    },
  },
};
</script>

<style></style>
