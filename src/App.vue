<template>
  <div class="wrapper">
    <HeaderComponent />

    <router-view> </router-view>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/organisms/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/organisms/FooterComponent/FooterComponent.vue'
</script>

<style></style>
