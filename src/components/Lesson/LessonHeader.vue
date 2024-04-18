<template>
  <div class="lesson-page-header">
    <a @click.prevent="confirm = true">
      <img :src="CrossIcon" alt="Cross" />
    </a>
    <div class="progress-bar-top">
      <span></span>
      <em :style="{ width }"></em>
    </div>
  </div>

  <CloseLesson v-if="confirm" @close="confirm = false" />
</template>

<script setup>
import { computed, ref } from "vue";
import CloseLesson from "./modals/CloseLesson.vue";
import CrossIcon from "../icons/cross.svg";

const confirm = ref(false);
const props = defineProps(["active", "count"]);

const width = computed(() => {
  return `${(props.active / props.count) * 100}%`;
});
</script>
