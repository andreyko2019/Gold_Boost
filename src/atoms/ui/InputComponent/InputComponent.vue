<template>
  <div class="input-component">
    <input class="input-component__input" :placeholder="placeholderText" />

    <ButtonComponent arialLabel="Search button" v-if="searchButton"><SearchIcon /></ButtonComponent>
  </div>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import SearchIcon from '@/atoms/icons/SearchIcon.vue'

defineProps({
  placeholderText: String,
  searchButton: Boolean
})
</script>

<style>
@import './InputComponent.scss';
</style>
