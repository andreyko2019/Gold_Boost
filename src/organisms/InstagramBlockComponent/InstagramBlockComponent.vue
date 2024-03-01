<template>
  <section class="our-instagram-section">
    <img
      class="our-instagram-section__background-img"
      src="@/assets/images/MainPage/background-2.webp"
      alt="Background"
      loading="lazy"
    />

    <div class="our-instagram-section__container">
      <h2 class="our-instagram-section__title section-title">Our instagram</h2>

      <div class="our-instagram-section__link-block">
        <p class="our-instagram-section__link-block-label">Subscribe to our instagram:</p>

        <LinkComponent
          class="our-instagram-section__link-block-link link_gradient"
          text="@gold_bost"
          to="/"
        />
      </div>

      <ul class="our-instagram-section__img-list">
        <li
          class="our-instagram-section__img-item"
          v-for="(item, index) in listImages"
          :key="index"
        >
          <img v-if="item.img" :src="item.img" :alt="item.imgAlt" loading="lazy" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

const listImages = [
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' }
]
</script>

<style>
@import './InstagramBlockComponent.scss';
</style>
