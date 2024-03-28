<template>
  <section class="hot-offers">
    <div class="hot-offers__container container">
      <CardsFilterBlockComponent
        v-model="activeGameId"
        :title="$t('mainPage.hotOffers')"
        :listItems="productList"
        :isLoading="isProductLoading"
        :filters="gamesList"
      />

      <PaginationComponent
        class="hot-offers__pagination"
        :countPages="pageCount"
        v-model="currentPage"
      />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'

defineProps(['gamesList'])
const productList = ref([])
const isProductLoading = ref(true)
const pageSize = 4
const pageCount = ref(1)
const currentPage = ref(1)
const activeGameId = ref()
const fetchNewsList = async (pageSize, currentPage, activeGameId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/hot-offers/`, {
      params: {
        page: currentPage.value,
        page_size: pageSize,
        game_id: activeGameId
      }
    })
    productList.value = response.data.items
    pageCount.value = response.data.count
    isProductLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchNewsList(pageSize, currentPage, activeGameId.value)
})

watch([currentPage, activeGameId], () => {
  fetchNewsList(pageSize, currentPage, activeGameId.value)
})
</script>

<style>
@import './HotOffersBlockComponent.scss';
</style>
