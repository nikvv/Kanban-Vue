<template>
  <div>
    <div v-if="pageName === 'home'">
      <!-- NAVBAR -->
      <nav class="flex h-20 justify-center bg-gray-400 border-b-8 border-gray-600">
        <div class="flex items-end justify-between mx-24 w-full">
          <h1 class="text-2xl my-auto font-bold text-gray-900 tracking-widest">AMSTERDAM KANBAN</h1>
          <span @click="logout" class="my-auto bg-gray-100 hover:bg-gray-200 px-4 py-1 font-medium text-gray-800 rounded cursor-pointer"
            >LOGOUT</span
          >
        </div>
      </nav>

      <!-- ORGANIZATION TEXT -->
      <h2 class="mx-24 mt-8 px-1 text-xl font-medium w-1/2">HACKTIV8</h2>

      <!-- MAIN CONTENT -->
      <div class="flex flex-wrap mx-24 items-start">
        <!-- KANBAN BOARD -->
        <KanbanBoard
          v-for="(category, index) in categoryList"
          :key="category.id"
          :index="index"
          :length="categoryList.length"
          :category="category"
          :categoryList="categoryList"
          :taskList="taskList"
          @add-new-task="addNewTask"
          @delete-task="deleteTask"
          @edit-task="editTask"
          @delete-board="deleteBoard"
        ></KanbanBoard>
        <div class="mt-20 mb-4 mx-2 bg-gray-300 rounded w-64 p-4">
          <NewBoardButton @toggle-add-board="toggleAddBoard" :showAddBoard="showAddBoard"></NewBoardButton>
          <NewBoardForm v-if="showAddBoard === true" @add-new-board="addNewBoard"></NewBoardForm>
        </div>
      </div>
    </div>

    <LoginForm
      v-else-if="pageName === `login`"
      @show-register-form="showRegisterForm"
      @onGoogleAuthSuccess="googleLogin"
      @submit-login="login"
    ></LoginForm>
    <RegisterForm v-else-if="pageName === `register`" @submit-register="register"></RegisterForm>
  </div>
</template>

<script>
import KanbanBoard from "./components/KanbanBoard";
import NewBoardButton from "./components/NewBoardButton";
import NewBoardForm from "./components/NewBoardForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import Swal from "sweetalert2";

export default {
  name: "App",
  data() {
    return {
      base_url: "https://thawing-peak-12651.herokuapp.com", // http://localhost:3000
      taskList: [],
      categoryList: [],
      addTitle: "",
      addDescription: "",
      showAddBoard: false,
      pageName: "", //LOGIN,HOME,REGISTER
      loginEmail: "",
      loginPassword: "",
    };
  },
  components: {
    KanbanBoard,
    NewBoardButton,
    NewBoardForm,
    LoginForm,
    RegisterForm,
  },
  created() {
    this.auth();
    //   if (localStorage.access_token) {
    //   this.fetchCategories();
    //   this.fetchTasks();
    //   this.pageName = "home";
    // } else {
    //   this.pageName = "login";
    // }
  },
  methods: {
    register(payload){
      axios({
        method:'post',
        url:`${this.base_url}/register`,
        data:{
          username:payload.username,
          email:payload.email,
          password:payload.password
        }
      })
      .then(()=>{
        this.auth()
      })
      .catch(error=>{
        console.log(error)
      })
    },
    showRegisterForm() {
      this.pageName = "register";
    },
    auth() {
      if (localStorage.access_token) {
        this.fetchCategories();
        this.fetchTasks();
        this.pageName = "home";
      } else {
        this.pageName = "login";
      }
    },
    googleLogin(token) {
      console.log(token);
      axios({
        url: `${this.base_url}/google-login`,
        method: "post",
        data: {
          token,
        },
      }).then(({ data }) => {
        localStorage.access_token = data.token;
        this.auth();
      });
    },
    login(payload) {
      // console.log(payload)
      axios({
        method: "post",
        url: `${this.base_url}/login`,
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then(({ data }) => {
          localStorage.access_token = data.token;
          this.auth();
        })
        .catch((error) => {
          Swal.fire("Error", `<span>${error.response.data}</span>`, "error");
          console.log(error.response.data);
        });
    },
    logout() {
      localStorage.clear();
      this.auth();
    },
    fetchCategories() {
      axios({
        method: "get",
        url: `${this.base_url}/categories`,
      })
        .then(({ data }) => {
          console.log(data);
          this.categoryList = data.allCategory;
          console.log(this.categoryList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchTasks() {
      axios({
        method: "get",
        url: `${this.base_url}/tasks`,
        headers: {
          access_token: localStorage.access_token,
        },
      }).then(({ data }) => {
        console.log(data);
        this.taskList = data.allTask;
      });
    },
    addNewTask(payload) {
      axios({
        method: "post",
        url: `${this.base_url}/tasks`,
        data: {
          title: payload.title,
          description: payload.description,
        },
        headers: {
          access_token: localStorage.access_token,
          category_id: payload.category_id,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.fetchTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteTask(task_id) {
      axios({
        method: "delete",
        url: `${this.base_url}/tasks/${task_id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      }).then((data) => {
        this.fetchTasks();
      });
    },
    editTask(payload) {
      axios({
        method: "put",
        url: `${this.base_url}/tasks/${payload.id}`,
        data: {
          title: payload.title,
          description: payload.description,
          category_id: payload.category_id,
          user_id: payload.user_id,
        },
      }).then((data) => {
        console.log(data);
        this.fetchTasks();
      });
    },
    toggleAddBoard() {
      this.showAddBoard = !this.showAddBoard;
    },
    addNewBoard(payload) {
      axios({
        url: `${this.base_url}/categories`,
        method: "post",
        data: {
          name: payload.name,
        },
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.categoryList.push(data.createdCategory);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteBoard(id) {
      axios({
        url: `${this.base_url}/categories/${id}`,
        method: "delete",
      }).then(() => {
        this.fetchCategories();
      });
    },
  },
};
</script>

<style></style>
