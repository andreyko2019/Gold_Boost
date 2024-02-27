<template>
  <section class="search-section">
    <div class="search-section__container">
      <h2 class="search-section__title">
        boost your <span>Gear</span> With professional in-game coaching service
      </h2>

      <div class="search-section__buttons-block">
        <LinkComponent text="" to="/Catalog/WOW">
          <img src="@/assets/images/warcraft-classic.png" />
        </LinkComponent>

        <LinkComponent text="" to="/Catalog/WOWClassic">
          <img src="@/assets/images/warcraft-classic.png" />
        </LinkComponent>
      </div>

      <InputComponent placeholderText="Search ..." />
    </div>
  </section>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
</script>

<style>
@import './SearchBlockComponent.scss';
</style>
