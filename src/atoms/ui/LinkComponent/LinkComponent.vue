<template>
  <router-link class="link" :to="to">
    <slot class="link__icon-block"></slot>
    {{ text }}
  </router-link>
</template>

<script setup>
defineProps({
  text: String,
  to: [String, Object]
})
</script>

<style>
@import './LinkComponent.scss';
</style>
