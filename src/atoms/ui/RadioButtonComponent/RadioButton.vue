<template>
  <div>
    <div class="radio-container">
      <input
        class="radio-input"
        type="radio"
        v-model="selectedOption"
        :value="value"
        :id="id"
        :name="name"
      />
      <div class="radio-custom"></div>
    </div>
    
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
@import './RadioButton.scss';
</style>
