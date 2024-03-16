<template>
  <div class="tabs-component">
    <div class="tabs-component__header">
      <input
        v-for="(tab, index) in tabsList"
        :key="'tabButton_' + index"
        :id="'tabButton_' + index"
        class="tabs-component__tab-button"
        type="radio"
        name="tabs"
        :value="tab"
        :checked="activeTab === tab"
        @change="activeTab = tab"
      />

      <label
        v-for="(tab, index) in tabsList"
        :key="'tabLabel_' + index"
        :for="'tabButton_' + index"
        class="tabs-component__tab-label"
        :class="{ 'tabs-component__tab-label-active': activeTab === tab }"
      >
        {{ tab }}
      </label>
    </div>

    <div class="tabs-component__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(['tabsList'])

const activeTab = defineModel()
</script>

<style>
@import './TabsComponent.scss';
</style>
