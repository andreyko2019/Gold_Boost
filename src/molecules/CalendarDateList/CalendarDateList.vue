<template>
  <div class="catalog-calendar__event-list">
    <div class="catalog-calendar__event-item" v-for="(item, index) in dateList" :key="index">
      <div class="catalog-calendar__event-item-header">
        <i18n-d
          class="catalog-calendar__event-item-date"
          :value="new Date(item.date)"
          :locale="$i18n.locale === 'en' ? 'en-US' : 'uk-UA'"
          format="short"
        ></i18n-d>

        <span class="catalog-calendar__event-item-line">|</span>

        <p class="catalog-calendar__event-item-day">
          {{ $t(`dayOfWeek.${new Date(item.date).getDay()}`) }}
        </p>
      </div>

      <div class="catalog-calendar__event-item-cards-list">
        <div class="catalog-calendar__event-item-card" v-for="i in 2">
          <div class="catalog-calendar__event-item-image-block">
            <img
              class="catalog-calendar__event-item-image"
              :src="item[`team${i}_img`]"
              :alt="item[`team${i}_img_alt`]"
            />
          </div>

          <div class="catalog-calendar__event-item-times">
            <div class="catalog-calendar__event-item-start-time">
              <ClockIcon />
              {{ item[`team${i}_from`].substring(0, 5) }}
            </div>

            <div class="catalog-calendar__event-item-end-time">
              <ClockIcon />
              {{ item[`team${i}_until`].substring(0, 5) }}
            </div>
          </div>
        </div>
      </div>

      <div class="catalog-calendar__event-item-main"></div>
    </div>
  </div>
</template>

<script setup>
import ClockIcon from '@/atoms/icons/ClockIcon.vue'
import axios from 'axios'
import { ref } from 'vue'

const props = defineProps(['id'])

const dateList = ref()
const getEventDates = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/catalog-page/${id}/calendar-items/`
    )
    dateList.value = response.data
    console.log(dateList.value)
  } catch (error) {
    console.error(error)
  }
}

await getEventDates(props.id)
</script>
