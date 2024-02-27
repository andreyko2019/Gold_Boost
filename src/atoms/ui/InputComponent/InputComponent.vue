<template>
  <input class="input" :placeholder="placeholderText" />
</template>

<script setup>
defineProps({
  placeholderText: String
})
</script>

<style>
@import './InputComponent.scss';
</style>
