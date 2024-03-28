<template>
  <section class="choose-section">
    <div class="choose-section__container container">
      <h2 class="choose-section__title section-title">
        {{ $t('mainPage.whyChooseUs') }}
      </h2>

      <div class="choose-section__cards-list choose-section-embla embla" ref="emblaRef">
        <div class="choose-section-embla__container embla__container">
          <ChooseCardComponent
            class="choose-section-embla__slide embla__slide"
            v-for="(item, index) in chooseList"
            :key="index"
            :icon="item.icon"
            :iconAlt="item['icon_alt']"
            :title="item.title"
            :description="item.description"
            :isLoading="isLoading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChooseCardComponent from '@/molecules/ChooseCardComponent/ChooseCardComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import axios from 'axios'
import { ref } from 'vue'

const chooseList = ref([{}, {}, {}])
const isLoading = ref(true)

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1200px)': { active: false }
  }
})

const fetchData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/main/why-choose-us/`)
    chooseList.value = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

fetchData()
</script>

<style>
@import './ChooseBlockComponent.scss';
</style>
