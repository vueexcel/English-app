<template>
  <div class="training-starts" id="training-starts">
    <div class="start-content">
      <h5>Training will start in</h5>
      <h1>{{ count }}</h1>
    </div>
    <div class="training-overlay"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const count = ref(3);
const emit = defineEmits(["close"]);

let interval;

onMounted(() => {
  interval = setInterval(() => {
    if (count.value > 0) {
      count.value--;
    }

    if (count.value === 0) {
      clearInterval(interval);
      emit("close");
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
