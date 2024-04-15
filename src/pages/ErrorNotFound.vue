<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh; color: #2a2a2a">404</div>

      <div class="text-h2" style="opacity: 0.4; color: #2a2a2a">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl q-px-lg rounded-borders"
        color="grey-10"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        size="md"
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>
