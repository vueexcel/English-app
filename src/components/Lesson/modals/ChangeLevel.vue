<template>
  <!-- Change level -->
  <div id="change-level" class="overlay modal-main-wrap">
    <div class="popup">
      <div class="modal-content">
        <h3>You are at level {{ level }} out of 4</h3>
        <div class="level-list">
          <template v-for="l in levels" :key="l.level">
            <p @click="onChangeLevel(l.level)" v-if="l.level != level">
              {{ l.title + " " + l.level }}
            </p>
            <p @click="onChangeLevel(l.level)" v-else>
              <b>{{ l.title + " " + l.level }}</b>
            </p>
          </template>
        </div>
      </div>
      <a class="popup-close-btn" href="" @click.prevent="$emit('close')">
        <p>&times;</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["level"]);
const emit = defineEmits(["change", "close"]);

const onChangeLevel = (level) => {
  emit("change", level);
  emit("close");
};

const levels = computed(() =>
  [1, 2, 3, 4].map((level) => {
    if (level === props.level) {
      return {
        title: "Stay for",
        level,
      };
    } else if (level < props.level) {
      return {
        title: "Decrease to",
        level,
      };
    } else {
      return {
        title: "Increase to",
        level,
      };
    }
  })
);
</script>
