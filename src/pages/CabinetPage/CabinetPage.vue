<template>
  <div class="dashboard-page">
    <div class="container dashboard-page__container">
      <BreadcrumbsComponent :linkItems="linkItems" />

      <h1 class="dashboard-page__title page-title">Dashboard</h1>

      <Tabs class="dashboard-page__tabs" :tabsList="tabsList" v-model="activeTab">
        <keep-alive>
          <component :is="tabComponents[activeTab]" />
        </keep-alive>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import Tabs from '@/molecules/TabsComponent/TabsComponent.vue'
import BreadcrumbsComponent from '@/molecules/BreadcrumbsComponent/BreadcrumbsComponent.vue'
import DashboardCharacterComponent from '@/organisms/DashboardCharacterComponent/DashboardCharacterComponent.vue'
import DashboardProfileComponent from '@/organisms/DashboardProfileComponent/DashboardProfileComponent.vue'
import { ref } from 'vue'
import DashboardOrdersComponent from '@/organisms/DashboardOrdersComponent/DashboardOrdersComponent.vue'

const linkItems = [
  {
    text: 'Dashboard',
    pageName: 'cabinet'
  }
]

const activeTab = ref('Profile')

const tabComponents = {
  Orders: DashboardOrdersComponent,
  Profile: DashboardProfileComponent,
  Character: DashboardCharacterComponent
}

const tabsList = Object.keys(tabComponents)
</script>

<style>
@import './CabinetPage.scss';
</style>
