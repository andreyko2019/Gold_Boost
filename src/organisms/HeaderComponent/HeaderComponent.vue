<template>
  <header class="header">
    <div class="header__attention-block header-attention-block">
      <div class="header-attention-block__container">
        <p class="header-attention-block__text">
          {{ $t('header.attentionText') }}
        </p>
      </div>
    </div>

    <div class="header__container">
      <LogoComponent class="header__logo" />

      <nav class="header__nav">
        <LinkComponent
          v-for="(link, index) in links"
          :key="index"
          :class="link.class"
          :text="$t(link.text)"
          :to="link.link"
          class="header__nav-link"
        />
      </nav>

      <LanguageSwitcher class="header__dropdown" />

      <div class="header__menu menu" :class="{ 'is-active': isBurgerActive }">
        <div class="menu__outside-block" @click="closeMenu"></div>

        <div class="menu__wrapper">
          <UserBlockComponent class="menu__user-block" />

          <hr class="menu__line line" />

          <nav class="menu__nav">
            <LinkComponent
              v-for="(link, index) in links"
              :key="index"
              :class="link.class"
              :text="$t(link.text)"
              :to="link.link"
              class="menu__nav-link"
            />
          </nav>
        </div>
      </div>

      <UserBlockComponent class="header__user-block" />

      <button
        class="burger-button burger-button__animx header__burger-button"
        :class="{ 'is-active': isBurgerActive }"
        @click="toggleBurger"
      >
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LogoComponent from '@/atoms/LogoComponent/LogoComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import UserBlockComponent from '@/molecules/UserBlockComponent/UserBlockComponent.vue'
import LanguageSwitcher from '@/molecules/LanguageSwitcher/LanguageSwitcher.vue'

const isBurgerActive = ref(false)

const links = [
  {
    text: 'header.reviews',
    link: '/'
  },
  {
    text: 'header.howItWorks',
    link: '/'
  },
  {
    text: 'header.contactSupport',
    link: '/',
    class: 'link_gradient'
  }
]

function toggleAppScroll(isDisabled) {
  document.body.style.overflow = isDisabled ? 'hidden' : ''
}

const toggleBurger = () => {
  isBurgerActive.value = !isBurgerActive.value
  toggleAppScroll(isBurgerActive.value)
}

const closeMenu = () => {
  isBurgerActive.value = false
}
</script>

<style>
@import 'HeaderComponent.scss';
</style>
