<template>
  <section class="screen-wrapper">
    <div class="screen-header">
      <q-btn v-if="backBtn" flat round dense @click.prevent="$router.back()">
        <img :src="ArrowLeftIcon" alt="Arrow Left" />
      </q-btn>
      <h3>{{ title }}</h3>
    </div>
    <slot></slot>
    <div class="app-screen-footer">
      <div>
        <router-link to="/home" active-class="active">
          <img :src="HomeIcon" alt="Home" />
        </router-link>
        <router-link to="/settings" active-class="active">
          <img :src="SettingsIcon" alt="Settings" />
        </router-link>
      </div>
    </div>
    <div style="height: 60px;width: 100%"></div>
  </section>
</template>

<script setup>
import ArrowLeftIcon from "components/icons/arrow-left.svg";
import HomeIcon from "components/icons/home.svg";
import SettingsIcon from "components/icons/settings.svg";

defineOptions({
  name: "SettingPage",
});

defineProps({
  title: String,
  backBtn: Boolean,
});
</script>
