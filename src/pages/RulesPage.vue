<template>
  <MainLayout title="present simple" back-btn>
    <div class="rules-wrapper">
      <div class="youtube-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/FofANnMlD8w"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        Learn English Grammar .
        <b>Vivamus iaculis velit</b> vel volutpat egestas.
      </p>
      <ul>
        <li>
          Subject-Verb Agreement: Make sure the subject and verb agree in
          number.
        </li>
        <li>Use of Articles: Understand when to use 'a', 'an', and 'the'.</li>
        <li>Punctuation: Learn how to properly use punctuation marks.</li>
        <li>Conjunctions: Understand how to use conjunctions.</li>
      </ul>
      <div class="green-button">
        <router-link to="/course/1/lesson">Train</router-link>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "src/layouts/MainLayout.vue";
import { onBeforeMount, ref } from "vue";
import youtube from "../components/icons/youtube.svg";

const dummyRules = () => {
  rules.value = {
    description: "Learn English Grammar Rules",
    rules: [
      {
        title: "Subject-Verb Agreement",
        content: "Make sure the subject and verb agree in number.",
      },
      {
        title: "Use of Articles",
        content: "Understand when to use 'a', 'an', and 'the'.",
      },
      {
        title: "Punctuation",
        content: "Learn how to properly use punctuation marks.",
      },
      {
        title: "Conjunctions",
        content: "Understand how to use conjunctions.",
      },
    ],
  };
};

const getCourseRules = () => {
  //const data = axios.get("http://localhost:8000/api/getCourseRules/123456")
  // rules.value = data.data;
};

onBeforeMount(() => {
  getCourseRules();
});
</script>
