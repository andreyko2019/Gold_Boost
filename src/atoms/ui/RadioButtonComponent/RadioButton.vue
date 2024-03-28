<template>
  <div class="radio-component">
    <div class="radio-container">
      <input
        class="radio-input"
        type="radio"
        :value="value"
        :aria-label="ariaLabel"
        :id="id"
        :name="name"
        @change="emitOptionValue"
      />

      <div class="radio-custom"></div>

      <label class="radio-component__label" :for="id">
        <slot> </slot>
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  value: String,
  id: String,
  name: String,
  ariaLabel: String
})

const emitOption = defineEmits(['update:selectedOption'])

const emitOptionValue = (event) => {
  emitOption('update:selectedOption', event.target.value)
}
</script>

<style scoped>
@import './RadioButton.scss';
</style>
