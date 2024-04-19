<template>
  <div class="input-field">
    <label for="password">{{ label }}</label>
    <div class="position-relative w-100 password-wrap">
      <input
        id="password-field"
        :type="passwordFieldType"
        class="form-control"
        name="password"
        value=""
        :placeholder="placeholder"
        v-model="password"
      />
      <span
        @click="togglePasswordVisibility"
        class="fa fa-fw field-icon toggle-password"
        :class="{ 'fa-eye': showPassword, 'fa-eye-slash': !showPassword }"
      >
        <img :src="visible" alt=""
      /></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Show from "components/icons/show.svg";
import Hide from "components/icons/hide.svg";

const password = defineModel();

const passwordFieldType = ref("password");
const showPassword = ref(false);
const visible = ref(Show);

const togglePasswordVisibility = () => {
  if (visible.value == Show) {
    visible.value = Hide;
  } else if (visible.value == Hide) {
    visible.value = Show;
  }
  showPassword.value = !showPassword.value;
  passwordFieldType.value = showPassword.value ? "text" : "password";
};
defineProps({
  label: String,
  placeholder: String,
});
</script>
