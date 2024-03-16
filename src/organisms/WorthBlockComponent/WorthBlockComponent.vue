<template>
  <section class="worth">
    <div class="worth__container container">
      <h2 class="worth__title section-title">Worth a look</h2>

      <div class="worth__list-block embla" ref="emblaRef">
        <div class="embla__container">
          <WorthCardComponent
            class="worth__list-block-card embla__slide"
            v-for="(item, index) in list"
            :key="index"
            :id="item.id"
            :img="item.img"
            :imgAlt="item.imgAlt"
            :title="item.title"
            :countOffers="item.countOffers"
            :link="item.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WorthCardComponent from '@/molecules/WorthCardComponent/WorthCardComponent.vue'
import ProductImg from '@/assets/images/MainPage/product-1.png'
import emblaCarouselVue from 'embla-carousel-vue'

const list = [
  {
    id: 0,
    img: ProductImg,
    imgAlt: 'Alt',
    title: 'Prepare for Shadowlands',
    countOffers: 34,
    link: '/'
  },
  {
    id: 1,
    img: ProductImg,
    imgAlt: 'Alt',
    title: 'Raids',
    countOffers: 56,
    link: '/'
  },
  {
    id: 2,
    img: ProductImg,
    imgAlt: 'Alt',
    title: 'Dungeons',
    countOffers: 30,
    link: '/'
  }
]

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import 'WorthBlockComponent.scss';
</style>
