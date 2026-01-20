<template>
  <div class="intro-container">
    <div class="content">
      <div class="header">
        <h1>ママの声を<br>登録する</h1>
        <p class="subtitle">お子さんのために、あなたの声を<br>少しだけ聞かせてください</p>
      </div>

      <div class="illustration">
        <!-- Placeholder for Mom Icon -->
        <div class="mom-icon">👩‍🍼</div>
      </div>

      <div class="guidance-card">
        <h3><span class="icon">✨</span> 録音のポイント</h3>
        <ul>
          <li>静かな場所で録音してください</li>
          <li>歌が下手でも大丈夫！いつもの優しいトーンが一番です</li>
          <li>スマホを口元から20cmほど離して持ちましょう</li>
        </ul>
      </div>
    </div>

    <div class="footer-action">
      <button class="cta-button primary full-width" @click="start">録音をはじめる</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from '#imports'
import { useOnboarding } from '~/composables/useOnboarding'

const router = useRouter()
const { setStep } = useOnboarding()

const start = () => {
  setStep(1) // Move to recording step
  router.push('/record/sing')
}
</script>

<style scoped>
.intro-container {
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: 100px; /* Space for fixed footer */
  background-color: #fdfaf7;
  color: #5d544b;
  font-family: 'Noto Sans JP', sans-serif;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #d4a373;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  color: #999;
}

.illustration {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.mom-icon {
  font-size: 5rem;
  background: #fae1dd;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.guidance-card {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.guidance-card h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d4a373;
}

.guidance-card ul {
  list-style: none;
  padding: 0;
}

.guidance-card li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.guidance-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f08080;
  font-weight: bold;
}

.footer-action {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(253, 250, 247, 0.9);
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0,0,0,0.05);
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

.cta-button:active {
  transform: scale(0.98);
}
</style>
