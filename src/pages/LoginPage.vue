<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <h3>Login</h3>
    </div>
    <div class="form-body">
      <form action="api/auth/login" method="POST" @submit.prevent="handleLogin">
        <div class="input-field">
          <label for="email">Enter your E-mail</label>
          <input
            type="text"
            id="email"
            class="form-control"
            placeholder="user@gmail.com"
            v-model="email"
          />
        </div>
        <div class="input-field">
          <label for="password">Enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input
              id="password-field"
              type="password"
              class="form-control"
              name="password"
              value=""
              placeholder="Enter password"
              v-model="password"
            />
            <span
              toggle="#password-field"
              class="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>
        </div>
        <div class="forgot-pass">
          <p>
            <router-link to="/forgot">Forgot password?</router-link>
          </p>
          <input type="submit" class="btn" value="Login" />
        </div>
        <div class="create-account">
          <h6>Don’t have an account?</h6>
          <h6><router-link to="/register">Create an account</router-link></h6>
        </div>
        <div class="or-para">
          <p>Or</p>
        </div>
        <div class="social-links">
          <a href="#" role="button" @click.prevent="onGoogleLogin"
            ><img :src="GoogleIcon" alt="Google"
          /></a>
          <a href="#" role="button" @click.prevent="onAppleLogin"
            ><img :src="AppleIcon" alt="Apple"
          /></a>
          <a href="#" role="button" @click.prevent="onFacebookLogin"
            ><img :src="FacebookIcon" alt="Facebook"
          /></a>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

import GoogleIcon from "components/icons/google.svg";
import FacebookIcon from "components/icons/facebook.svg";
import AppleIcon from "components/icons/apple.svg";
import { SERVER_URL } from "src/constants";
import { useUserStore } from "src/stores/useUserStore";
const userStore = useUserStore();

const $q = useQuasar();

const router = useRouter();
const route = useRoute();

defineOptions({
  name: "LoginPage",
});

const onGoogleLogin = () => {
  console.log("Google Login");
};

const onAppleLogin = () => {
  console.log("Apple Login");
};

const onFacebookLogin = () => {
  console.log("Facebook Login");
};

const email = ref("");
const password = ref("");

const showNotify = (message, type = "negative") => {
  $q.notify({
    message: message,
    color: type,
    position: "top",
    timeout: 1000,
  });
};

const handleLogin = () => {
  if (!email.value) {
    showNotify("Please enter your email");
  } else if (!password.value) {
    showNotify("Please enter your password");
  } else {
    axios
      .post(`${SERVER_URL}/api/login`, {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          showNotify("Login Successful", "positive");
          const accessToken = response.data.access_token;
          userStore.setAccessToken(accessToken);
          console.log(accessToken);
          const userName = response.data.user.name;
          console.log(userName);
          userStore.setUserName(userName);
          router.push("/home");
        } else {
          console.log("invalid credentials");
          showNotify("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
        showNotify("Login Failed");
      });
    // showNotify("login successful", "positive");
    // router.push("/home");
  }
};
</script>
