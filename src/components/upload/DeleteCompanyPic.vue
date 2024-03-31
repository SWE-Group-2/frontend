<template>
  <div>
    <input
      type="text"
      v-model="internship_id"
      placeholder="internship_id pic delete"
    />
    <button
      @click="uploadFile"
      :disabled="!internship_id"
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
      :disabled="!internship_id"
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
    <div v-if="companyPicUrl">
      <img
        :src="companyPicUrl"
        alt="Company Picture"
        style="max-width: 100%; max-height: 400px"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      internship_id: "",
      companyPicUrl: null,
    };
  },
  methods: {
    uploadFile() {
      if (!this.internship_id) return;

      const formData = new FormData();
      formData.append("internship_id", this.internship_id);

      fetch("http://127.0.0.1:5000/delete_companypic", {
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
      if (!this.internship_id) return;

      this.companyPicUrl = `https://muicinternshipsprojectcompanypicspublic.s3.ap-southeast-2.amazonaws.com/companypic_${this.internship_id}.jpeg`;
    },
  },
};
</script>

<style scoped></style>
