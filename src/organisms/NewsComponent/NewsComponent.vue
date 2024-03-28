<template>
  <!--  refactoring-->
  <section class="latest-news-section">
    <div class="latest-news-section__container container">
      <h2 class="latest-news-section__title section-title">
        {{ $t('mainPage.latestNews') }}
      </h2>

      <div class="latest-news-section__news-list latest-news-embla embla" ref="emblaRef">
        <div class="latest-news-embla__container embla__container">
          <template v-if="!isLoading">
            <NewsCardComponent
              class="embla__slide"
              v-for="(item, index) in newsList.items"
              :key="index"
              :img="item.image"
              :imgAlt="item['image_alt']"
              :icon="item.game['logo_product']"
              :subTitle="item.game.name"
              :title="item.title"
              :description="item.description"
              :link="{ name: 'not found', params: { locale: $i18n.locale } }"
              :isLoading="isLoading"
            />
          </template>

          <template v-else>
            <NewsCardComponent
              class="embla__slide"
              v-for="(item, index) in 3"
              :key="index"
              :isLoading="isLoading"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsCardComponent from '@/molecules/NewsCardComponent/NewsCardComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import axios from 'axios'
import { ref } from 'vue'

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})

const newsList = ref([])
const isLoading = ref(true)

const fetchNewsList = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/main/news/`, {
      params: {
        page: 1,
        page_size: 3
      }
    })
    newsList.value = response.data
    console.log(response.data)
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

fetchNewsList()
</script>

<style>
@import './NewsComponent.scss';
</style>
