<template>
  <section class="our-instagram-section">
    <img
      class="our-instagram-section__background-img"
      src="@/assets/images/MainPage/background-2.webp"
      alt="Background"
      loading="lazy"
    />

    <div class="our-instagram-section__container container">
      <h2 class="our-instagram-section__title section-title">Our instagram</h2>

      <div class="our-instagram-section__link-block">
        <p class="our-instagram-section__link-block-label">Subscribe to our instagram:</p>

        <LinkComponent
          class="our-instagram-section__link-block-link link_gradient"
          text="ііі"
          to="/"
        />
      </div>

      <ul class="our-instagram-section__img-list">
        <li
          class="our-instagram-section__img-item"
          v-for="(item, index) in listImages"
          :key="index"
        >
          <img v-if="item.img" :src="apiUrl + item.img" :alt="item.imgAlt" loading="lazy" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import axios from 'axios'
import { ref } from 'vue'

defineProps({
  instagram_nickname: String,
  instagram_link: String
})

const apiUrl = import.meta.env.VITE_API_URL
let listImages = ref([
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' },
  { imgAlt: 'Photo' }
])

const getInstagramImages = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/main/instagram/`)
    listImages.value = response.data
    console.log(listImages)
  } catch (error) {
    console.error(error)
  }
}

getInstagramImages()
</script>

<style>
@import './InstagramBlockComponent.scss';
</style>
