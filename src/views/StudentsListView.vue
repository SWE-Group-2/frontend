<script setup>
import StudentsDisplay from "@/components/StudentsDisplay.vue";

// currently still using placeholder information instead of collecting from the database
</script>

<template>
  <div id="students">
    <div class="students-list-header">CS Students</div>
    <div class="students-list-display">
      <StudentsDisplay />
    </div>
  </div>
</template>

<style>
.students-list-header {
  font-family: Roboto Slab;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0em;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 30px;
}

.students-list-display {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 980px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.418);
  padding: 1.5rem;
  margin: 0 auto;
}
</style>
