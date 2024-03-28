<template>
  <div class="product-page">
    <div class="container">
      <BreadCrumbs class="product-page__bread-crumbs" :list="breadCrumbsList" />

      <h1 class="product-page__title">
        <template v-if="!isLoading">
          {{ product.title }}
        </template>

        <template v-else> is loading </template>
      </h1>

      <div class="product-page__main">
        <div class="product-page__image-block">
          <img
            class="product-page__image"
            v-if="!isLoading"
            :src="product.image"
            :alt="product['image_alt']"
          />

          <Skeletor v-else></Skeletor>
        </div>

        <div class="product-page__aside">
          <div class="product-page__aside-filter"></div>

          <div class="product-page__aside-total"></div>
        </div>

        <div class="product-page__product-info">
          <p class="product-page__description">
            <template v-if="!isLoading">
              {{ product.description }}
            </template>

            <template v-else> is loading </template>
          </p>

          <ServerTabs
            v-if="!isLoading && product.tabs.length > 0"
            :tabsTitleList="product.tabs"
            page="products"
          >
          </ServerTabs>
        </div>
      </div>
    </div>

    <FrequentlyBought />

    <how-to-buy />

    <BestSellers />

    <reviews-block-component />
  </div>
</template>

<script setup>
import BreadCrumbs from '@/molecules/BreadcrumbsComponent/BreadcrumbsComponent.vue'
import Trans from '@/plugins/i18n/translation.js'
import ServerTabs from '@/organisms/ProductTabs/ServerTabs.vue'
import ReviewsBlockComponent from '@/organisms/ReviewsBlockComponent/ReviewsBlockComponent.vue'
import BestSellers from '@/organisms/BestSellers/BestSellers.vue'
import HowToBuy from '@/organisms/HowToBuy/HowToBuy.vue'
import FrequentlyBought from '@/organisms/FrequentlyBought/FrequentlyBought.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const product = ref()
const isLoading = ref(true)

const breadCrumbsList = [
  {
    text: 'World of warcraft',
    link: '/'
  },
  {
    text: 'Raids',
    link: '/'
  },
  {
    text: "Ny'alotha Raid Heroic Run",
    link: { name: 'product', params: { productId: 1, locale: Trans.currentLocale } }
  }
]

const getProduct = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/products/${route.params.productId}/`
    )
    product.value = response.data
    isLoading.value = false
    console.log(product.value)
  } catch (error) {
    console.error(error)
  }
}

getProduct()
</script>

<style>
@import './ProductPage.scss';
</style>
