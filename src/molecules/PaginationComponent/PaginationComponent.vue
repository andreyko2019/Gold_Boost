<template>
  <div class="pagination" v-show="countPages > 1">
    <ButtonComponent
      class="pagination__button pagination__button_prev"
      circle
      transparent
      @click="changeCurrentPage(currentPage - 1)"
    >
      <ArrowIcon />
    </ButtonComponent>

    <div class="pagination__circle-list">
      <ButtonComponent
        v-for="index in countPages"
        class="pagination__button-circle"
        :class="{ 'pagination__button-circle_active': index === currentPage }"
        circle
        :key="index"
      />
    </div>

    <ButtonComponent
      class="pagination__button pagination__button_next"
      circle
      transparent
      @click="changeCurrentPage(currentPage + 1)"
    >
      <ArrowIcon />
    </ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import ArrowIcon from '@/atoms/icons/ArrowIcon.vue'

const props = defineProps({
  countPages: { default: 4, type: Number }
})

const currentPage = defineModel()

const changeCurrentPage = (pageNumber) => {
  if (pageNumber <= props.countPages && pageNumber >= 1) {
    currentPage.value = pageNumber
  } else if (pageNumber > props.countPages) {
    currentPage.value = 1
  } else if (pageNumber < 1) {
    currentPage.value = props.countPages
  }
}
</script>

<style>
@import './PaginationComponent.scss';
</style>
