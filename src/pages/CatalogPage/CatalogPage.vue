<template>
  <router-view></router-view>

  <div class="catalog-page">
    <div class="container catalog-page__container">
      <div class="catalog-page__inner">
        <div class="catalog-page__asside"></div>

        <div class="catalog-page__main">
          <BreadcrumbsComponent :linkItems="linkItems" />

          <div class="catalog-page__title-block">
            <div class="catalog-page__title-block-icon">
              <img src="" alt="Logo" />
            </div>

            <h1 class="catalog-page__title">World of Warcraft</h1>
          </div>

          <p class="catalog-page__description">
            What is the most iconic Legion class mount in Worlds of warcraft? Of course, it is
            Highlord's Golden Charger. This unique Paladin class mount was introduced in Legion at
            the same time with the other 11 class mounts making the total count of 12. It is the
            original paladin steed that has the golden color scheme and suits perfectly for the most
            common paladin sets. Buying the Highlord's Charger boost will help you to acquire this
            epic mount to ride in BFA and Shadowlands.
          </p>

          <div class="catalog-page__products-list">
            <ProductCardComponent
              v-for="(item, index) in listItems"
              :key="index"
              :id="index"
              :tag="item.tag"
              :img="item.img"
              :imgAlt="item.imgAlt"
              :title="item.title"
              :subTitle="item.subTitle"
              :price="item.price"
              :priceTo="item.priceTo"
            />
          </div>

          <WorthBlockComponent class="catalog-page__worth-block" />

          <TabsComponent> </TabsComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WorthBlockComponent from '@/organisms/WorthBlockComponent/WorthBlockComponent.vue'
import BreadcrumbsComponent from '@/molecules/BreadcrumbsComponent/BreadcrumbsComponent.vue'
import ProductCardComponent from '@/molecules/ProductCardComponent/ProductCardComponent.vue'
import TabsComponent from '@/molecules/TabsComponent/TabsComponent.vue'

const linkItems = [
  {
    text: 'World of warcraft',
    pageName: 'home'
  }
]

const listItems = [
  {
    img: new URL(`@/assets/images/MainPage/product-1.webp`, import.meta.url),
    imgAlt: 'Product 1',
    title: 'World of Warcraft: Shadowlands',
    subTitle: 'Heroic Raid Run',
    price: 120
  },
  {
    img: new URL(`@/assets/images/MainPage/product-2.webp`, import.meta.url),
    imgAlt: 'Product 2',
    title: 'World of Warcraft: Shadowlands',
    subTitle: 'Heroic Raid Run',
    price: 120
  },
  {
    img: new URL(`@/assets/images/MainPage/product-3.webp`, import.meta.url),
    imgAlt: 'Product 3',
    title: 'World of Warcraft: Shadowlands',
    subTitle: 'Heroic Raid Run',
    price: 120
  },
  {
    img: new URL(`@/assets/images/MainPage/product-4.webp`, import.meta.url),
    imgAlt: 'Product 4',
    title: 'World of Warcraft: Shadowlands',
    subTitle: 'Heroic Raid Run',
    price: 120
  }
]
</script>

<style>
@import './CatalogPage.scss';
</style>
