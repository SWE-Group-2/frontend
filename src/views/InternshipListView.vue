<script setup>
import PostsDisplay from "@/components/PostsDisplay.vue";
</script>

<template>
  <div id="internships">
    <div class="internships-list-header">Internships</div>
    <RouterLink to="/create-internship">
      <button>Create Internship</button>
    </RouterLink>
    <PostsDisplay />
  </div>
</template>

<style lang="scss" scoped>
.internships-list-header {
  font-family:
    Roboto Slab,
    serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0em;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 100px;
}
</style>
