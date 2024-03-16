<template>
  <div class="breadcrumbs">
    <LinkComponent
      class="link_gradient"
      text="Home"
      :to="{ name: 'home', params: { locale: $route.params.locale } }"
    >
      <HomeIcon />
    </LinkComponent>

    <div class="breadcrumbs__link-block" v-for="(link, index) in linkItems">
      /
      <LinkComponent
        class="breadcrumbs__link"
        :key="index"
        :text="link.text"
        :to="{ name: link.pageName, params: { locale: $route.params.locale } }"
      >
      </LinkComponent>
    </div>
  </div>
</template>

<script setup>
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import HomeIcon from '@/atoms/icons/HomeIcon.vue'

defineProps({
  linkItems: [
    {
      text: String,
      pageName: String
    }
  ]
})
</script>

<style>
@import './BreadcrumbsComponent.scss';
</style>
