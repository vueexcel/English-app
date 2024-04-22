<template>
  <main-layout :title="'A1 Beginner'" back-btn>
    <div class="cards-wrapper">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :title="course.title"
        :level="course.level"
        :phrases="course.phrases"
        background-color="blue"
      ></CourseCard>
    </div>
  </main-layout>
</template>

<script setup>
import CourseCard from "src/components/CourseCard.vue";
import MainLayout from "src/layouts/MainLayout.vue";

const courses = [
  { title: "Present Simple", level: 1, phrases: 80 },
  { title: "Past Simple", level: 2, phrases: 90 },
  { title: "Future Simple", level: 3, phrases: 85 },
  { title: "Present Continuous", level: 1, phrases: 75 },
  { title: "Past Continuous", level: 2, phrases: 85 },
  { title: "Future Continuous", level: 3, phrases: 80 },
];

defineOptions({
  name: "AllLessonPage",
});
</script>
