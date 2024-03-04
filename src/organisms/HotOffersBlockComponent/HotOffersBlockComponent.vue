<template>
  <section class="hot-offers-section">
    <div class="hot-offers-section__container">
      <CardsFilterBlockComponent :title="HotOffers.title" :listItems="HotOffers.listItems" />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'

const HotOffers = {
  title: 'hot offers',
  titleIcon: false,
  filters: [],
  listItems: [
    {
      tag: {
        name: 'hot',
        color: '#FEE229'
      },
      img: new URL(`@/assets/images/MainPage/product-1.webp`, import.meta.url),
      imgAlt: 'Product 1',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      tag: {
        name: 'hot',
        color: '#FEE229'
      },
      img: new URL(`@/assets/images/MainPage/product-2.webp`, import.meta.url),
      imgAlt: 'Product 2',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      tag: {
        name: 'hot',
        color: '#FEE229'
      },
      img: new URL(`@/assets/images/MainPage/product-3.webp`, import.meta.url),
      imgAlt: 'Product 3',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      tag: {
        name: 'hot',
        color: '#FEE229'
      },
      img: new URL(`@/assets/images/MainPage/product-4.webp`, import.meta.url),
      imgAlt: 'Product 4',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    }
  ]
}
</script>

<style>
@import './HotOffersBlockComponent.scss';
</style>
