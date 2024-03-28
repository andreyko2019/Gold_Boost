<template>
  <section class="frequently-bought">
    <div class="container">
      <h2 class="frequently-bought__title section-title">
        {{ $t('product.frequentlyBought') }}
      </h2>

      <div class="frequently-bought__list">
        <div class="frequently-bought__item" v-for="(item, index) in frequentlyList" :key="index">
          <div class="frequently-bought__item-images-list">
            <div
              class="frequently-bought__item-image-block"
              v-for="(image, index) in item.productsList"
              :key="index"
            >
              <img class="frequently-bought__item-image" :src="image.img" :alt="image.imgAlt" />
            </div>
          </div>

          <ul class="frequently-bought__item-products-list">
            <li
              class="frequently-bought__item-product"
              v-for="(product, index) in item.productsList"
              :key="index"
            >
              <i class="frequently-bought__item-product-icon">
                <SuccessIcon />
              </i>

              <p class="frequently-bought__item-product-name">
                {{ product.name }}
              </p>

              <p class="frequently-bought__item-product-type">
                {{ product.type }}
              </p>

              <p class="frequently-bought__item-product-price">${{ product.price }}</p>
            </li>
          </ul>

          <div class="frequently-bought__item-footer">
            <p class="frequently-bought__item-label">{{ $t('product.totalPrice') }}:</p>

            <p class="frequently-bought__item-total-price">
              <template v-if="item.discount">
                <span class="frequently-bought__item-total-price-value">
                  ${{ getDiscountPrice(item.productsList, item.discount) }}
                </span>

                <span class="frequently-bought__item-last-price-value">
                  ${{ getTotalPrice(item.productsList) }}
                </span>

                <span class="frequently-bought__item-discount discount">
                  {{ item.discount }}
                </span>
              </template>

              <template v-else>
                <span class="frequently-bought__item-total-price-value">
                  {{ getTotalPrice(item.productsList) }}
                </span>
              </template>
            </p>

            <ButtonComponent class="frequently-bought__item-button" rectangle>
              {{ $t('product.buyNow') }}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import CheckMarkIcon from '@/atoms/icons/CheckMarkIcon.vue'
import SuccessIcon from '@/atoms/icons/SuccessIcon.vue'

const frequentlyList = [
  {
    productsList: [
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft Batlle for Azeroth',
        type: 'Heroic Raid Run',
        price: 120
      },
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft: Shadowlands',
        type: 'Heroic Raid Run',
        price: 120
      },
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft Batlle for Azeroth',
        type: 'Heroic Raid Run',
        price: 120
      }
    ],
    discount: 10
  },
  {
    productsList: [
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft Batlle for Azeroth',
        type: 'Heroic Raid Run',
        price: 120
      },
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft: Shadowlands',
        type: 'Heroic Raid Run',
        price: 120
      },
      {
        img: new URL('@/assets/images/MainPage/product-1.webp', import.meta.url),
        imgAlt: '',
        name: 'World of Warcraft Batlle for Azeroth',
        type: 'Heroic Raid Run',
        price: 120
      }
    ],
    discount: 10
  }
]

const getTotalPrice = (productsList) => {
  const totalPrice = productsList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)

  return totalPrice
}

const getDiscountPrice = (productsList, discount) => {
  const totalPrice = getTotalPrice(productsList)
  const discountPrice = totalPrice - (totalPrice * discount) / 100
  return discountPrice
}
</script>

<style>
@import './FrequentlyBought.scss';
</style>
