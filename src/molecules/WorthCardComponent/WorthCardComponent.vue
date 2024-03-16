<template>
  <div class="worth-card">
    <div class="worth-card__img-block">
      <img class="worth-card__img-block-img" :src="img" :alt="imgAlt" width="280" height="220" />
    </div>

    <div class="worth-card__info-block">
      <h3 class="worth-card__title">{{ title }}</h3>

      <p class="worth-card__countOffers">{{ countOffers }} Offers</p>

      <ButtonComponent class="product-card__button" rectangle transparent>Watch</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'

defineProps({
  id: String,
  img: URL,
  imgAlt: String,
  title: String,
  countOffers: Number,
  link: String
})
</script>

<style>
@import './WorthCardComponent.scss';
</style>
