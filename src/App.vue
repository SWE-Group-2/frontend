<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div>
    <Suspense>
      <NavBar />
    </Suspense>
    <RouterView style="margin-top: 60px" />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
}
</style>
