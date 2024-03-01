<template>
<!--  refactoring-->
  <section class="latest-news-section">
    <div class="latest-news-section__container">
      <h2 class="latest-news-section__title section-title">latest news</h2>

      <div class="latest-news-section__news-list">
        <NewsCardComponent
          v-for="(item, index) in listNews"
          :key="index"
          :img="item.img"
          :imgAlt="item.imgAlt"
          :subTitle="item.subTitle"
          :title="item.title"
          :description="item.description"
          :link="item.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsCardComponent from '@/molecules/NewsCardComponent/NewsCardComponent.vue'

const listNews = [
  {
    img: new URL(`@/assets/images/MainPage/news-1.webp`, import.meta.url),
    imgAlt: 'News 1',
    subTitle: 'World of Warcraft',
    title: 'Scholomance: New Hearthstone DLC Announcement',
    description:
      'So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!',
    link: '/'
  },
  {
    img: new URL(`@/assets/images/MainPage/news-2.webp`, import.meta.url),
    imgAlt: 'News 2',
    subTitle: 'hearthstone',
    title: 'Hearthstone Patch 17.6 Notes',
    description:
      'So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!',
    link: '/'
  },
  {
    img: new URL(`@/assets/images/MainPage/news-3.webp`, import.meta.url),
    imgAlt: 'News 3',
    subTitle: 'World of Warcraft',
    title: 'Hearthstone Patch 17.6 Notes',
    description:
      'So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!',
    link: '/'
  }
]
</script>

<style>
@import './NewsComponent.scss';
</style>
