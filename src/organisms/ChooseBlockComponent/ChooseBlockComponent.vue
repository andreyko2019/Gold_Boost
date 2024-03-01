<template>
  <section class="choose-section">
    <div class="choose-section__container">
      <h2 class="choose-section__title section-title">Why choose us</h2>

      <div class="choose-section__cards-list">
        <ChooseCardComponent
          v-for="(item, index) in chooseList"
          :key="index"
          :img="item.img"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ChooseCardComponent from '@/molecules/ChooseCardComponent/ChooseCardComponent.vue'
import FeedbackIcon from '@/atoms/icons/FeedbackIcon.vue'
import SafeIcon from '@/atoms/icons/SafeIcon.vue'
import ExperienceIcon from '@/atoms/icons/ExperienceIcon.vue'
const chooseList = [
  {
    img: FeedbackIcon,
    title: 'We are always online and give quick feedback',
    description: 'There will be a text that Roman will come up with later, and we will replace it'
  },
  {
    img: SafeIcon,
    title: 'We only have proven products',
    description: 'There will be a text that Roman will come up with later, and we will replace it'
  },
  {
    img: ExperienceIcon,
    title: 'Excellent experience in this field',
    description: 'There will be a text that Roman will come up with later, and we will replace it'
  }
]
</script>

<style>
@import './ChooseBlockComponent.scss';
</style>
