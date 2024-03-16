<template>
  <div class="attention-block">
    <WarrningIcon class="attention-block__icon" />

    <p class="attention-block__text">
      Data is needed solely because of the security requirements of Europe and the United States.
    </p>
  </div>
</template>

<script setup>
import WarrningIcon from '@/atoms/icons/WarrningIcon.vue'
</script>

<style>
@import './AttentionComponent.scss';
</style>
