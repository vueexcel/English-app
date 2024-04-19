<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="" role="button" @click.prevent="router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </a>
      <h3>Forgot Password?</h3>
    </div>
    <div class="forgot">
      <img :src="forgot" alt="Forgot Password" />
    </div>
    <div class="wrapper-vertical-center">
      <div class="forgot-password-note">
        <p>
          Don’t worry! it happens. Please enter E-mail associated with your
          account
        </p>
      </div>
      <div class="form-body py-0">
        <form
          action="api/auth/forgot"
          method="POST"
          enctype="multipart/form-data"
          @submit.prevent="handleForgotPassword"
        >
          <div class="input-field">
            <label for="email">Enter your E-mail</label>
            <input
              v-model="email"
              type="text"
              id="email"
              class="form-control"
              placeholder="user@gmail.com"
            />
          </div>
          <div class="forgot-pass">
            <input type="submit" class="btn" value="Get" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ArrowLeftIcon from "components/icons/arrow-left.svg";
import { useQuasar } from "quasar";
import { SERVER_URL } from "src/constants";
import forgot from "../components/icons/forgot-image.svg";

const $q = useQuasar();

defineOptions({
  name: "ForgotPassword",
});

const showNotify = (message, type = "negative") => {
  $q.notify({
    message: message,
    color: type,
    position: "top",
    timeout: 1000,
  });
};

const router = useRouter();
const email = ref("");

const handleForgotPassword = () => {
  console.log("hey");
  if (!email.value) {
    showNotify("Please enter your email");
    console.log("heyhyeg");
  } else {
    axios
      .post(`${SERVER_URL}/api/send-reset-password-email`, {
        email: email.value,
      })
      .then((response) => {
        console.log(response);
        if (response.data && response.data.status === "success") {
          showNotify("Password reset link sent to your email", "positive");
        } else {
          showNotify("Invalid email", "negative");
        }
      })
      .catch((error) => {
        console.error(error);
        showNotify("Email not found", "negative");
      });
  }
};
</script>
<style scoped>
.forgot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}
</style>
