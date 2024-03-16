<template>
  <table class="products-status">
    <thead>
      <tr>
        <th class="products-status__title products-status__title-product-details">
          product details
        </th>

        <th
          class="products-status__title products-status__title-desktop products-status__title-date"
        >
          Date
        </th>

        <th
          class="products-status__title products-status__title-desktop products-status__title-price"
        >
          Price
        </th>

        <th
          class="products-status__title products-status__title-desktop products-status__title-status"
        >
          Status
        </th>
      </tr>
    </thead>

    <tbody class="products-status__body">
      <tr class="products-status__item" v-for="i in 6">
        <td class="products-status__item-background products-status__item-product-details">
          <div class="products-status__item-img-block">
            <img
              class="products-status__item-img"
              src="@/assets/images/Dashboard/product.webp"
              alt=""
            />
          </div>

          <div class="products-status__item-text-block">
            <p class="products-status__item-name">
              World of Warcraft Batlle for Azeroth world of warcraft batlle for azeroth
            </p>

            <p class="products-status__item-type">Heroic Raid Run</p>

            <p class="products-status__item-id">ID: WR250820103</p>
          </div>
        </td>

        <td class="products-status__item-background products-status__item-date">
          <p class="products-status__item-title">Date:</p>

          <p class="products-status__item-value">may 12, 2020</p>
        </td>

        <td class="products-status__item-background products-status__item-price">
          <p class="products-status__item-title">Price:</p>

          <p class="products-status__item-value">$200</p>
        </td>

        <td class="products-status__item-background products-status__item-status">
          <p class="products-status__item-title">Status:</p>

          <p class="products-status__item-value">In Progress</p>
        </td>

        <td class="products-status__item-button-block">
          <ButtonComponent class="products-status__item-button" rectangle>
            <RepeatIcon class="products-status__item-button-icon" />
            repeat order
          </ButtonComponent>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import RepeatIcon from '@/atoms/icons/RepeatIcon.vue'
</script>

<style>
@import './DashboardOrdersComponent.scss';
</style>
