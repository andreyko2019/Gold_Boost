<template>
  <footer class="footer">
    <hr class="line footer__line" />

    <div class="footer__container container">
      <div class="footer__inner">
        <LogoComponent class="footer__logo" />

        <div class="footer__info-block">
          <p class="footer__info-text">
            {{ siteLinks['footer_description'] }}
          </p>

          <div class="footer__locations">
            <div class="footer__locations-title">
              <div class="footer__locations-icon-block">
                <LocateIcon class="footer__locations-icon" />
              </div>

              <p class="footer__locations-title-text">
                {{ $t('footer.location.title') }}
              </p>
            </div>

            <ul class="footer__locations-list">
              <li class="footer__locations-item" v-if="!isLoading">
                <LinkComponent
                  class="footer__locations-item-link"
                  :text="siteLinks.address1"
                  :to="{ name: 'not found' }"
                />
              </li>

              <li class="footer__locations-item" v-if="!isLoading">
                <LinkComponent
                  class="footer__locations-item-link"
                  :text="siteLinks.address2"
                  :to="{ name: 'not found' }"
                />
              </li>
            </ul>
          </div>
        </div>

        <nav class="footer__nav footer-nav">
          <div class="footer-nav__item" v-for="(item, index) in footerNavList" :key="index">
            <p class="footer-nav__item-title">
              {{ $t(item.title) }}
            </p>

            <div class="footer-nav__item-list">
              <LinkComponent
                class="footer-nav__item-link link_regular"
                v-for="(link, index) in item.linksList"
                :key="index"
                :href="link.href"
                :text="link.locale ? $t(link.text) : link.text"
                :to="link.to"
              >
                <component :is="link.icon" class="footer__social-icon"></component>
              </LinkComponent>
            </div>
          </div>
        </nav>

        <DiscountComponent
          class="footer__discount-block"
          :text="siteLinks['subscribe_form_text']"
        />
      </div>
    </div>

    <hr class="line footer__line" />

    <div class="footer__container container">
      <p class="footer__all-rights">
        {{ siteLinks['footer_bottom_text'] }}
      </p>
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

const props = defineProps(['siteLinks', 'isLoading'])

const footerNavList = [
  {
    title: 'footer.nav.information',
    linksList: [
      {
        locale: true,
        text: 'footer.nav.privacyPolicy',
        to: props.siteLinks['privacy_policy_link'],
        href: true
      },
      {
        locale: true,
        text: 'footer.nav.termsOfUse',
        to: props.siteLinks['terms_of_use_link'],
        href: true
      },
      {
        locale: true,
        text: 'footer.nav.refundPolicy',
        to: props.siteLinks['refund_policy_link'],
        href: true
      }
    ]
  },
  {
    title: 'footer.nav.socialNetworks',
    linksList: [
      {
        icon: FacebookIcon,
        href: true,
        text: 'Facebook',
        to: props.siteLinks['facebook_link']
      },
      {
        icon: InstagramIcon,
        href: true,
        text: 'Instagram',
        to: props.siteLinks['instagram_link']
      },
      {
        icon: RedditIcon,
        href: true,
        text: 'Reddit',
        to: props.siteLinks['reddit_link']
      }
    ]
  },
  {
    title: 'footer.nav.contactUs',
    linksList: [
      {
        text: props.siteLinks.email,
        to: `mailto:${props.siteLinks.email}`,
        href: true
      },
      {
        icon: DiscordIcon,
        text: 'Discord',
        to: props.siteLinks['discord_link'],
        href: true
      },
      {
        icon: WhatsAppIcon,
        text: 'WhatsApp',
        to: props.siteLinks['whats_up_link']
      }
    ]
  }
]
</script>

<style>
@import './FooterComponent.scss';
</style>
