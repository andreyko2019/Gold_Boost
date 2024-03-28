<template>
  <div class="payment-method">
    <h2 class="payment-method__title basket-section-title">Payment Method</h2>

    <PaymentListComponent class="payment-method__payments-list" />
  </div>
</template>

<script setup>
import PaymentListComponent from '@/molecules/PaymentListComponent/PaymentListComponent.vue'
</script>

<style>
@import './PaymentMethodComponent.scss';
</style>
