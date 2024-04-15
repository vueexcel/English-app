<template>
  <main-layout :title="'A1 Beginner'" back-btn>
    <div class="cards-wrapper">
      <CourseCard
        :title="'Present simple'"
        :phrases="80"
        background-color="blue"
      ></CourseCard>
      <CourseCard
        :title="'Present simple'"
        :phrases="80"
        background-color="blue"
      ></CourseCard>
      <CourseCard
        :title="'Present simple'"
        :phrases="80"
        background-color="blue"
      ></CourseCard>
      <CourseCard
        :title="'Present simple'"
        :phrases="80"
        background-color="blue"
      ></CourseCard>
    </div>
  </main-layout>
</template>

<script setup>
import CourseCard from "src/components/CourseCard.vue";
import MainLayout from "src/layouts/MainLayout.vue";

defineOptions({
  name: "AllLessonPage",
});
</script>
