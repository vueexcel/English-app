<template>
  <MainLayout title="present simple" back-btn>
    <div class="cards-wrapper flex-cards">
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
      <CourseCard
        :level="1"
        :phrases="80"
        background-color="blue"
        add-class
        page="rules"
      ></CourseCard>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "src/layouts/MainLayout.vue";
import CourseCard from "src/components/CourseCard.vue";

defineOptions({
  name: "LevelPage",
});
</script>
