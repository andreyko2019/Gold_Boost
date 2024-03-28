<template>
  <Tabs v-if="!isLoading" class="server-tabs" :tabsTitleList="tabsTitleList" v-model="activeTab">
    <div v-if="!isLoading" v-html="tabContent"></div>

    <div v-else>Завантаження...</div>
  </Tabs>
</template>

<script setup>
import Tabs from '@/molecules/TabsComponent/TabsComponent.vue'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps(['tabsTitleList', 'page'])
const activeTab = ref({ id: props.tabsTitleList[0].id })
const tabContent = ref()
const isLoading = ref(true)

const getTabContent = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/${props.page}/tab-content/${id}/`
    )
    tabContent.value = response.data.content
    console.log(tabContent.value)
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTabContent(activeTab.value.id)
})

watch([activeTab], () => {
  getTabContent(activeTab.value.id)
})
</script>
