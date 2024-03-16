<template>
  <div class="product-card">
    <div class="product-card__img-block">
      <img class="product-card__img-block-img" :src="img" :alt="imgAlt" width="280" height="220" />
      <!--      refactoring-->
      <img
        class="product-card__img-block-logo"
        src="@/assets/images/warcraft-logo.webp"
        alt="Warcraft Logo"
        width="26"
        height="26"
      />

      <span v-if="tag" class="product-card__tag" :style="{ background: tag.color }">
        {{ tag.name }}
      </span>
    </div>

    <div class="product-card__info-block">
      <h3 class="product-card__title">{{ title }}</h3>

      <p class="product-card__subTitle">{{ subTitle }}</p>

      <div class="product-card__price-block">
        <p class="product-card__price-block-label">{{ priceTo ? 'From:' : 'Price:' }}</p>

        <p class="product-card__price-block-price">
          {{ priceTo ? `\$${price}-\$${priceTo}` : `\$${price}` }}
        </p>
      </div>

      <ButtonComponent class="product-card__button" rectangle>Buy Now</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'

defineProps({
  id: Number,
  tag: {
    name: String,
    color: String
  },
  img: URL,
  imgAlt: String,
  title: String,
  subTitle: String,
  description: String,
  price: Number,
  priceTo: Number
})
</script>

<style>
@import './ProductCardComponent.scss';
</style>
