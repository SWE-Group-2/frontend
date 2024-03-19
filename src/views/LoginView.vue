<template>
  <div class="align-center">
    <div class="login-box align-center">
      <h1 class="h1-text">LOGIN</h1>
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <input class="input-text" type="text" id="username" v-model="username" placeholder="username" required>
        </div>
        <div class="input-group">
          <input class="input-text" type="password" id="password" v-model="password" placeholder="password" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.h1-text {
  font-weight: 450;
}

.align-center {
  text-align: center;
  margin: 0 auto;
}

.login-box {
  background-color: #B5A7C8;
  width: 280px;
  height: 300px;
  margin-top: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-text::placeholder {
  text-align: center;
  color: #B5A7C8;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 60%;
  padding: 9px;
  background-color: #EBEBEB;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 30%;
  padding: 10px;
  margin-top: 7px;
  background-color: #462378;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #351b5a;
}
</style>


<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Here you can implement your login logic
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>