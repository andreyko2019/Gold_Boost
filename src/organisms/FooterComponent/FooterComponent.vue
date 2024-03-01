<template>
  <footer class="footer">
    <hr class="line footer__line" />

    <div class="footer__container">
      <div class="footer__inner">
        <LogoComponent class="footer__logo" />

        <div class="footer__info-block">
          <p class="footer__info-text">
            {{ $t('footer.infoText') }}
          </p>

          <div class="footer__locations">
            <p class="footer__locations-title">
              <LocateIcon />

              {{ $t('footer.location.title') }}
            </p>

            <ul class="footer__locations-list">
              <li
                class="footer__locations-item"
                v-for="(item, index) in locationsList"
                :key="index"
              >
                <LinkComponent
                  class="footer__locations-item-link"
                  :text="$t(item.text)"
                  :to="item.to"
                />
              </li>
            </ul>
          </div>
        </div>

        <nav class="footer__nav footer-nav">
          <div class="footer-nav__item" v-for="(item, index) in footerNavList" :key="index">
            <p class="footer-nav__item-title">{{ $t(item.title) }}</p>

            <div class="footer-nav__item-list">
              <LinkComponent
                class="footer-nav__item-link link_regular"
                v-for="(link, index) in item.linksList"
                :key="index"
                :text="$t(link.text)"
                :to="link.to"
                ><component :is="link.icon" class="footer__social-icon"></component
              ></LinkComponent>
            </div>
          </div>
        </nav>

        <DiscountComponent class="footer__discount-block" />
      </div>
    </div>

    <hr class="line footer__line" />

    <div class="footer__container">
      <p class="footer__all-rights">{{ $t('footer.allRights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import LogoComponent from '@/atoms/LogoComponent/LogoComponent.vue'
import LinkComponent from '@/atoms/ui/LinkComponent/LinkComponent.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import InstagramIcon from '@/atoms/icons/InstagramIcon.vue'
import RedditIcon from '@/atoms/icons/RedditIcon.vue'
import DiscordIcon from '@/atoms/icons/DiscordIcon.vue'
import WhatsAppIcon from '@/atoms/icons/WhatsAppIcon.vue'
import DiscountComponent from '@/molecules/DiscountComponent/DiscountComponent.vue'
import LocateIcon from '@/atoms/icons/LocateIcon.vue'

const locationsList = [
  { text: 'footer.location.location1', to: '/' },
  { text: 'footer.location.location2', to: '/' }
]

const footerNavList = [
  {
    title: 'footer.nav.information',
    linksList: [
      {
        text: 'footer.nav.privacyPolicy',
        to: '/'
      },
      {
        text: 'footer.nav.termsOfUse',
        to: '/'
      },
      {
        text: 'footer.nav.refundPolicy',
        to: '/'
      }
    ]
  },
  {
    title: 'footer.nav.socialNetworks',
    linksList: [
      {
        icon: FacebookIcon,
        text: 'Facebook',
        to: '/'
      },
      {
        icon: InstagramIcon,
        text: 'Instagram',
        to: '/'
      },
      {
        icon: RedditIcon,
        text: 'Reddit',
        to: '/'
      }
    ]
  },
  {
    title: 'footer.nav.contactUs',
    linksList: [
      {
        text: 'goldbost@gmail. com',
        to: '/'
      },
      {
        icon: DiscordIcon,
        text: 'Discord',
        to: '/'
      },
      {
        icon: WhatsAppIcon,
        text: 'WhatsApp',
        to: '/'
      }
    ]
  }
]
</script>

<style>
@import './FooterComponent.scss';
</style>
