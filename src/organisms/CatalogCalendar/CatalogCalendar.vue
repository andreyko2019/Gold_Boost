<template>
  <section v-if="eventsList && eventsList.length > 0" class="catalog-calendar">
    <h2 class="catalog-calendar__title section-title">
      {{ $t('catalogPage.calendar') }}
    </h2>

    <div class="catalog-calendar__event" v-for="(item, index) in eventsList" :key="index">
      <div class="catalog-calendar__event-header">
        <h3 class="catalog-calendar__event-title">
          {{ item.title }}
        </h3>

        <p class="catalog-calendar__event-description">
          {{ item.subtitle }}
        </p>
      </div>

      <Suspense>
        <template #default>
          <CalendarDateList :id="item.id" />
        </template>

        <template #fallback> Загрузка </template>
      </Suspense>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import CalendarDateList from '@/molecules/CalendarDateList/CalendarDateList.vue'

const route = useRoute()
const eventsList = ref()
const isLoading = ref(true)

const getCalendar = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/catalog-page/${route.params.catalogId}/calendar/`
    )
    eventsList.value = response.data
    isLoading.value = false
  } catch (error) {
    console.error(error)
  }
}

getCalendar()
</script>

<style>
@import './CatalogCalendar.scss';
</style>
