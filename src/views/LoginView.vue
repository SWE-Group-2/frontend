<template>
  <div class="item-center">
    <div class="login-box align-center">
      <h1 class="h1-text">LOGIN</h1>
      <form @submit.prevent="submitForm">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { loginUser } from "@/services/User.service.ts";
import { setAuthToken } from "@/services/Auth.service.ts";
import { UserLoginInfo } from "@/types/UserLoginInfo";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const userInfo: UserLoginInfo = {
        username: this.username,
        password: this.password,
      };
      loginUser(userInfo)
        .then((response) => {
          setAuthToken(response["access_token"]);
          console.log("SUCCESSFUL LOGIN");
          this.$router.push("/internships");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.h1-text {
  font-family: Roboto Slab;
  font-weight: 450;
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

.login-box {
  background-color: #b5a7c8;
  width: 280px;
  height: 300px;
  margin: 200px;
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
  background-color: #ebebeb;
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
