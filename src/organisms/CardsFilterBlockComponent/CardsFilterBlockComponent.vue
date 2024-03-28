<template>
  <!--  refactoring-->
  <div class="cards-filter-block">
    <div class="cards-filter-block__header">
      <div class="cards-filter-block__title-block">
        <div class="cards-filter-block__icon-block" v-if="titleIcon">
          <img
            class="cards-filter-block__icon-block-icon"
            v-if="!isLoading"
            src="@/assets/images/warcraft-logo.webp"
            loading="lazy"
            alt="Warcraft logo"
          />

          <Skeletor v-else width="26" height="26" pill></Skeletor>
        </div>

        <h2 class="cards-filter-block__title section-title">
          <template v-if="!isLoading">
            {{ title }}
          </template>

          <Skeletor class="cards-filter-block__title-skeletor" v-else pill></Skeletor>
        </h2>
      </div>

      <div class="cards-filter-block__filters-block cards-filter-embla embla" ref="emblaRef">
        <div class="embla__container cards-filter-embla__container">
          <template v-if="!isLoading">
            <div
              class="cards-filter-block__filter embla__slide cards-filter-embla__slide"
              v-for="(item, index) in filters"
              :key="index"
            >
              <ButtonComponent
                class="link_underline"
                :text="item.name"
                @click="activeGameId = item.id"
              >
                <img
                  class="cards-filter-block__filter-icon"
                  v-if="item['logo_filter']"
                  :src="item['logo_filter']"
                  :alt="item['logo_filter_alt']"
                />
              </ButtonComponent>
            </div>
          </template>

          <Skeletor v-else width="340" height="26" pill></Skeletor>
        </div>
      </div>

      <ButtonComponent
        class="cards-filter-block__button"
        v-if="button && !isLoading"
        rectangle
        transparent
      >
        Catalog
      </ButtonComponent>

      <Skeletor class="cards-filter-block__button-skeletor" v-else-if="button" pill></Skeletor>
    </div>

    <div class="cards-filter-block__main cards-products-embla embla" ref="emblaProductsRef">
      <div class="cards-products-embla__container embla__container">
        <template v-if="!isLoading">
          <ProductCardComponent
            class="embla__slide cards-products-embla__slide"
            v-for="(item, index) in listItems"
            :key="index"
            :tag="item.tag"
            :img="item['card_img']"
            :imgAlt="item['card_img_alt']"
            :gameImg="item.image"
            :gameImgAlt="item['image_alt']"
            :title="item.title"
            :subTitle="item.subtitle"
            :price="item.price"
            :priceTo="item.priceTo"
            :isLoading="isLoading"
            :id="item.id"
          />
        </template>

        <template v-else>
          <ProductCardComponent
            class="embla__slide cards-products-embla__slide"
            v-for="index in 4"
            :key="index"
            :isLoading="isLoading"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCardComponent from '@/molecules/ProductCardComponent/ProductCardComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

const activeGameId = defineModel()

defineProps({
  title: String,
  titleIcon: Boolean,
  filters: [
    {
      id: String,
      logo_filter: String,
      logo_filter_alt: String
    }
  ],
  button: Boolean,
  isLoading: Boolean,
  listItems: [
    {
      tag: {
        name: String,
        color: String
      },
      img: String,
      title: String,
      subTitle: String,
      price: Number,
      priceTo: Number
    }
  ]
})

const [emblaRef] = emblaCarouselVue({
  align: 'start'
})

const [emblaProductsRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import './CardsFilterBlockComponent.scss';
</style>
