<template>
  <div class="input-block">
    <InputComponent
      class="input-block__input"
      :placeholderText="$t('footer.discount.inputPlaceholder')"
    />

    <ButtonComponent class="input-block__button" rectangle>{{
      $t('footer.discount.button')
    }}</ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
</script>

<style>
@import './InputBlockComponent.scss';
</style>
