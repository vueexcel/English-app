<template>
  <div class="lesson-page-body lpb2">
    <div class="control-bar-block">
      <div class="progress-bar-bottom">
        <span></span>
        <em
          id="gradient-bar"
          :style="{
            width: `${progress}%`,
            transition: Math.ceil(progressSpeed[level.value - 1] / 100) + 'ms',
          }"
        ></em>
      </div>
      <div class="audio-control">
        <a href="" @click.prevent="$emit('prev')">
          <img :src="AngleLeftIcon" alt="Angle Left" />
        </a>

        <a href="" @click.prevent="pauseResume">
          <img
            :src="isPaused ? PlayIcon : PauseIcon"
            :alt="isPaused ? 'Play' : 'Pause'"
          />
        </a>

        <a href="" @click.prevent="$emit('next')">
          <img :src="AngleRightIcon" alt="Angle Right"
        /></a>
      </div>
      <div class="lesson-footer">
        <a href="" @click.prevent="levelModal = true">
          <img :src="VolumeControlIcon" alt="Volume Control" />
        </a>
        <a href="" @click.prevent="feedbackModal = true">
          <img :src="ErrorIcon" alt="Error" />
        </a>
        <RouterLink :to="'/course/' + courseId + '/rules'">
          <img :src="QuestionIcon" alt="Question" />
        </RouterLink>
      </div>
    </div>
  </div>

  <ReportError @close="feedbackModal = false" v-if="feedbackModal" />
  <ChangeLevel
    @close="levelModal = false"
    v-if="levelModal"
    :level="level"
    @change="level = $event"
  />

  <audio src="" ref="audioRef"></audio>
</template>

<script setup>
import { ref, watch } from "vue";
import ReportError from "./modals/ReportError.vue";
import ChangeLevel from "./modals/ChangeLevel.vue";

import PauseIcon from "../icons/pause.svg";
import PlayIcon from "../icons/playIcon.svg";

import AngleLeftIcon from "../icons/angle-left.svg";
import AngleRightIcon from "../icons/angle-right.svg";
import VolumeControlIcon from "../icons/volume-control.svg";
import ErrorIcon from "../icons/error.svg";
import QuestionIcon from "../icons/question.svg";

const props = defineProps(["courseId", "state"]);

const emit = defineEmits(["next", "prev", "stateChange"]);

const progressSpeed = [7000, 5000, 3000, 2500];
const level = ref(
  localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1
);

const feedbackModal = ref(false);
const levelModal = ref(false);

const progress = ref(0);
const isPaused = ref(false);
let interval;

watch(props, (value) => {
  if (value.state == "start") {
    startProgress();
  } else if (value.state == "reset") {
    progress.value = 0;
  }
});

const audioRef = ref(null);

watch(level, () => {
  progress.value = 0;
  isPaused.value = true;
  emit("stateChange", "reset");

  localStorage.setItem("level", level.value);
});

const startProgress = () => {
  interval = setInterval(() => {
    progress.value += 1;

    if (progress.value >= 100) {
      clearInterval(interval);
      emit("stateChange", "end");
    }
  }, Math.ceil(progressSpeed[level.value - 1] / 100));
};

const pauseResume = () => {
  if (props.state == "reset") {
    return;
  }

  if (isPaused.value) {
    startProgress();
    emit("stateChange", "resume");
  } else {
    clearInterval(interval);
    emit("stateChange", "pause");
  }

  isPaused.value = !isPaused.value;
};
</script>
