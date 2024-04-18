<template>
  <div class="lesson-page">
    <section
      class="screen-wrapper"
      v-if="!countDown"
      style="display: flex; flex-direction: column"
    >
      <!-- Header -->
      <LessonHeader :count="dummyPhrases.length" :active="currentPhrase + 1" />

      <div
        class="lesson-page-body"
        style="
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="lesson-text-block">
          <div class="lesson-paras">
            <transition name="slide-fade">
              <h2 id="russian-phrase" v-if="showRussianPhrase">
                {{ dummyPhrases[currentPhrase].ru }}
              </h2>
            </transition>

            <transition name="slide-fade">
              <h2 id="english-phrase" v-if="showEnglishPhrase">
                {{ dummyPhrases[currentPhrase].en }}
              </h2>
            </transition>
          </div>
          <div class="mute-slow">
            <a href="javascript:void(0)">
              <img :src="AudioIcon" alt="Audio" />
            </a>
            <a href="javascript:void(0)">
              <img :src="SoundSlowIcon" alt="Slow Audio" />
            </a>
          </div>
        </div>
      </div>
      <LessonFooter
        :courseId="1"
        :state="state"
        @next="nextPhrase"
        @prev="prevPhrase"
        @state-change="onStateChange"
      />
    </section>

    <!-- Increase speed -->

    <TrainingStart @close="onStart" v-else />
  </div>

  <audio style="display: none" ref="audioRef"></audio>
</template>

<script setup>
import { ref } from "vue";
import LessonHeader from "../components/Lesson/LessonHeader.vue";
import LessonFooter from "../components/Lesson/LessonFooter.vue";
import TrainingStart from "../components/Lesson/modals/TrainingStart.vue";

import AudioIcon from "../components/icons/audio.svg";
import SoundSlowIcon from "../components/icons/sound-slow.svg";

import RussianPhrase from "../components/sounds/russianPhrase.mp3";
import EnglishPhrase from "../components/sounds/EnglishPhrase.mp3";

const countDown = ref(true);
const currentPhrase = ref(0);
const audioRef = ref(null);

const state = ref("reset");

const showEnglishPhrase = ref(false);
const showRussianPhrase = ref(false);

const onStateChange = (type) => {
  if (type === "reset") {
    audioRef.value.src = dummyPhrases[currentPhrase.value].ruAudio;
    audioRef.value.play();
  } else if (type === "end") {
    showEnglishPhrase.value = true;
    audioRef.value.src = dummyPhrases[currentPhrase.value].enAudio;
    audioRef.value.play();
  } else if (type === "pause") {
    if (state.value != "start") audioRef.value.pause();
  } else if (type === "resume") {
    if (state.value != "start") audioRef.value.play();
  }
};

const onStart = () => {
  countDown.value = false;
  showRussianPhrase.value = true;

  audioRef.value.src = dummyPhrases[currentPhrase.value].ruAudio;
  audioRef.value.play();

  // add event listener for onended audio
  const onended = () => {
    state.value = "start";
  };

  audioRef.value.addEventListener("ended", onended);
};

const nextPhrase = () => {
  if (currentPhrase.value === dummyPhrases.length - 1) {
    console.log("On ended");
    return;
  }

  currentPhrase.value++;
  countDown.value = true;
  audioRef.value.pause();
  audioRef.value.currentTime = 0;
  state.value = "reset";
  showEnglishPhrase.value = false;
};

const prevPhrase = () => {
  if (currentPhrase.value === 0) {
    return;
  }

  currentPhrase.value++;
  countDown.value = true;
  audioRef.value.pause();
  audioRef.value.currentTime = 0;
  state.value = "reset";
  showEnglishPhrase.value = false;
};

const dummyPhrases = [
  {
    en: "She likes to buy groceries at the store",
    ru: "Она любит покупать продукты в магазине",

    enAudio: EnglishPhrase,
    ruAudio: RussianPhrase,
  },
  {
    en: "She likes to buy groceries at the store",
    ru: "Она любит покупать продукты в магазине",

    enAudio: EnglishPhrase,
    ruAudio: RussianPhrase,
  },
  {
    en: "She likes to buy groceries at the store",
    ru: "Она любит покупать продукты в магазине",

    enAudio: EnglishPhrase,
    ruAudio: RussianPhrase,
  },
  {
    en: "She likes to buy groceries at the store",
    ru: "Она любит покупать продукты в магазине",

    enAudio: EnglishPhrase,
    ruAudio: RussianPhrase,
  },
  {
    en: "She likes to buy groceries at the store",
    ru: "Она любит покупать продукты в магазине",

    enAudio: EnglishPhrase,
    ruAudio: RussianPhrase,
  },
];
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.9s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
