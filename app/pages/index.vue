<template>
  <div class="lp-wrapper">
    <!-- 1. ヒーローセクション -->
    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="badge">世界でひとつの、ママの歌声</div>
        <h1 class="main-copy">あなたの声が、<br>いちばんの安心。</h1>
        <p class="sub-copy">
          AIで再現する、ママだけの優しい歌声。<br>
          家事の最中も、寝かしつけの夜も、お子さんのそばにあなたの温もりを。
        </p>
        <button class="cta-button primary" @click="scrollNext">無料でママの声を登録してみる</button>
      </div>
    </header>

    <!-- 2. 共感セクション -->
    <section id="empathy" class="empathy">
      <div class="container fade-in">
        <h2 class="section-title small">あの日、感じた小さな罪悪感。</h2>
        <div class="empathy-content">
          <p>
            夕飯の準備中に泣き出した赤ちゃんを抱っこしてあげられないもどかしさ。<br>
            「ちょっとだけ待ってね」とYouTubeを見せてしまう時の小さな後ろめたさ。<br>
            仕事で離れている間、寂しい思いをさせていないかという不安。
          </p>
          <p class="highlight">
            ママノネは、そんなあなたの代わりに、<br>
            あなたの愛を伝え続けます。
          </p>
        </div>
      </div>
    </section>

    <!-- 3. ソリューション -->
    <section class="solutions">
      <div class="container">
        <h2 class="section-title">ママノネが、特別な理由</h2>
        <div class="solution-grid">
          <div class="solution-card">
            <div class="icon">💝</div>
            <h3>「本物のママの歌声」</h3>
            <p>機械的な合成音ではなく、AIがあなたの歌い方のクセまで学習。赤ちゃんが本能的に安心する揺らぎを再現します。</p>
          </div>
          <div class="solution-card">
            <div class="icon">⏱️</div>
            <h3>「収録はたったの3分」</h3>
            <p>忙しい毎日の中でも大丈夫。スマホに向かって少し歌うだけで、あなたの「歌声モデル」が完成します。</p>
          </div>
          <div class="solution-card">
            <div class="icon">👶</div>
            <h3>「名前を呼んでくれる」</h3>
            <p>歌詞の中に、お子さんの名前を自由に入れられます。世界に一つだけの、特別な子守唄を届けましょう。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 利用シーン -->
    <section class="use-cases">
      <div class="container">
        <h2 class="section-title">こんな時に、ママノネ</h2>
        <div class="case-item">
          <div class="case-image">
            <img src="/sleeping_baby.png" alt="寝顔の赤ちゃん">
          </div>
          <div class="case-text">
            <h4>夕暮れのキッチンで</h4>
            <p>手が離せない時、リビングのスピーカーからいつものママの歌声。赤ちゃんは安心して、ご機嫌で待っていてくれます。</p>
          </div>
        </div>
        <div class="case-item reverse">
          <div class="case-text">
            <h4>パパの寝かしつけに</h4>
            <p>ママが不在の夜も。ママの歌声があれば、パパもスムーズに寝かしつけ。家族みんなに、穏やかな夜を。</p>
          </div>
          <div class="case-icon-placeholder">🌙</div>
        </div>
      </div>
    </section>

    <!-- 5. 安全性と信頼性 -->
    <section class="security">
      <div class="container">
        <div class="security-box">
          <h3>大切な声のデータ、安心の守り</h3>
          <p>お預かりする声のデータは、銀行レベルの最新技術で暗号化されます。ご本人の許可なく第三者に利用されることはありません。あなたの「アイデンティティ」を、大切に守り続けます。</p>
        </div>
      </div>
    </section>

    <!-- 6. クロージング -->
    <section id="register" class="closing">
      <div class="container text-center">
        <h2 class="closing-copy">ママが楽をするためではなく、<br>愛情を途切れさせないために。</h2>
        <p class="closing-sub">「ママノネ」は、忙しいあなたに寄り添う、新しい愛のカタチです。</p>
        
        <div class="registration-form">
          <input type="email" placeholder="メールアドレスを入力" v-model="email">
          <button class="cta-button pulse" @click="onRegister">今すぐ無料で登録する</button>
          <p class="privacy-note">※事前登録特典：正式リリース時に限定子守唄セットをプレゼント</p>
        </div>
      </div>
    </section>

    <footer class="lp-footer">
      <p>&copy; 2026 Mama no Ne. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'ママノネ | あなたの声が、いちばんの安心。',
  meta: [
    { name: 'description', content: 'AIで再現するママの歌声で、赤ちゃんに安心を。ワンオペ育児や復職後のママを支える新しいサービス「ママノネ」。' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }
  ]
})

