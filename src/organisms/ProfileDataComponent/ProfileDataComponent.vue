<template>
  <div class="profile-data">
    <h2 class="profile-data__title basket-section-title">Profile data</h2>

    <div class="profile-data__inputs">
      <inputComponent id="input-name" placeholderText="Name" border />

      <inputComponent id="input-email" placeholderText="Email" border />

      <inputComponent id="input-surname" placeholderText="Surname" border />

      <inputComponent id="input-country" placeholderText="Country" border />
    </div>

    <attention-component class="profile-data__attention-block" />
  </div>
</template>

<script setup>
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import AttentionComponent from '@/molecules/AttentionComponent/AttentionComponent.vue'
</script>

<style>
@import './ProfileDataComponent.scss';
</style>
