<template>
  <div
    class="payment-result"
    :class="{
      'payment-result_success': status === 'success',
      'payment-result_error': status === 'error'
    }"
  >
    <div class="payment-result__container container">
      <div class="payment-result__figures">
        <div class="payment-result__figures-container">
          <div
            v-for="i in 6"
            :key="'circle-icon-' + i"
            :class="'payment-result__circle-icon payment-result__circle-icon-' + i"
          />

          <TriangleIcon
            v-for="i in 3"
            :key="'triangle-icon-' + i"
            :class="'payment-result__triangle-icon payment-result__triangle-icon-' + i"
          />
        </div>
      </div>

      <div class="payment-result__round payment-result__round">
        <div class="payment-result__round-inner">
          <div class="payment-result__round-icon-block">
            <CheckMarkIcon class="payment-result__round-icon" v-if="status === 'success'" />

            <span class="payment-result__round-icon" v-if="status === 'error'"></span>
          </div>
        </div>
      </div>

      <h1 class="payment-result__title">
        {{
          status === 'success'
            ? 'Thank You, Laff!'
            : status === 'error'
              ? 'Oops! There was a problem!'
              : ''
        }}
      </h1>

      <p class="payment-result__description">
        {{
          status === 'success'
            ? 'Payment for the listed goods was successful and bonus points will be credited within 24 hours.'
            : status === 'error'
              ? 'Here is a text that will describe the possible cause of the error and options for solving it.'
              : ''
        }}
      </p>

      <ButtonComponent
        v-if="status === 'success'"
        class="payment-result__button"
        rectangle
        transparent
      >
        Track Your Order
      </ButtonComponent>

      <ButtonComponent
        v-if="status === 'error'"
        class="payment-result__button"
        rectangle
        transparent
      >
        Back to cart
      </ButtonComponent>

      <div class="payment-result__footer" v-if="status === 'success' || status === 'error'">
        <h2 class="payment-result__footer-title">
          {{
            status === 'success'
              ? 'We will contact you soon, through a channel convenient for you'
              : status === 'error'
                ? 'All items added to the cart remained in place. Please try to pay for the goods in the same way or in another way.'
                : ''
          }}
        </h2>

        <p class="payment-result__footer-description">
          {{
            status === 'success'
              ? 'You can support us by spreading a post about our website on social networks:'
              : status === 'error'
                ? 'If you have any questions, write to us in the chat, and we will definitely help you!'
                : ''
          }}
        </p>

        <div class="payment-result__channels-buttons" v-if="status === 'success'">
          <ButtonComponent class="payment-result__channels-button" circle>
            <FacebookIcon class="payment-result__facebook-icon" />
          </ButtonComponent>

          <ButtonComponent class="payment-result__channels-button" circle>
            <InstagramIcon class="payment-result__instagram-icon" transparent />
          </ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import InstagramIcon from '@/atoms/icons/InstagramIcon.vue'
import CheckMarkIcon from '@/atoms/icons/CheckMarkIcon.vue'
import TriangleIcon from '@/atoms/icons/TriangleIcon.vue'
import { ref } from 'vue'

const status = ref('error')
</script>

<style>
@import './PaymentResultComponent.scss';
</style>
