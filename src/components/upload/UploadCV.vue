<script>
export default {
  data() {
    return {
      selectedFile: null,
      user_id: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      if (!this.selectedFile) return;

      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("user_id", this.user_id);

      fetch("http://127.0.0.1:5000/upload_cv", {
        method: "PUT",
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
    <input
      type="file"
      @change="onFileChange"
      ref="fileInput"
      id="fileInput"
      style="display: none"
    />
    <label for="fileInput" style="cursor: pointer">Add cv file</label>
    <input type="text" v-model="user_id" placeholder="user_id" />
    <button
      @click="uploadFile"
      :disabled="!selectedFile"
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
