<template>
  <div id="close-lesson" class="overlay modal-main-wrap">
    <div class="popup">
      <div class="modal-content">
        <h3>You will lose progress if you close now</h3>
        <a href="" @click.prevent="$emit('close')">Continue lesson</a>
        <a href="" @click.prevent="router.go(-1)">Go out</a>
      </div>
      <a class="popup-close-btn" @click.prevent="$emit('close')" href="">
        <p>&times;</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
defineEmits(["close", "back"]);
</script>
