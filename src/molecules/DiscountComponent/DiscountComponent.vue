<template>
  <div class="discount-block">
    <p class="discount-block__description">
      {{ $t('footer.discount.text') }}
    </p>

    <InputBlockComponent class="discount-block__input-block" />
  </div>
</template>

<script setup>
import InputBlockComponent from '@/molecules/InputBlockComponent/InputBlockComponent.vue'
</script>

<style>
@import './DiscountComponent.scss';
</style>
