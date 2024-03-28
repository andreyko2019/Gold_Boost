<template>
  <div class="product-card">
    <div class="product-card__img-block">
      <img
        class="product-card__img-block-img"
        v-if="!isLoading"
        :src="img"
        :alt="imgAlt"
        width="280"
        height="220"
        @error="$event.target.src = defaultImage"
      />

      <Skeletor v-else width="100%" height="220"></Skeletor>

      <!--TODO:Refactoring-->
      <img
        class="product-card__img-block-logo"
        v-if="!isLoading"
        :src="gameImg"
        :alt="gameImgAlt"
        width="26"
        height="26"
      />

      <Skeletor class="product-card__img-block-logo" v-else width="26" height="26" pill></Skeletor>

      <span v-if="tag && !isLoading" class="product-card__tag" :style="{ background: tag.color }">
        {{ tag.name }}
      </span>
    </div>

    <div class="product-card__info-block">
      <h3 class="product-card__title">
        <template v-if="!isLoading">
          {{ title }}
        </template>

        <Skeletor v-else width="100%" height="52" pill></Skeletor>
      </h3>

      <p class="product-card__subTitle">
        <template v-if="!isLoading">
          {{ subTitle }}
        </template>

        <Skeletor v-else width="121" height="16" pill></Skeletor>
      </p>

      <div class="product-card__price-block">
        <p class="product-card__price-block-label">
          <template v-if="!isLoading">
            {{ priceTo ? 'From:' : 'Price:' }}
          </template>

          <Skeletor v-else width="40" height="19" pill></Skeletor>
        </p>

        <p class="product-card__price-block-price">
          <template v-if="!isLoading">
            {{ priceTo ? `\$${price}-\$${priceTo}` : `\$${price}` }}
          </template>

          <Skeletor v-else width="50" height="20" pill></Skeletor>
        </p>
      </div>

      <ButtonComponent
        class="product-card__button"
        v-if="!isLoading"
        @click="$router.push({ name: 'product', params: { productId: id, locale: $i18n.locale } })"
        rectangle
      >
        Buy Now
      </ButtonComponent>

      <Skeletor class="product-card__button" v-else width="100%" height="50" pill></Skeletor>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import defaultImage from '@/assets/images/default.svg'

defineProps({
  isLoading: Boolean,
  id: Number,
  tag: {
    name: String,
    color: String
  },
  img: String,
  imgAlt: String,
  gameImg: String,
  gameImgAlt: String,
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
