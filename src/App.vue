<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { App, URLOpenListenerEvent } from "@capacitor/app";

const router = useRouter();

onMounted(() => {
  App.addListener("appUrlOpen", (event) => {
    // http://localhost:500/reset/token#sdsgdr?hyjuhj=uygjh&gf-78
    // https://localhost:5000/reset/token
    // http://localhost/reset/token
    // https://example.com/reset/token

    const url = new URL(event.url);
    const path = url.pathname.split("/"); // ["", "reset", "token"]
    const token = path[2];

    router.push({ name: "reset", params: { token } });
  });
});
defineOptions({
  name: "App",
});
</script>
