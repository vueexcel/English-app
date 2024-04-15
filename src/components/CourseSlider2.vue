<template>
  <div class="cards-slider-header">
    <h6>{{ title }}</h6>
    <router-link :to="{ name: 'category', params: { id } }"
      >See all</router-link
    >
  </div>
  <div class="cards-slider-wrap">
    <div class="items">
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
    </div>
  </div>
</template>

<script setup>
import CourseCard from "./CourseCard.vue";

defineProps({
  title: String,
  id: { type: [String, Number], default: 123 },
  backgroundColor: {
    type: String,
    default: "blue",
    validator: (value) =>
      ["blue", "orange", "red", "green", "purple"].includes(value),
  },
});
</script>
