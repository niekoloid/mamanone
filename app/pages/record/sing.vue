<template>
  <div class="sing-container">
    <div class="progress-header">
      <div class="step-label">1/3曲目</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 33%"></div>
      </div>
    </div>

    <div class="main-content">
      <LyricsCard 
        title="きらきら星" 
        :lyrics="['きらきらひかる', 'おそらのほしよ', 'まばたきしては', 'みんなをみてる']" 
      />
      
      <div class="visualizer-area">
        <WaveformVisualizer :active="recordingState === 'recording'" />
        <p class="status-text" v-if="recordingState === 'recording'">録音中...</p>
        <p class="status-text" v-else>準備ができたらボタンを押してね</p>
      </div>
    </div>

    <div class="footer-controls">
      <div class="controls-wrapper">
        <div v-if="recordingState === 'completed'" class="next-action">
           <button class="cta-button primary full-width" @click="goNext">次へ進む</button>
           <button class="text-link" @click="retry">最初から歌い直す</button>
        </div>

        <div v-else class="record-action">
          <button 
            class="record-btn" 
            :class="{ 'is-recording': recordingState === 'recording' }"
            @click="toggleRecord"
          >
            <div class="inner-circle"></div>
          </button>
          <p class="hint">タップして{{ recordingState === 'recording' ? '停止' : '録音開始' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from '#imports'
import { useOnboarding } from '~/composables/useOnboarding'

const router = useRouter()
const { recordingState, startRecording, stopRecording, resetRecording } = useOnboarding()

const toggleRecord = () => {
  if (recordingState.value === 'idle') {
    startRecording()
    // Simulate recording for interaction demo
  } else if (recordingState.value === 'recording') {
    // Finish recording
    stopRecording(new Blob(['mock-audio'], { type: 'audio/webm' }))
  }
}

const retry = () => {
  resetRecording()
}

const goNext = () => {
  router.push('/record/processing')
}
</script>

<style scoped>
.sing-container {
  min-height: 100vh;
  background-color: #fdfaf7;
  color: #5d544b;
  font-family: 'Noto Sans JP', sans-serif;
  display: flex;
  flex-direction: column;
}

.progress-header {
  padding: 1.5rem 2rem;
  background: white;
}

.step-label {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
  text-align: right;
}

.progress-bar {
  height: 6px;
  background: #eee;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #d4a373;
  border-radius: 3px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 180px; /* Space for controls */
}

.visualizer-area {
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

.status-text {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #aaa;
}

.footer-controls {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, #fdfaf7 80%, rgba(253, 250, 247, 0) 100%);
  display: flex;
  justify-content: center;
}

.controls-wrapper {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.record-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  border: 4px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto 1rem;
  transition: all 0.2s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.record-btn .inner-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f08080; /* Recording red/pink */
  transition: all 0.2s;
}

.record-btn.is-recording {
  border-color: #f08080;
}

.record-btn.is-recording .inner-circle {
  width: 30px;
  height: 30px;
  border-radius: 4px; /* Square for stop */
}

.hint {
  font-size: 0.9rem;
  color: #999;
}

.next-action {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-link {
  background: none;
  border: none;
  color: #999;
  text-decoration: underline;
  cursor: pointer;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button.primary {
  background: #d4a373;
  color: white;
  box-shadow: 0 4px 10px rgba(212, 163, 115, 0.4);
}

.cta-button.full-width {
  width: 100%;
}
</style>
