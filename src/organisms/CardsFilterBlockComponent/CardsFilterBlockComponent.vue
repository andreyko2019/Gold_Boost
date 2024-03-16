<template>
  <!--  refactoring-->
  <div class="cards-filter-block">
    <div class="cards-filter-block__header">
      <div class="cards-filter-block__title-block">
        <div class="cards-filter-block__icon-block" v-if="titleIcon">
          <img
            class="cards-filter-block__icon-block-icon"
            src="@/assets/images/warcraft-logo.webp"
            loading="lazy"
            alt="Warcraft logo"
          />
        </div>

        <h2 class="cards-filter-block__title section-title">{{ title }}</h2>
      </div>

      <div class="cards-filter-block__filters-block embla" ref="emblaRef">
        <div class="embla__container">
          <div
            class="cards-filter-block__filters-block-filter embla__slide"
            v-for="(item, index) in filters"
            :key="index"
          >
            <LinkComponent class="link_underline" :text="item.name" to="/"
              ><img v-if="item.img" :src="item.img" :alt="item.imgAlt"
            /></LinkComponent>
          </div>
        </div>
      </div>

      <ButtonComponent class="cards-filter-block__button" v-if="button" rectangle transparent>
        Catalog
      </ButtonComponent>
    </div>

    <div class="cards-filter-block__main embla" ref="emblaRef">
      <div class="embla__container">
        <ProductCardComponent
          class="embla__slide"
          v-for="(item, index) in listItems"
          :key="index"
          :tag="item.tag"
          :img="item.img"
          :imgAlt="item.imgAlt"
          :title="item.title"
          :subTitle="item.subTitle"
          :price="item.price"
          :priceTo="item.priceTo"
        />
      </div>
    </div>

    <div class="cards-filter-block__footer">
      <PaginationComponent />
    </div>
  </div>
</template>

<script setup>
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ProductCardComponent from '@/molecules/ProductCardComponent/ProductCardComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'

defineProps({
  title: String,
  titleIcon: Boolean,
  filters: [
    {
      img: URL,
      imgAlt: String,
      name: String,
      filter: String
    }
  ],
  button: Boolean,
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
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1210px)': { active: false }
  }
})
</script>

<style>
@import './CardsFilterBlockComponent.scss';

.embla {
  position: relative;

  overflow: visible !important;
  max-width: 1210px;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 auto;
  min-width: 0;
  max-width: 285px;

  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
