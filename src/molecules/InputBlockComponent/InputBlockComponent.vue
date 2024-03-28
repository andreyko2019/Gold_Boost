<template>
  <div class="input-block">
    <InputComponent
      :border="border"
      class="input-block__input"
      :placeholderText="placeholderText"
    />

    <ButtonComponent class="input-block__button" rectangle>
      {{ buttonText }}
    </ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'

defineProps({
  placeholderText: String,
  buttonText: String,
  border: Boolean
})
</script>

<style>
@import './InputBlockComponent.scss';
</style>
