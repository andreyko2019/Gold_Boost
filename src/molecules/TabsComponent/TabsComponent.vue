<template>
  <div class="tabs-component">
    <div class="tabs-component__header">
      <input
        v-for="tab in tabsTitleList"
        :key="'tabButton_' + tab.id"
        :id="'tabButton_' + tab.id"
        class="tabs-component__tab-button"
        type="radio"
        name="tabs"
        :value="tab.title"
        :checked="activeTab.id === tab.id"
        @change="activeTab = tab"
      />

      <label
        v-for="tab in tabsTitleList"
        :key="'tabLabel_' + tab.id"
        :for="'tabButton_' + tab.id"
        class="tabs-component__tab-label"
        :class="{ 'tabs-component__tab-label-active': activeTab.id === tab.id }"
      >
        {{ tab.title }}
      </label>
    </div>

    <div class="tabs-component__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(['tabsTitleList'])
const activeTab = defineModel()
</script>

<style>
@import './TabsComponent.scss';
</style>
