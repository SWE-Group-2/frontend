<template>
  <div class="item-center">
    <div class="register-box align-center">
      <h1 class="h1-text">REGISTER</h1>
      <form @submit.prevent="submitForm">
        <div class="input-group">
          <input
            id="firstname"
            v-model="firstname"
            class="input-text"
            type="text"
            placeholder="first name"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="lastname"
            v-model="lastname"
            class="input-text"
            type="text"
            placeholder="last name"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="username"
            v-model="username"
            class="input-text"
            type="text"
            placeholder="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="password"
            v-model="password"
            class="input-text"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="confirmpassword"
            v-model="confirmpassword"
            class="input-text"
            type="password"
            placeholder="confirm password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "@/services/UserService.spec.ts";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      registerUser(this.firstname, this.lastname, this.username, this.password)
        .then(() => {
          console.log("SUCCESSFUL REGISTRATION");
          this.$router.push("/internships");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

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
  background-color: #b5a7c8;
  width: 280px;
  height: 450px;
  margin: 100px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-text::placeholder {
  text-align: center;
  color: #b5a7c8;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 60%;
  padding: 9px;
  border: 1px solid #ccc;
  background-color: #ebebeb;
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
