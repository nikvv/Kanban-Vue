<template>
  <div>
    <div class="mt-20 mb-4 mx-2 bg-gray-300 rounded w-80 p-4">
      <div class="flex flex-col">
        <div class="flex items-baseline">
          <h3 class="mb-4 font-bold text-xl text-gray-900 tracking-wide">{{ category.name }}</h3>
          <span @click="deleteCategory(category.id)" class="ml-auto cursor-pointer text-opacity-75">X</span>
        </div>

        <!-- ADD BUTTON -->
        <NewTaskButton @toggle-add-form="toggleAddForm" :showAddForm="showAddForm"> </NewTaskButton>

        <!-- ADD FORM -->
        <!-- <NewTaskForm class="formAdd" :id="`form-${category.name}`" :category="category" v-on="$listeners"></NewTaskForm> -->
        <NewTaskForm v-if="showAddForm === true" :category="category" @add-new-task="recieveAddTask"></NewTaskForm>

        <KanbanCard v-for="task in taskPerCategory" :key="task.id" :category="category" :categoryList="categoryList" :index="index" :length="length" :task="task" v-on="$listeners" ></KanbanCard>
      </div>
    </div>
  </div>
</template>

<script>
import NewTaskForm from "./NewTaskForm";
import KanbanCard from "./KanbanCard";
import NewTaskButton from "./NewTaskButton";
export default {
  props: ["category","length","index","categoryList", "taskList"],
  name: "KanbanBoard",
  data() {
    return {
      showAddForm: false,
    };
  },
  computed: {
    taskPerCategory: function () {
      let result = [];
      this.taskList.forEach((task) => {
        if (task.category_id === this.category.id) {
          result.push(task);
        }
      });
      return result;
    },
  },
  components: {
    NewTaskForm,
    KanbanCard,
    NewTaskButton,
  },
  methods: {
    toggleAddForm() {
      // if(document.getElementById(`form-${name}`).style.display === 'none'){
      //   document.getElementById(`form-${name}`).style.display='initial'
      // }

      this.showAddForm = !this.showAddForm;
    },
    reciever(payload){
      console.log(payload)
    },
    recieveAddTask(payload){
      this.toggleAddForm()
      this.$emit('add-new-task',payload)
    },
    deleteCategory(id){
      this.$emit('delete-board',id)
    }
  },
};
</script>

<style>
.formAdd {
  display: none;
}
</style>
