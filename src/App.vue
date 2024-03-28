<template>
  <div class="wrapper">
    <HeaderComponent :siteLinks="siteLinks" />

    <router-view :siteLinks="siteLinks" :isAppLoading="isLoading"> </router-view>

    <FooterComponent v-if="!isLoading" :siteLinks="siteLinks" :isLoading="isLoading" />
  </div>
</template>

<script setup>
import HeaderComponent from '@/organisms/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/organisms/FooterComponent/FooterComponent.vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { ref } from 'vue'

const toast = useToast()
const isLoading = ref(true)
let siteLinks = {}

const getSiteLinks = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/main/settings/`, {
      headers: {
        'Accept-Language': 'uk-UA'
      }
    })
    siteLinks = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
    toast.error(error.response.data.detail)
  }
}

getSiteLinks()
</script>

<style></style>
