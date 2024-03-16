<template>
  <div class="checkbox-component">
    <div class="checkbox-container">
      <input
        class="checkbox-input"
        type="checkbox"
        v-model="selectedOption"
        :value="value"
        :id="id"
        :name="name"
      />

      <div class="checkbox-custom"></div>
    </div>

    <label class="checkbox-component__label"><slot></slot></label>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  value: String,
  id: String,
  name: String
})

const selectedOption = ref('')
</script>

<style scoped>
@import './CheckboxComponent.scss';
</style>
