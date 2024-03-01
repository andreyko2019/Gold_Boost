<template>
  <section class="warcraft-classic-section">
    <div class="warcraft-classic-section__container">
      <CardsFilterBlockComponent
        :titleIcon="WarcraftClassic.titleIcon"
        :button="WarcraftClassic.button"
        :title="WarcraftClassic.title"
        :listItems="WarcraftClassic.listItems"
        :filters="WarcraftClassic.filters"
      />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'

const WarcraftClassic = {
  title: 'World of Warcraft Classic',
  titleIcon: true,
  filters: [
    { name: 'Raids', filter: 'Raids' },
    { name: 'Dungeons', filter: 'Dungeons' },
    { name: 'Powerleveling', filter: 'Powerleveling' },
    { name: 'Coaching', filter: 'Coaching' }
  ],
  button: true,
  listItems: [
    {
      img: new URL(`@/assets/images/MainPage/product-1.webp`, import.meta.url),
      imgAlt: 'Product 1',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      img: new URL(`@/assets/images/MainPage/product-2.webp`, import.meta.url),
      imgAlt: 'Product 2',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
      img: new URL(`@/assets/images/MainPage/product-3.webp`, import.meta.url),
      imgAlt: 'Product 3',
      title: 'World of Warcraft: Shadowlands',
      subTitle: 'Heroic Raid Run',
      price: 120
    },
    {
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
@import './WarcraftClassicBlockComponent.scss';
</style>
