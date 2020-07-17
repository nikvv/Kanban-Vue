<template>
  <div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">AMSTERDAM KANBAN</h1>
          <p class="leading-relaxed mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam esse labore vero adipisci aperiam?
          </p>
        </div>
        <form @submit.prevent="login" class="lg:w-2/6 md:w-1/2 bg-gray-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-bold  mb-5">Login Form</h2>
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
            Log In
          </button>
          <p class="text-xs text-blue-900 mt-3">Don't have an account? <span class="text-blue-900 font-bold">Register now!</span></p>
        </form>
        <button v-google-signin-button="clientId" class="google-signin-button">Continue with Google</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      clientId: "1095834707066-qvme6aqcvfm59p0h86oj325i2jierm3e.apps.googleusercontent.com",
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      const payload = { email: this.email, password: this.password };
      this.$emit("submit-login", payload);
    },
     OnGoogleAuthSuccess (idToken) {
      
      this.$emit('onGoogleAuthSuccess',idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    },
  
  },
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
