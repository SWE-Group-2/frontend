<script>
export default {
  data() {
    return {
      user_id: "",
    };
  },
  methods: {
    uploadFile() {
      if (!this.user_id) return;

      const formData = new FormData();
      formData.append("user_id", this.user_id);

      fetch("http://127.0.0.1:5000/delete_cv", {
        method: "DELETE",
        body: formData,
        headers: {},
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Received data:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="user_id" placeholder="user_id cv delete" />
    <button
      @click="uploadFile"
      :disabled="!user_id"
      style="
        height: 66px;
        width: 66px;
        background: rgba(51, 255, 0, 0.3);
        backdrop-filter: blur(50px);
        border-radius: 50%;
      "
    >
      GO
    </button>
  </div>
</template>

<style scoped></style>
