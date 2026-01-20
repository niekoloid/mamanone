<template>
  <div class="processing-container">
    <div class="animation-area">
      <div class="blobs">
        <div class="blob"></div>
        <div class="blob delay"></div>
      </div>
      <h2>AIがママの優しさを<br>学習しています...</h2>
    </div>

    <div class="form-area card">
      <p class="form-title">待っている間に教えてください</p>
      
      <div class="form-group">
        <label>お子さんの名前</label>
        <input type="text" v-model="localInfo.name" placeholder="あきと" />
      </div>

      <div class="form-group">
        <label>ふだんの呼び方</label>
        <div class="toggle-group">
           <button 
             v-for="suffix in ['ちゃん', 'くん', '呼び捨て']" 
             :key="suffix"
             :class="{ active: localInfo.callSign === suffix }"
             @click="localInfo.callSign = suffix"
           >
             {{ suffix }}
           </button>
        </div>
      </div>

      <div class="form-group">
        <label>ママの呼び方</label>
        <div class="toggle-group">
           <button 
             v-for="mom in ['ママ', 'お母さん']" 
             :key="mom"
             :class="{ active: localInfo.momCallSign === mom }"
             @click="localInfo.momCallSign = mom"
           >
             {{ mom }}
           </button>
        </div>
      </div>
    </div>
    
    <div class="privacy-badge">
      <span class="icon">🔒</span>
      声のデータは暗号化され、<br>あなただけのものとして守られます
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from '#imports'
import { useOnboarding } from '~/composables/useOnboarding'

const router = useRouter()
const { updateChildInfo, setGeneratedSong } = useOnboarding()

const localInfo = ref({
  name: '',
  callSign: 'くん',
  momCallSign: 'ママ'
})

onMounted(() => {
  // Simulate AI processing time
  setTimeout(() => {
    finishProcessing()
  }, 5000)
})

const finishProcessing = () => {
  updateChildInfo(localInfo.value)
  setGeneratedSong({
    title: `${localInfo.value.name || 'お子さん'}${localInfo.value.callSign}、だいすきだよ（ゆりかごのうた）`,
    duration: '02:45'
  })
  router.push('/record/complete')
}
</script>

<style scoped>
.processing-container {
  min-height: 100vh;
  background-color: #fdfaf7;
  color: #5d544b;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.animation-area {
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: center;
}

.blobs {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
}

.blob {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fae1dd;
  border-radius: 50%;
  animation: blob-pulse 2s infinite ease-in-out;
  opacity: 0.7;
}

.blob.delay {
  animation-delay: 1s;
  background: #d4a373;
}

@keyframes blob-pulse {
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(0.8); opacity: 0.5; }
}

h2 {
  font-size: 1.4rem;
  color: #d4a373;
  line-height: 1.4;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
}

.form-title {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.95rem;
  color: #5d544b;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.form-group input:focus {
  border-color: #d4a373;
}

.toggle-group {
  display: flex;
  gap: 0.5rem;
}

.toggle-group button {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #eee;
  background: #f9f9f9;
  border-radius: 8px;
  color: #999;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.toggle-group button.active {
  background: #fae1dd;
  border-color: #f08080;
  color: #d85c5c;
  font-weight: bold;
}

.privacy-badge {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: #aaa;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.privacy-badge .icon {
  font-size: 1.2rem;
}
</style>
