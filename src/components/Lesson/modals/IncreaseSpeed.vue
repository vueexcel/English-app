<template>
  <!-- Increase Speed -->
  <div id="increase-level" class="overlay modal-main-wrap">
    <div class="popup">
      <div class="modal-content">
        <h3>
          You have completed all the phrases. Want to increase your speed?
        </h3>
        <a href="" @click.prevent="$emit('increase')">Increase a speed</a>
        <a href="" class="repeat-speed" @click.prevent="$emit('close')">
          Repeat at this speed
        </a>
      </div>
      <a class="popup-close-btn" href="" @click.prevent="$emit('close')">
        <p>&times;</p>
      </a>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close", "increase", "back"]);
</script>
