<template>
  <div class="news-card">
    <div class="news-card__img-block">
      <img :src="img" :alt="imgAlt" loading="lazy" />
    </div>

    <div class="news-card__info-block">
      <div class="news-card__sub-title-block">
        <div class="news-card__icon-block">
          <img
            class="news-card__icon-block-icon"
            src="@/assets/images/warcraft.png"
            alt="Warcraft"
          />
        </div>

        <p class="news-card__sub-title-block-text">{{ subTitle }}</p>
      </div>

      <h3 class="news-card__title">{{ title }}</h3>

      <p class="news-card__description">
        {{ description }}
      </p>

      <LinkComponent class="news-card__link link_underline-gradient" text="Read more" :to="link" />
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

defineProps({
  img: URL,
  imgAlt: String,
  subTitle: String,
  title: String,
  description: String,
  link: String
})
</script>

<style>
@import './NewsCardComponent.scss';
</style>
