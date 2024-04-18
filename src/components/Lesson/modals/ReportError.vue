<template>
  <!-- Report Error -->
  <div id="report-error" class="overlay modal-main-wrap" v-if="!isSubmited">
    <div class="popup">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit" class="report-form">
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
      <a class="popup-close-btn" href="" @click.prevent="$emit('close')">
        <p>&times;</p>
      </a>
    </div>
  </div>

  <div id="error-sent-confirm" class="overlay modal-main-wrap" v-else>
    <div class="popup">
      <h4>
        Thank you for your attention, the error message has been sent, we will
        check and fix it.
      </h4>
      <a href="" @click.prevent="$emit('close')" class="continue-traning"
        >Continue Training</a
      >
      <a class="popup-close-btn" href="" @click.prevent="$emit('close')">
        <p>&times;</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineEmits(["close"]);

const isSubmited = ref(false);
const loading = ref(false);

const name = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = () => {
  // do something

  console.log("form submitted", name.value, email.value, message.value);
  isSubmited.value = true;
};
</script>
