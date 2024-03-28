<template>
  <section class="worth">
    <h2 class="worth__title section-title">Worth a look</h2>

    <div class="embla" ref="emblaRef">
      <div class="worth__list-block embla__container">
        <WorthCardComponent
          class="worth__list-block-card embla__slide"
          v-for="(item, index) in worthList"
          :key="index"
          :id="item['catalog_page']"
          :img="item.image"
          :imgAlt="item['image_alt']"
          :title="item.title"
          :countOffers="item.offers"
          :link="item.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import WorthCardComponent from '@/molecules/WorthCardComponent/WorthCardComponent.vue'
import ProductImg from '@/assets/images/MainPage/product-1.png'
import emblaCarouselVue from 'embla-carousel-vue'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const worthList = ref()
const isLoading = ref(true)

const getWorthList = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/catalog-page/${route.params.catalogId}/worth-look/`
    )
    worthList.value = response.data
    isLoading.value = false
    console.log(worthList)
  } catch (error) {
    console.error(error)
  }
}

getWorthList()
</script>

<style>
@import 'WorthBlockComponent.scss';
</style>
