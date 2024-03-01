<template>
  <div class="background-img-block">
<!--    refactoging-->
    <img
      class="background-img-block__img img_desktop"
      src="@/assets/images/MainPage/background-1.webp"
      alt="Background"
      fetchpriority="high"
      width="1600"
      height="773"
    />

    <img
      class="background-img-block__img img_mobile"
      src="@/assets/images/MainPage/background-1-mobile.webp"
      alt="Background"
      fetchpriority="high"
      width="320"
      height="565"
    />

    <SearchBlockComponent />

    <WarcraftBlockComponent />
  </div>

<!--  refactoring-->

  <component :is="lazyWarcraftClassicBlock" />

  <component :is="lazyChooseBlock" />

  <component :is="lazyHotOffersBlock" />

  <component :is="lazyReviewsBlock" />

  <component :is="lazyNewsComponent" />

  <component :is="lazyInstagramBlock" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import SearchBlockComponent from '@/organisms/SearchBlockComponent/SearchBlockComponent.vue'
import WarcraftBlockComponent from '@/organisms/WarcraftBlockComponent/WarcraftBlockComponent.vue'

const lazyInstagramBlock = defineAsyncComponent(
  () => import('@/organisms/InstagramBlockComponent/InstagramBlockComponent.vue')
)
const lazyNewsComponent = defineAsyncComponent(
  () => import('@/organisms/NewsComponent/NewsComponent.vue')
)
const lazyReviewsBlock = defineAsyncComponent(
  () => import('@/organisms/ReviewsBlockComponent/ReviewsBlockComponent.vue')
)
const lazyChooseBlock = defineAsyncComponent(
  () => import('@/organisms/ChooseBlockComponent/ChooseBlockComponent.vue')
)
const lazyHotOffersBlock = defineAsyncComponent(
  () => import('@/organisms/HotOffersBlockComponent/HotOffersBlockComponent.vue')
)
const lazyWarcraftClassicBlock = defineAsyncComponent(
  () => import('@/organisms/WarcraftClassicBlockComponent/WarcraftClassicBlockComponent.vue')
)
</script>

<style>
@import './MainPage.scss';
</style>
