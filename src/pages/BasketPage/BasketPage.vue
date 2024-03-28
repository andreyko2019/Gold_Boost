<template>
  <div class="basket-page">
    <div class="basket-page__background-block">
      <img
        class="basket-page__background-img"
        src="@/assets/images/BasketPage/background-img.webp"
        alt="Background"
      />
    </div>

    <div class="container">
      <BreadcrumbsComponent :linkItems="breadcrumbsItems" />

      <h1 class="basket-page__title page-title">Order Info</h1>

      <ProductOrderBlockComponent />

      <ProfileDataComponent />

      <CoordinationalChannelComponent />

      <CharacterBasketComponent />

      <PaymentMethodComponent />

      <ButtonComponent class="basket-page__button" rectangle> buy now </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbsComponent from '@/molecules/BreadcrumbsComponent/BreadcrumbsComponent.vue'
import ProductOrderBlockComponent from '@/organisms/ProductOrderBlockComponent/ProductOrderBlockComponent.vue'
import ProfileDataComponent from '@/organisms/ProfileDataComponent/ProfileDataComponent.vue'
import CoordinationalChannelComponent from '@/molecules/CoordinationalChannelComponent/CoordinationalChannelComponent.vue'
import PaymentMethodComponent from '@/organisms/PaymentMethodComponent/PaymentMethodComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import CharacterBasketComponent from '@/organisms/CharacterBasketComponent/CharacterBasketComponent.vue'

const breadcrumbsItems = [
  {
    text: 'Order info',
    pageName: 'basket'
  }
]
</script>

<style>
@import './BasketPage.scss';
</style>
