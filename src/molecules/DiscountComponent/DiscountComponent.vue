<template>
  <div class="discount-block">
    <p class="discount-block__description">
      {{ text }}
    </p>

    <InputBlockComponent
      :placeholderText="$t('footer.discount.inputPlaceholder')"
      :buttonText="$t('footer.discount.button')"
      class="discount-block__input-block"
    />
  </div>
</template>

<script setup>
import InputBlockComponent from '@/molecules/InputBlockComponent/InputBlockComponent.vue'

defineProps(['text'])
</script>

<style>
@import './DiscountComponent.scss';
</style>
