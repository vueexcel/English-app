<template>
  <div class="lesson-page">
    <!-- Login Screen -->
    <section
      class="screen-wrapper"
      v-if="countdown === 0"
      style="display: flex; flex-direction: column"
    >
      <div class="lesson-page-header">
        <a href="#close-lesson"><img :src="CrossIcon" alt="Cross" /></a>
        <div class="progress-bar-top">
          <span></span>
          <em style="width: 165px"></em>
        </div>
      </div>
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
            <h2>Она любит покупать продукты в магазине</h2>
            <transition name="slide-fade">
              <h2
                id="english-phrase"
                href="englishPhrase"
                v-if="showEnglishPhras"
              >
                She likes to buy groceries at the store
              </h2>
            </transition>
          </div>
          <div class="mute-slow">
            <a href="javascript:void(0)"
              ><img :src="AudioIcon" alt="Audio"
            /></a>
            <a href="javascript:void(0)"
              ><img :src="SoundSlowIcon" alt="Slow Audio"
            /></a>
          </div>
        </div>
      </div>
      <div class="lesson-page-body lpb2">
        <div class="control-bar-block">
          <div class="progress-bar-bottom">
            <span></span>
            <em id="gradient-bar" class="timelapse"></em>
          </div>
          <div class="audio-control">
            <a href="javscript:void(0);"
              ><img :src="AngleLeftIcon" alt="Angle Left"
            /></a>
            <a href="javscript:void(0);"
              ><img :src="PauseIcon" alt="Pause"
            /></a>
            <a href="javscript:void(0);">
              <img :src="AngleRightIcon" alt="Angle Right"
            /></a>
          </div>
          <div class="lesson-footer">
            <a href="#change-level"
              ><img :src="VolumeControlIcon" alt="Volume Control"
            /></a>
            <a href="#report-error"><img :src="ErrorIcon" alt="Error" /></a>
            <RouterLink to="/course/1/rules"
              ><img :src="QuestionIcon" alt="Question"
            /></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Lesson Close -->
    <div id="close-lesson" class="overlay modal-main-wrap">
      <div class="popup">
        <div class="modal-content">
          <h3>You will lose progress if you close now</h3>
          <a href="#">Continue lesson</a>
          <RouterLink to="/category/123">GO OUT</RouterLink>
        </div>
        <a class="popup-close-btn" href="#">
          <p>&times;</p>
        </a>
      </div>
    </div>

    <!-- Increase level -->
    <div
      id="increase-level"
      class="overlay modal-main-wrap"
      :class="{ 'opacity-1': showIncreaseLevel }"
    >
      <div class="popup">
        <div class="modal-content">
          <h3>
            You have completed all the phrases. Want to increase your speed?
          </h3>
          <a href="javascript:void(0);" @click="showIncreaseLevel = false"
            >Increase a speed</a
          >
          <a href="#" class="repeat-speed">Repeat at this speed</a>
        </div>
        <a class="popup-close-btn" href="#" @click="showIncreaseLevel = false">
          <p>&times;</p>
        </a>
      </div>
    </div>

    <!-- Change level -->
    <div id="change-level" class="overlay modal-main-wrap">
      <div class="popup">
        <div class="modal-content">
          <h3>You are at level 3 out of 4</h3>
          <div class="level-list">
            <p>Decrease to 1</p>
            <p>Decrease to 2</p>
            <p><b>Stay for 3</b></p>
            <p>Increase to 4</p>
          </div>
        </div>
        <a class="popup-close-btn" href="#">
          <p>&times;</p>
        </a>
      </div>
    </div>

    <!-- Report Error -->
    <div id="report-error" class="overlay modal-main-wrap">
      <div class="popup">
        <div class="modal-content">
          <form @submit.prevent="submitErrorReport" class="report-form">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
              v-model="name"
            />
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
              v-model="email"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              height="300"
              class="form-control"
              placeholder="Enter your Message"
              v-model="message"
            ></textarea>
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
        <a class="popup-close-btn" href="#">
          <p>&times;</p>
        </a>
      </div>
    </div>

    <!-- Sent Error Confirmation -->
    <div id="error-sent-confirm" class="overlay modal-main-wrap">
      <div class="popup">
        <h4>
          Thank you for your attention, the error message has been sent, we will
          check and fix it.
        </h4>
        <a href="#" class="continue-traning">Continue Training</a>
        <a class="popup-close-btn" href="#">
          <p>&times;</p>
        </a>
      </div>
    </div>

    <div class="training-starts" id="training-starts">
      <div class="start-content">
        <h5>Training will start in</h5>
        <h1>{{ countdown }}</h1>
      </div>
      <div class="training-overlay"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import CrossIcon from "components/icons/cross.svg";
import AudioIcon from "components/icons/audio.svg";
import SoundSlowIcon from "components/icons/sound-slow.svg";
import AngleLeftIcon from "components/icons/angle-left.svg";
import PauseIcon from "components/icons/pause.svg";
import AngleRightIcon from "components/icons/angle-right.svg";
import VolumeControlIcon from "components/icons/volume-control.svg";
import ErrorIcon from "components/icons/error.svg";
import QuestionIcon from "components/icons/question.svg";

defineOptions({
  name: "LessonPage",
});

const showIncreaseLevel = ref(false);
const name = ref("");
const email = ref("");
const message = ref("");
const countdown = ref(3);

const showEnglishPhras = ref(false);

const submitErrorReport = () => {
  // Your logic to submit error report
};

onMounted(() => {
  setTimeout(() => {
    showIncreaseLevel.value = true;
  }, 15000);

  setTimeout(() => {
    document.getElementById("training-starts").style.display = "none";
  }, 3000);

  setTimeout(() => {
    showEnglishPhras.value = true;
  }, 10000);

  const countdownInterval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
});

onUnmounted(() => {
  // logic
});
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
