<template>
  <section class="user-characters">
    <CharacterComponent
      class="user-characters__character"
      button
      v-for="index in visibleCharacters"
      :maxCharacters="maxCharacters"
      v-model="visibleCharacters"
      :index="index"
      :key="index"
    />
  </section>
</template>

<script setup>
import CharacterComponent from '@/molecules/CharacterComponent/CharacterComponent.vue'
import { ref } from 'vue'

const visibleCharacters = ref(1)
const maxCharacters = 3
</script>

<style>
@import './DashboardCharacterComponent.scss';
</style>
