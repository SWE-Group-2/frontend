<script setup lang="ts">
// The state of the register page
defineProps<{
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  confirm_password: string;
}>();

// Events that can occur on register, i.e., submission of the form
// No methods here but rather the view informs parent component of an event occurring
defineEmits<{
  (e: "submit"): void;
  (e: "update:first_name", value: string): void;
  (e: "update:last_name", value: string): void;
  (e: "update:username", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:confirm_password", value: string): void;
}>();
</script>
<template>
  <div class="item-center">
    <div class="register-box align-center">
      <h1 class="h1-text">REGISTER</h1>
      <form @submit.prevent="$emit('submit')">
        <div class="input-group">
          <input
            id="first_name"
            :value="first_name"
            @input="$emit('update:first_name', $event.target.value)"
            class="input-text"
            type="text"
            placeholder="first name"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="last_nname"
            :value="last_name"
            @input="$emit('update:last_name', $event.target.value)"
            class="input-text"
            type="text"
            placeholder="last name"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="username"
            :value="username"
            @input="$emit('update:username', $event.target.value)"
            class="input-text"
            type="text"
            placeholder="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="password"
            :value="password"
            @input="$emit('update:password', $event.target.value)"
            class="input-text"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div class="input-group">
          <input
            id="confirmpassword"
            :value="confirm_password"
            @input="$emit('update:confirm_password', $event.target.value)"
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
<style scoped>
@import "@/components/register/Register.css";
</style>
