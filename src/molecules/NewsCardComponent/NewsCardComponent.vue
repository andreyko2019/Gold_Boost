<template>
  <div class="news-card">
    <div v-if="!isLoading" class="news-card__img-block">
      <img
        :src="img"
        width="380"
        height="170"
        :alt="imgAlt"
        @error="$event.target.src = defaultImage"
        loading="lazy"
      />
    </div>

    <Skeletor v-else width="380" height="170"></Skeletor>

    <div class="news-card__info-block">
      <div class="news-card__sub-title-block">
        <div class="news-card__icon-block">
          <img v-if="!isLoading" class="news-card__icon-block-icon" :src="icon" :alt="subTitle" />

          <Skeletor v-else width="20" height="20" pill></Skeletor>
        </div>

        <p v-if="!isLoading" class="news-card__sub-title-block-text">
          {{ subTitle }}
        </p>

        <Skeletor v-else width="60%" height="14" pill></Skeletor>
      </div>

      <h3 class="news-card__title">
        <template v-if="!isLoading">
          {{ title }}
        </template>

        <Skeletor v-else width="100%" height="26" pill></Skeletor>
      </h3>

      <p class="news-card__description">
        <template v-if="!isLoading">
          {{ description }}
        </template>

        <Skeletor v-else width="100%" height="87"></Skeletor>
      </p>

      <LinkComponent
        v-if="!isLoading"
        class="news-card__link link_underline-gradient"
        :text="$t('mainPage.readMore')"
        :to="link"
      />

      <Skeletor v-else width="89" height="14" pill></Skeletor>
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'
import defaultImage from '@/assets/images/default.svg'

defineProps({
  img: String,
  imgAlt: String,
  icon: String,
  subTitle: String,
  title: String,
  description: String,
  link: Object,
  isLoading: Boolean
})
</script>

<style>
@import './NewsCardComponent.scss';
</style>
