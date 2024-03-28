<template>
  <div class="checkbox-component">
    <div class="checkbox-container">
      <input
        class="checkbox-input"
        type="checkbox"
        v-model="checkbox"
        :value="value"
        :id="id"
        :name="name"
      />

      <div class="checkbox-custom"></div>
    </div>

    <label class="checkbox-component__label">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  value: String,
  id: String,
  name: String
})

const checkbox = defineModel()
</script>

<style scoped>
@import './CheckboxComponent.scss';
</style>
