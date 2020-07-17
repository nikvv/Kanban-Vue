<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 flex flex-wrap justify-center items-center">
        <form @submit.prevent="register" class="lg:w-2/6 md:w-1/2 bg-gray-300 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-bold  mb-5">Register Form</h2>

          <input
            v-model="username"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
            placeholder="Username"
            type="text"
          />

          <input
            v-model="email"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
          />
          <input
            v-model="password"
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
            placeholder="Password"
            type="password"
          />
          <button
            type="submit"
            class="text-blue-800 font-bold bg-blue-200 hover:bg-blue-300 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      const payload = { username: this.username, email: this.email, password: this.password };
      this.$emit("submit-register", payload);
    },
  },
};
</script>

<style></style>
