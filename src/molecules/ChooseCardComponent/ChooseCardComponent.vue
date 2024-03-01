<template>
  <div class="choose-card">
    <div class="choose-card__icon-block">
      <component :is="img" />
    </div>

    <h3 class="choose-card__title">{{ title }}</h3>

    <p class="choose-card__description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  img: Object,
  title: String,
  description: String
})
</script>

<style>
@import './ChooseCardComponent.scss';
</style>
