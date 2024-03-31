<template>
  <div>
    <input type="text" v-model="user_id" placeholder="user_id pp delete" />
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
    <button
      @click="showImage"
      :disabled="!user_id"
      style="
        height: 66px;
        width: 150px;
        background: rgba(51, 255, 0, 0.3);
        backdrop-filter: blur(50px);
        border-radius: 5px;
      "
    >
      Show Image
    </button>
    <div v-if="profilePicUrl">
      <img
        :src="profilePicUrl"
        alt="Profile Picture"
        style="max-width: 100%; max-height: 400px"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_id: "",
      profilePicUrl: null,
    };
  },
  methods: {
    uploadFile() {
      if (!this.user_id) return;

      const formData = new FormData();
      formData.append("user_id", this.user_id);

      fetch("http://127.0.0.1:5000/delete_profilepic", {
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
    showImage() {
      if (!this.user_id) return;

      this.profilePicUrl = `https://muicinternshipsprojectprofilepicspublic.s3.ap-southeast-2.amazonaws.com/profilepic_${this.user_id}.jpeg`;
    },
  },
};
</script>

<style scoped></style>