const email = ref('')

const scrollNext = () => {
  const next = document.getElementById('empathy')
  next?.scrollIntoView({ behavior: 'smooth' })
}

const onRegister = () => {
  if (!email.value) {
    alert('メールアドレスを入力してください。')
    return
  }
  alert(`${email.value} 様、事前登録を受け付けました。ありがとうございます。`)
}
</script>

<style scoped>
.lp-wrapper {
  font-family: 'Noto Sans JP', sans-serif;
  color: #5d544b;
  line-height: 1.8;
  background-color: #fdfaf7;
  overflow-x: hidden;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.text-center { text-align: center; }

/* ヒーロー */
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: url('/hero.png') center/cover no-repeat;
  color: #fff;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255,255,255,0.3);
}

.main-copy {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.sub-copy {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

/* 共感 */
.empathy {
  padding: 8rem 0;
  background-color: #fff;
}

.section-title {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #a68b7c;
}

.section-title.small { font-size: 1.8rem; }

.empathy-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
}

.highlight {
  margin-top: 3rem;
  font-weight: 700;
  font-size: 1.4rem;
  color: #d4a373;
}

/* ソリューション */
.solutions {
  padding: 8rem 0;
  background-color: #fdfaf7;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.solution-card {
  background: #fff;
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(166, 139, 124, 0.05);
  transition: transform 0.3s ease;
}

.solution-card:hover { transform: translateY(-5px); }

.icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.solution-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #a68b7c;
}

/* 利用シーン */
.use-cases {
  padding: 8rem 0;
}

.case-item {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
}

.case-item.reverse { flex-direction: row-reverse; }

.case-image img {
  width: 100%;
  max-width: 450px;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.case-icon-placeholder {
  font-size: 8rem;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fae1dd;
  border-radius: 30px;
}

.case-text h4 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #d4a373;
}

/* セキュリティ */
.security {
  padding: 4rem 0;
}

.security-box {
  background: #f1f1f1;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  border: 1px dashed #ccc;
}

.security-box h3 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

/* クロージング */
.closing {
  padding: 10rem 0;
  background: linear-gradient(180deg, #fdfaf7 0%, #fae1dd 100%);
}

.closing-copy {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.closing-sub {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  opacity: 0.8;
}

.registration-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.registration-form input {
  padding: 1.2rem 1.5rem;
  border-radius: 50px;
  border: 1px solid #d4a373;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.registration-form input:focus {
  box-shadow: 0 0 10px rgba(212, 163, 115, 0.2);
}

.privacy-note {
  font-size: 0.85rem;
  color: #a68b7c;
  margin-top: 1rem;
}

/* ボタン */
.cta-button {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: #d4a373;
  color: #fff;
  box-shadow: 0 10px 20px rgba(212, 163, 115, 0.3);
}

.cta-button.primary:hover {
  background: #bc8a5f;
  transform: scale(1.05);
}

.cta-button.pulse {
  background: #f08080;
  color: #fff;
  box-shadow: 0 10px 20px rgba(240, 128, 128, 0.3);
  animation: pulse 2s infinite;
}

.cta-button .small {
  font-size: 0.9rem;
  font-weight: 400;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.lp-footer {
  padding: 4rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #999;
}

@media (max-width: 768px) {
  .main-copy { font-size: 2.5rem; }
  .case-item { flex-direction: column; text-align: center; }
  .case-item.reverse { flex-direction: column; }
}
</style>
