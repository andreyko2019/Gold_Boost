<template>
  <button
    class="button"
    :class="{
      button_circle: circle,
      button_rectangle: rectangle,
      button_transparent: transparent,
      button_active: active
    }"
    :aria-label="arialLabel"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  arialLabel: String,
  rectangle: Boolean,
  circle: Boolean,
  transparent: Boolean,
  active: Boolean
})
</script>

<style>
@import 'ButtonComponent.scss';
</style>
