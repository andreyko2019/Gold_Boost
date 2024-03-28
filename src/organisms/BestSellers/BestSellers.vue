<template>
  <section class="best-sellers">
    <div class="container">
      <CardsFilterBlockComponent
        :title="$t('productPage.bestSellers')"
        :listItems="bestSellersList"
        :isLoading="isLoading"
      />
    </div>
  </section>
</template>

<script setup>
import CardsFilterBlockComponent from '@/organisms/CardsFilterBlockComponent/CardsFilterBlockComponent.vue'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'

const bestSellersList = ref()
const isLoading = ref(true)
const pageSize = 4
const pageCount = ref(1)
const currentPage = ref(1)

const getBestSellers = async (pageSize, currentPage) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/bestsellers/`, {
      params: {
        page: currentPage.value,
        page_size: pageSize
      }
    })
    bestSellersList.value = response.data.items
    console.log(response.data)
    pageCount.value = response.data.count
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getBestSellers(pageSize, currentPage)
})

watch(currentPage, () => {
  getBestSellers(pageSize, currentPage)
})
</script>

<style>
@import './BestSellers.scss';
</style>
