<template>
  <main-layout :title="'Settings'" back-btn>
    <section class="settings-wrapper">
      <div class="settings-header">
        <div class="setting-header-left">
          <div class="avatar">
            <img :src="AvatarIcon" alt="Avatar" />
          </div>
          <div>
            <h5>{{ store.user }}</h5>
            <p>Connected Via Google</p>
          </div>
        </div>
        <a href="javascript:void(0)">
          <img :src="ArrowRightIcon" alt="Arrow Right" />
        </a>
      </div>
      <div class="setting-items">
        <a href="javascript:void(0);" class="setting-item">
          <img :src="SubscriptionIcon" alt="Subscription" />
          <p>Subscription</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="InstagramIcon" alt="Instagram" />
          <p>Instagram</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="SupportIcon" alt="Support" />
          <p>Support</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="TeamIcon" alt="team" />
          <p>Team & Privacy</p>
        </a>
        <a href="javascript:void(0);" class="setting-item">
          <img :src="ShareIcon" alt="Share" />
          <p>Share with friends</p>
        </a>
        <a><button class="logout" @click="HandleLogout()">LOGOUT</button></a>
      </div>
    </section>
  </main-layout>
</template>

<script setup>
import AvatarIcon from "components/icons/avatar.svg";
import ArrowRightIcon from "components/icons/arrow-right.svg";
import SubscriptionIcon from "components/icons/subscription.svg";
import InstagramIcon from "components/icons/instagram.svg";
import SupportIcon from "components/icons/support.svg";
import TeamIcon from "components/icons/team.svg";
import ShareIcon from "components/icons/share.svg";
import { useUserStore } from "src/stores/useUserStore";
import MainLayout from "layouts/MainLayout.vue";
import { useRouter } from "vue-router";

import { useQuasar } from "quasar";
const $q = useQuasar();

const showNotify = (message, type = "negative") => {
  $q.notify({
    message: message,
    color: type,
    position: "top",
    timeout: 1000,
  });
};

const router = useRouter();

const store = useUserStore();
const accessToken = store.setAccessToken();

const HandleLogout = () => {
  store.setUser(null);
  store.setAccessToken(null);
  showNotify("Logout Successful", "positive");
  router.push("/");
};

defineOptions({
  name: "SettingPage",
});
</script>
<style>
.logout {
  background: none;
  border: none;
}
.logout:hover {
  font-size: 1rem;
}
</style>
