<template>
  <div class="wrapper">
    <HeaderComponent />

    <MainPage />

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/organisms/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/organisms/FooterComponent/FooterComponent.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'
</script>

<style></style>
