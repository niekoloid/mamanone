<template>
  <div class="complete-container">
    <div class="header-msg">
      <h1>お待たせしました！</h1>
      <p>あなたの「ママノネ」が完成しました</p>
    </div>

    <div class="player-card">
      <div class="album-art">
        <span class="music-icon">🎵</span>
      </div>
      <div class="track-info">
        <h3>{{ generatedSong.title }}</h3>
        <p class="duration">{{ generatedSong.duration }}</p>
      </div>
      
      <div class="controls">
        <button class="play-btn" @click="togglePlay">
          <span v-if="isPlaying">⏸</span>
          <span v-else>▶</span>
        </button>
      </div>
      
      <p class="play-hint" v-if="!isPlaying">タップして再生</p>
    </div>

    <div class="action-buttons">
      <button class="cta-button secondary full-width" @click="share">
        家族にシェアする
      </button>
      <button class="cta-button text-only full-width" @click="goList">
        さっそく曲リストを見る
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#imports'
import { useOnboarding } from '~/composables/useOnboarding'

const router = useRouter()
const { generatedSong } = useOnboarding()
const isPlaying = ref(false)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}

const share = () => {
  alert('パパにLINEで送る画面が開きます（モック）')
}

const goList = () => {
  // Ideally navigate to a dashboard/list page, currently back to LP or Home
  router.push('/lp')
}
</script>

<style scoped>
.complete-container {
  min-height: 100vh;
  justify-content: space-between;
  background: linear-gradient(180deg, #fdfaf7 0%, #fae1dd 100%);
  color: #5d544b;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-msg {
  margin-top: 2rem;
  text-align: center;
}

.header-msg h1 {
  font-size: 1.6rem;
  color: #d4a373;
  margin-bottom: 0.5rem;
}

.player-card {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(166, 139, 124, 0.15);
  width: 100%;
  max-width: 350px;
  text-align: center;
  margin: 2rem 0;
}

.album-art {
  width: 120px;
  height: 120px;
  background: #fdfaf7;
  border-radius: 20px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.music-icon {
  font-size: 3rem;
}

.track-info h3 {
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  color: #5d544b;
}

.duration {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 1.5rem;
}

.play-btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #d4a373;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(212, 163, 115, 0.4);
  transition: transform 0.2s;
}

.play-btn:active {
  transform: scale(0.95);
}

.play-hint {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #aaa;
}

.action-buttons {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-button {
  padding: 1rem;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.cta-button.secondary {
  background: white;
  color: #d4a373;
  border: 2px solid #d4a373;
}

.cta-button.text-only {
  background: none;
  color: #777;
  font-weight: normal;
  text-decoration: underline;
}
</style>
