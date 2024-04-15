<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <h3>Registration</h3>
    </div>
    <div class="form-body">
      <form action="#" method="POST" @submit.prevent="handleRegister">
        <div class="input-field">
          <label for="name">Enter your Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Your name"
            v-model="name"
          />
        </div>
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
        <div class="input-field">
          <label for="re-pass">Re-enter your password</label>
          <div class="position-relative w-100 password-wrap">
            <input
              id="password-field"
              type="password"
              class="form-control"
              name="re-pass"
              value=""
              placeholder="Enter password"
              v-model="rePassword"
            />
            <span
              toggle="#password-field"
              class="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>
        </div>
        <div class="forgot-pass">
          <input type="submit" class="btn" value="Register" />
        </div>
        <div class="create-account">
          <h6>Already have an account??</h6>
          <h6><RouterLink to="/">Login Here</RouterLink></h6>
        </div>
        <div class="or-para">
          <p>Or</p>
        </div>
        <div class="social-links">
          <button type="button" class="icon" @click="loginWithGoogle">
            <img :src="GoogleIcon" alt="Google" />
          </button>
          <button class="icon"><img :src="AppleIcon" alt="Apple" /></button>
          <button class="icon" type="button" @click="loginWithFacebook">
            <img :src="FacebookIcon" alt="Facebook" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import GoogleIcon from "components/icons/google.svg";
import FacebookIcon from "components/icons/facebook.svg";
import AppleIcon from "components/icons/apple.svg";
import { SERVER_URL } from "src/constants";

const router = useRouter();
const $q = useQuasar();

defineOptions({
  name: "RegisterPage",
});

const name = ref("");
const email = ref("");
const password = ref("");
const rePassword = ref("");

const showNotify = (message, type = "negative") => {
  $q.notify({
    message: message,
    color: type,
    position: "top",
    timeout: 1000,
  });
};

// login using google account
const loginWithGoogle = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/googleLogin`);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
// register using facebook account
const loginWithFacebook = async () => {
  try {
    const response = await axios.post("/facebookLogin");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
const handleRegister = () => {
  if (!name.value) {
    showNotify("Please enter your name");
  } else if (!email.value) {
    showNotify("Please enter your email");
  } else if (!password.value) {
    showNotify("Please enter your password");
  } else if (!rePassword.value) {
    showNotify("Please re-enter your password");
  } else if (password.value !== rePassword.value) {
    showNotify("Passwords do not match");
  } else {
    axios
      .post(`${SERVER_URL}/api/register`, {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          showNotify("Registration Successful", "positive");
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors.email);
        showNotify(error.response.data.errors.email);
      });
  }
};
</script>

<style>
.icon {
  background: none;
  border: none;
}
</style>
