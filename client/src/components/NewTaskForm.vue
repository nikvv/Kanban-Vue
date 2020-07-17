<template>
  <div>
      <div class="bg-gray-100 px-2 py-2 my-3 border-l-4 border-gray-500 rounded shadow-md flex flex-col">
        <div class="flex flex-col border-b">
          <form @submit.prevent="addNewTask(category.id)" class="flex flex-col" action="">
            <input v-model="addTitle" class="shadow appearance-none border rounded w-1/2 mb-2 py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="title" />
            <input v-model="addDescription" class="shadow appearance-none border rounded w-full py-2 px-3  text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description" />
            <button class="mt-2 w-12 font-bold bg-blue-800 hover:bg-blue-900 px-2 py-1 text-gray-100 rounded cursor-pointer" type="submit">
              Add
            </button>
          </form>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    props:["category"],
    name:'NewTaskForm',
    data(){
        return{
       addTitle:"",
       addDescription:""     
        }
    },
    methods:{
        addNewTask(category_id){
            const payload = {title:this.addTitle,description:this.addDescription,category_id:category_id}
            this.$emit('add-new-task',payload)
            this.addTitle = ""
            this.addDescription = ""
        }
    }
}
</script>

<style>

</style>

