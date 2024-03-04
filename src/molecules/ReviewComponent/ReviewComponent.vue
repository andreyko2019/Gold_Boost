<template>
  <div class="review-component">
<!--    refactoring BEM-->
    <div class="review-component__date-block">
      <CalendarIcon class="review-component__date-block-icon" />

      <p class="review-component__date-block-date">{{ date }}</p>
    </div>

    <div class="review-component__rate-block">
      <template v-for="index in 5" :key="index">
        <StarIcon class="review-component__rate-block-rate" :gradient="rate >= index" />
      </template>
    </div>

    <h3 class="review-component__title">{{ title }}</h3>

    <p class="review-component__description">{{ description }}</p>

    <div class="review-component__link-block">
      <p class="review-component__link-block-label">Source of review:</p>

      <LinkComponent class="review-component__link-block-link" :text="textLink" :to="link" />
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from '@/atoms/icons/CalendarIcon.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import StarIcon from '@/atoms/icons/StarIcon.vue'

defineProps({
  date: String,
  rate: Number,
  title: String,
  description: String,
  textLink: String,
  link: String
})
</script>

<style>
@import './ReviewComponent.scss';
</style>
