<template>
  <div class="hero-container">
    <NuxtRouteAnnouncer />
    <h1>Hello Nuxt 3</h1>
    <p>Welcome to your premium web application experience.</p>
    <button class="btn" @click="greet">Get Started</button>
  </div>
</template>

<script setup>
const greet = () => {
  alert('Welcome to your new Nuxt.js project!')
}
</script>
