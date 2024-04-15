<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <a href="" role="button" @click.prevent="router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </a>
      <h3>Reset Password</h3>
    </div>
    <div class="form-body">
      <form
        action="api/auth/reset-password"
        method="POST"
        @submit.prevent="handleResetPassword"
      >
        <div class="input-field">
          <label for="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            class="form-control"
            placeholder="Enter new password"
            v-model="newPassword"
          />
        </div>
        <div class="input-field">
          <label for="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            class="form-control"
            placeholder="Confirm new password"
            v-model="confirmNewPassword"
          />
        </div>
        <div class="forgot-pass">
          <input type="submit" class="btn" value="Reset" />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { SERVER_URL } from "src/constants";

import { useQuasar } from "quasar";
import ArrowLeftIcon from "components/icons/arrow-left.svg";

const $q = useQuasar();

const showNotify = (message, type = "negative") => {
  $q.notify({
    message: message,
    color: type,
    position: "top",
    timeout: 1000,
  });
};

defineOptions({
  name: "ResetPassword",
});

const router = useRouter();
const route = useRoute();

const newPassword = ref("");
const confirmNewPassword = ref("");

const handleResetPassword = () => {
  if (!newPassword.value || !confirmNewPassword.value) {
    showNotify("Please enter new password and confirm new password");
  } else if (newPassword.value !== confirmNewPassword.value) {
    showNotify("New password and confirm new password do not match");
  } else {
    axios
      .post(`${SERVER_URL}/api/reset-password/${route.params.token}`, {
        password: newPassword.value,
      })
      .then((response) => {
        if (response.data.status === "success") {
          showNotify("Password reset successful", "positive");
          router.push("/");
        } else {
          showNotify("response.data.message");
        }
      })
      .catch((error) => {
        showNotify(error.data.message);
      });
  }
};
</script>
