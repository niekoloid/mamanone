<template>
  <div class="waveform-container" :class="{ 'is-active': active }">
    <div class="bar" v-for="n in 20" :key="n" :style="{ animationDelay: `${n * 0.1}s` }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<style scoped>
.waveform-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 60px;
}

.bar {
  width: 4px;
  height: 10%;
  background-color: #d4a373; /* Warm beige-brown */
  border-radius: 2px;
  transition: height 0.2s ease;
}

.is-active .bar {
  animation: sound-wave 1s ease-in-out infinite;
}

@keyframes sound-wave {
  0% { height: 10%; }
  50% { height: 100%; }
  100% { height: 10%; }
}
</style>
