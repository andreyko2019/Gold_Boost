<template>
  <div class="review-component">
    <!--refactoring BEM-->
    <div class="review-component__date-block">
      <CalendarIcon v-if="!isLoading" class="review-component__date-block-icon" />

      <Skeletor v-else width="16" height="16" pill></Skeletor>

      <p class="review-component__date-block-date">
        <template v-if="!isLoading">
          <i18n-d
            :value="new Date(date)"
            :locale="$i18n.locale === 'en' ? 'en-US' : 'uk-UA'"
            format="short"
          ></i18n-d>
        </template>

        <Skeletor v-else width="115" height="19" pill></Skeletor>
      </p>
    </div>

    <div class="review-component__rate-block">
      <template v-for="index in 5" :key="index">
        <StarIcon
          v-if="!isLoading"
          class="review-component__rate-block-rate"
          :gradient="rate >= index"
        />

        <Skeletor v-else width="18" height="18" pill> </Skeletor>
      </template>
    </div>

    <h3 class="review-component__title">
      <template v-if="!isLoading">
        {{ title }}
      </template>

      <Skeletor v-else width="115" height="22" pill></Skeletor>
    </h3>

    <pre class="review-component__description" v-if="!isLoading">{{
      description.length > 165 ? description.slice(0, 165) + '...' : description
    }}</pre>

    <Skeletor class="review-component__description" v-else width="100%" height="76"></Skeletor>

    <div class="review-component__link-block">
      <p class="review-component__link-block-label">
        <template v-if="!isLoading"> {{ $t('mainPage.sourceReview') }}: </template>

        <Skeletor v-else width="115" height="19" pill></Skeletor>
      </p>

      <LinkComponent
        class="review-component__link-block-link"
        v-if="!isLoading"
        :text="textLink"
        :to="link"
        href
      />

      <Skeletor v-else width="62" height="19" pill></Skeletor>
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from '@/atoms/icons/CalendarIcon.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import StarIcon from '@/atoms/icons/StarIcon.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

defineProps({
  date: String,
  rate: Number,
  title: String,
  description: String,
  textLink: String,
  link: String,
  isLoading: Boolean
})
</script>

<style>
@import './ReviewComponent.scss';
</style>
