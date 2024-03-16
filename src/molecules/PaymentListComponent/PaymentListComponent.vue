<template>
  <div class="payment-list">
    <radio-button
      :id="'payment_' + index"
      v-for="(payment, index) in paymentMethods"
      :key="index"
      :ariaLabel="payment.ariaLabel"
      class="payment-item"
      name="paymentMethod"
    >
      <component class="payment-list__icon" :is="payment.icon" />
    </radio-button>
  </div>
</template>

<script setup>
import RadioButton from '@/atoms/ui/RadioButtonComponent/RadioButton.vue'
import PaypalIcon from '@/atoms/icons/PaypalIcon.vue'
import VisaIcon from '@/atoms/icons/VisaIcon.vue'
import MasterCardIcon from '@/atoms/icons/MasterCardIcon.vue'
import AmericanExpressIcon from '@/atoms/icons/AmericanExpressIcon.vue'

const paymentMethods = [
  { icon: PaypalIcon, ariaLabel: 'PayPal' },
  { icon: VisaIcon, ariaLabel: 'Visa' },
  { icon: MasterCardIcon, ariaLabel: 'MasterCard' },
  { icon: AmericanExpressIcon, ariaLabel: 'AmericanExpress' }
]
</script>

<style>
@import './PaymentListComponent.scss';
</style>
