<template>
  <div class="breadcrumbs">
    <LinkComponent
      class="link_gradient"
      text="Home"
      :to="{ name: 'home', params: { locale: $route.params.locale } }"
    >
      <HomeIcon />
    </LinkComponent>

    <div class="breadcrumbs__link-block" v-for="(item, index) in list" :key="index">
      /
      <LinkComponent class="breadcrumbs__link" :text="item.text" :to="item.link"> </LinkComponent>
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import HomeIcon from '@/atoms/icons/HomeIcon.vue'

defineProps({
  list: [
    {
      text: String,
      link: String
    }
  ]
})
</script>

<style>
@import './BreadcrumbsComponent.scss';
</style>
