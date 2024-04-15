<template>
  <router-link
    :to="{ name: page, params: { id: 1 } }"
    :class="addClass ? 'single-card single-card-' + backgroundColor : 'item'"
  >
    <div :class="addClass ? '' : 'single-card single-card-' + backgroundColor">
      <h6>
        {{ title }}
        <br v-if="title" />
        <b v-if="level !== undefined">level {{ level }}</b>
      </h6>
      <p>Phrases: {{ phrases }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps, withDefaults } from "vue";

defineProps({
  title: String,
  level: Number,
  phrases: Number,
  addClass: Boolean,
  page: {
    type: String,
    default: "course",
  },
  backgroundColor: {
    type: String,
    default: "blue",
    validator: (value) =>
      ["blue", "orange", "red", "green", "purple"].includes(value),
  },
});
</script>
