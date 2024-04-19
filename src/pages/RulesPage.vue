<template>
  <MainLayout title="present simple" back-btn>
    <div class="rules-wrapper">
      <div class="youtube-video">
        <img :src="youtube" width="100%" alt="Youtube" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
        imperdiet nunc, vitae viverra elit. Maecenas ut ipsum sollicitudin,
        auctor mauris et, pellentesque leo. Nunc sit amet blandit arcu. Nullam
        malesuada malesuada dapibus. <b>Vivamus iaculis velit</b> vel volutpat
        egestas.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Pellentesque viverra nisi ut ultricies scelerisque.</li>
        <li>Quisque quis enim a eros venenatis porttitor non et ipsum.</li>
        <li>Sed et dui a sem varius hendrerit at ac lorem.</li>
      </ul>
      <div class="green-button">
        <router-link to="/course/1/lesson"> Train </router-link>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "src/layouts/MainLayout.vue";
import { onBeforeMount, ref } from "vue";
import youtube from "../components/icons/youtube.svg";

const rules = ref({
  description: "",
  video: "url",
  rules: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
});

const getCourseRules = () => {
  //const data = axios.get("http://localhost:8000/api/getCourseRules/123456")
  // rules.value = data.data;
};

onBeforeMount(() => {
  getCourseRules();
});
</script>
