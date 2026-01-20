<template>
  <div class="lyrics-card">
    <h3 class="song-title">{{ title }}</h3>
    <div class="lyrics-body">
      <p v-for="(line, index) in lyrics" :key="index">{{ line }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  lyrics: string[]
}

defineProps<Props>()
</script>

<style scoped>
.lyrics-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 90%;
  width: 100%;
}

.song-title {
  font-size: 1.2rem;
  color: #a68b7c;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #fae1dd;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.lyrics-body p {
  font-size: 1.4rem;
  line-height: 2;
  color: #5d544b;
  font-weight: 500;
}
</style>
