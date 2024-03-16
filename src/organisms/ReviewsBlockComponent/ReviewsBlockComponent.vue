<template>
  <section class="reviews-section">
    <div class="reviews-section__container container">
      <h2 class="reviews-section__title section-title">Reviews</h2>

      <div class="reviews-section__reviews-list embla" ref="emblaRef">
        <div class="embla__container">
          <div
            class="reviews-section__reviews-list-item embla__slide"
            v-for="(item, index) in listReviews"
          >
            <ReviewComponent
              :key="index"
              :date="item.date"
              :rate="item.rate"
              :title="item.title"
              :description="item.description"
              :textLink="item.textLink"
              :link="item.link"
            />
          </div>
        </div>
      </div>
    </div>

    <PaginationComponent />
  </section>
</template>

<script setup>
import PaginationComponent from '@/molecules/PaginationComponent/PaginationComponent.vue'
import ReviewComponent from '@/molecules/ReviewComponent/ReviewComponent.vue'
import emblaCarouselVue from 'embla-carousel-vue'

const listReviews = [
  {
    date: 'September 12, 2020',
    rate: 5,
    title: 'Diablosanete',
    description:
      'So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!',
    textLink: 'dving.net',
    link: '/'
  },
  {
    date: 'September 12, 2020',
    rate: 4,
    title: 'For me',
    description:
      'For me, excellent customer service 10/10\n' +
      'speed response 10/10\n' +
      'quality service 10/10\n' +
      'will absolutely use it again recommend ...',
    textLink: 'dving.net',
    link: '/'
  },
  {
    date: 'September 12, 2020',
    rate: 3,
    title: 'Great service',
    description:
      'Great service. The boost got me 35+ higher in greater rifts levels and got me all the gear I needed for my build. Booster who ran me was friendly and very quick.',
    textLink: 'dving.net',
    link: '/'
  },
  {
    date: 'September 12, 2020',
    rate: 5,
    title: 'Diablosanete',
    description:
      'So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!',
    textLink: 'dving.net',
    link: '/'
  }
]

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(max-width: 374px)': { active: false },
    '(min-width: 1200px)': { active: false }
  }
})
</script>

<style>
@import './ReviewsBlockComponent.scss';
</style>
