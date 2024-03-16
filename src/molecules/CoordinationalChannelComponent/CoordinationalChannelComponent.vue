<template>
  <div class="coordination-channel">
    <h2 class="coordination-channel__title">Preferred order coordination channel</h2>

    <ChannelRadioButtonsList class="coordination-channel__radio-buttons-list" />
  </div>
</template>

<script setup>
import ChannelRadioButtonsList from '@/molecules/ChannelRadioButtonsList/ChannelRadioButtonsList.vue'
</script>

<style>
@import './CoordinationalChannelComponent.scss';
</style>
