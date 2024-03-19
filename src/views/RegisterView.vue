<template>
  <div class="item-center">
    <div class="register-box align-center">
      <h1 class="h1-text">REGISTER</h1>
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <input class="input-text" type="text" id="firstname" v-model="firstname" placeholder="first name" required>
        </div>
        <div class="input-group">
          <input class="input-text" type="text" id="lastname" v-model="lastname" placeholder="last name" required>
        </div>
        <div class="input-group">
          <input class="input-text" type="text" id="username" v-model="username" placeholder="username" required>
        </div>
        <div class="input-group">
          <input class="input-text" type="password" id="password" v-model="password" placeholder="password" required>
        </div>
        <div class="input-group">
          <input class="input-text" type="password" id="confirmpassword" v-model="confirmpassword" placeholder="confirm password" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.h1-text {
  font-family: Roboto Slab;
  font-weight: 450;
  font-size: 36px;
}

.item-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.align-center {
  text-align: center;
  margin: 0 auto;
}

.register-box {
  background-color: #B5A7C8;
  width: 280px;
  height: 450px;
  margin: 100px;
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
  border: 1px solid #ccc;
  background-color: #EBEBEB;
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
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      console.log('First Name:', this.firstname);
      console.log('Last Name:', this.lastname);
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>