<template>
  <button
    class="button"
    :class="{
      button_circle: circle,  // todo: refactoring
      button_rectangle: rectangle === true,
      button_transparent: transparent === true,
      button_active: active === true
    }"
    :aria-label="arialLabel"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps(['ariaLabel', 'rectangle', 'circle']) //refactoring
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
