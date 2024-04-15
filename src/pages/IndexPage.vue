<template>
  <main-layout :back-btn="false">
    <div class="screen-header">
      <h3>Plan for today</h3>
    </div>

    <CourseSlider :title="'Ready to repeat'" background-color="blue" />
    <CourseSlider :title="'A1 Elementary'" background-color="green" />

    <div class="screen-header">
      <h3>Learn Grammer</h3>
    </div>

    <CourseSlider :title="'AI Begineer'" background-color="purple" />
    <CourseSlider :title="'A2 Elementary'" background-color="orange" />
    <CourseSlider :title="'B1 Intermediate'" background-color="red" />

    <div class="screen-header">
      <h3>Learn Phrases</h3>
    </div>

    <CourseSlider :title="'Phrases for Everyday'" background-color="blue" />
  </main-layout>
</template>

<script setup>
import MainLayout from "src/layouts/MainLayout.vue";
import CourseSlider from "src/components/CourseSlider.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.screen-header {
  display: flex;
  justify-content: center;
}
</style>
