<template>
<!--  refactoring-->
  <section class="search-section">
    <div class="search-section__container">
      <h1 class="search-section__title">
        boost your <span>Gear</span> With professional in-game coaching service
      </h1>

      <div class="search-section__inner">
        <div class="search-section__buttons-block">
          <LinkComponent class="search-section__button" text="" to="/Catalog/WOW">
            <img src="@/assets/images/warcraft-classic.png" alt="Warcraft Classic" />
          </LinkComponent>

          <LinkComponent class="search-section__button" text="" to="/Catalog/WOWClassic">
            <img src="@/assets/images/warcraft.png" alt="Warcraft" />
          </LinkComponent>
        </div>

        <InputComponent
          class="search-section__input-component"
          searchButton
          placeholderText="Search ..."
        />
      </div>
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
